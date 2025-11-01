import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/db';
import { Campground } from '@/lib/models';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/authOptions';
import { geocodeForward } from '@/lib/geocode';

export const runtime = 'nodejs';

export async function GET() {
  try {
    await connectToDatabase();
    const camps = await Campground.find({}).select('title location price images geometry').lean();
    return NextResponse.json({ ok: true, camps });
  } catch (e) {
    console.error('GET /api/campgrounds error', e);
    return NextResponse.json({ ok: false, error: 'Failed to load campgrounds' }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json({ ok: false, error: 'Unauthorized' }, { status: 401 });
    }
    const body = await request.json();
    const { title, location, price, description, images = [] } = body || {};
    if (!title || !location) {
      return NextResponse.json({ ok: false, error: 'Missing required fields' }, { status: 400 });
    }
    await connectToDatabase();
    const geometry = await geocodeForward(location);
    if (!geometry) {
      return NextResponse.json({ ok: false, error: 'Invalid location' }, { status: 400 });
    }
    const doc = await Campground.create({ title, location, price, description, geometry, images, author: session.user.id });
    return NextResponse.json({ ok: true, id: String(doc._id) }, { status: 201 });
  } catch (e) {
    console.error('POST /api/campgrounds error', e);
    return NextResponse.json({ ok: false, error: 'Failed to create campground' }, { status: 500 });
  }
}
