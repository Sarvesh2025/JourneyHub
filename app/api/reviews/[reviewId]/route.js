import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/db';
import { Review, Campground } from '@/lib/models';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/authOptions';

export const runtime = 'nodejs';

export async function DELETE(_req, { params }) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) return NextResponse.json({ ok: false, error: 'Unauthorized' }, { status: 401 });

    const { reviewId } = params;
    await connectToDatabase();
    const review = await Review.findById(reviewId);
    if (!review) return NextResponse.json({ ok: false, error: 'Not found' }, { status: 404 });
    if (String(review.author) !== String(session.user.id)) {
      return NextResponse.json({ ok: false, error: 'Forbidden' }, { status: 403 });
    }

    await Campground.updateMany({ reviews: reviewId }, { $pull: { reviews: reviewId } });
    await Review.findByIdAndDelete(reviewId);
    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error('DELETE /api/reviews/[reviewId] error', e);
    return NextResponse.json({ ok: false, error: 'Failed to delete review' }, { status: 500 });
  }
}
