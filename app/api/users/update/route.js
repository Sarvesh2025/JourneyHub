import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/authOptions';
import { connectToDatabase } from '@/lib/db';
import { User } from '@/lib/models';

export async function PUT(request) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await connectToDatabase();

    const body = await request.json();
    const { email, currentPassword, newPassword } = body;

    // Find the user by username
    const user = await User.findOne({ username: session.user.name });
    
    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    // Update email if provided and different
    if (email && email !== user.email) {
      // Check if email is already taken by another user
      const existingUser = await User.findOne({ email, _id: { $ne: user._id } });
      if (existingUser) {
        return NextResponse.json({ error: 'Email already in use' }, { status: 400 });
      }
      user.email = email;
    }

    // Change password if both current and new passwords are provided
    if (currentPassword && newPassword) {
      // Verify current password using passport-local-mongoose method
      const authResult = await new Promise((resolve) => {
        user.authenticate(currentPassword, (err, user, passwordErr) => {
          if (err || passwordErr || !user) {
            resolve(false);
          } else {
            resolve(true);
          }
        });
      });

      if (!authResult) {
        return NextResponse.json({ error: 'Current password is incorrect' }, { status: 400 });
      }
      
      // Set new password using passport-local-mongoose method
      await new Promise((resolve, reject) => {
        user.setPassword(newPassword, (err) => {
          if (err) reject(err);
          else resolve();
        });
      });
    }

    await user.save();

    return NextResponse.json({
      ok: true,
      message: 'Profile updated successfully',
      user: {
        username: user.username,
        email: user.email,
      }
    });
  } catch (error) {
    console.error('Error updating user profile:', error);
    return NextResponse.json(
      { error: 'Failed to update profile' },
      { status: 500 }
    );
  }
}
