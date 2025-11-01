import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/db';
import { Campground, Review } from '@/lib/models';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/authOptions';

export const runtime = 'nodejs';

export async function GET(_req, { params }) {
  try {
    await connectToDatabase();
    const { id } = params;
    const camp = await Campground.findById(id).populate({ path: 'reviews', populate: { path: 'author' } }).lean();
    if (!camp) return NextResponse.json({ ok: false, error: 'Not found' }, { status: 404 });
    return NextResponse.json({ ok: true, reviews: camp.reviews || [] });
  } catch (e) {
    console.error('GET /api/campgrounds/[id]/reviews error', e);
    return NextResponse.json({ ok: false, error: 'Failed to load reviews' }, { status: 500 });
  }
}

export async function POST(request, { params }) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) return NextResponse.json({ ok: false, error: 'Unauthorized' }, { status: 401 });

    const { id } = params;
    const body = await request.json();
    const { rating, body: text } = body?.review || {};
    if (!text || typeof rating === 'undefined') {
      return NextResponse.json({ ok: false, error: 'Missing review body or rating' }, { status: 400 });
    }

    await connectToDatabase();
    const camp = await Campground.findById(id);
    if (!camp) return NextResponse.json({ ok: false, error: 'Campground not found' }, { status: 404 });

    const review = new Review({ body: text, rating, author: session.user.id });
    await review.save();
    camp.reviews.push(review._id);
    await camp.save();

    return NextResponse.json({ ok: true, reviewId: String(review._id) }, { status: 201 });
  } catch (e) {
    console.error('POST /api/campgrounds/[id]/reviews error', e);
    return NextResponse.json({ ok: false, error: 'Failed to create review' }, { status: 500 });
  }
}
