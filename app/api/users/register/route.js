import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/db';

export const runtime = 'nodejs';

export async function POST(request) {
  try {
    console.log('[POST] /api/users/register - incoming request');
    const body = await request.json();
    const { username, password, email } = body || {};
    if (!username || !password) {
      return NextResponse.json({ ok: false, error: 'Missing username or password' }, { status: 400 });
    }
    if (!email) {
      return NextResponse.json({ ok: false, error: 'Email is required' }, { status: 400 });
    }
    await connectToDatabase();
    // Dynamically load models to capture import-time errors
    const models = await import('@/lib/models');
    const User = models.User;
    const user = new User({ username, email });
    await new Promise((resolve, reject) => {
      User.register(user, password, (err) => (err ? reject(err) : resolve()))
    });
    console.log('[POST] /api/users/register - success for', username);
    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error('[POST] /api/users/register - error:', e);
    // Map common errors to stable statuses
    const message = e?.message || 'Registration failed';
    // Mongo duplicate key
    if (e?.code === 11000 || /duplicate key/i.test(message)) {
      return NextResponse.json({ ok: false, error: 'Username or email already in use' }, { status: 409 });
    }
    // Mongoose validation
    if (e?.name === 'ValidationError') {
      return NextResponse.json({ ok: false, error: message }, { status: 400 });
    }
    // Passport-local-mongoose errors
    if (e?.name === 'UserExistsError') {
      return NextResponse.json({ ok: false, error: 'User already exists' }, { status: 409 });
    }
    // Fallback 500 with JSON
    return NextResponse.json({ ok: false, error: message }, { status: 500 });
  }
}
