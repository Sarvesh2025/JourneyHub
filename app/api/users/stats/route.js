import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/authOptions';
import { connectToDatabase } from '@/lib/db';
import { Campground, Review, User } from '@/lib/models';

export async function GET(request) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await connectToDatabase();

    // Get user ID from username
    const user = await User.findOne({ username: session.user.name });
    
    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    // Count campgrounds (posts) created by user
    const campgroundCount = await Campground.countDocuments({ author: user._id });

    // Count reviews (comments) created by user
    const reviewCount = await Review.countDocuments({ author: user._id });

    // Get recent campgrounds
    const recentCampgrounds = await Campground.find({ author: user._id })
      .sort({ _id: -1 })
      .limit(5)
      .select('title location price images');

    // Get recent reviews with campground info
    const recentReviews = await Review.find({ author: user._id })
      .sort({ _id: -1 })
      .limit(5)
      .select('body rating');

    return NextResponse.json({
      ok: true,
      stats: {
        campgroundCount,
        reviewCount,
        recentCampgrounds,
        recentReviews,
      },
      user: {
        username: user.username,
        email: user.email,
        avatar: user.avatar,
      }
    });
  } catch (error) {
    console.error('Error fetching user stats:', error);
    return NextResponse.json(
      { error: 'Failed to fetch user statistics' },
      { status: 500 }
    );
  }
}
