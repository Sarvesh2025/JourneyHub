import { NextResponse } from 'next/server';

// No-op Next.js middleware to satisfy framework requirements.
export default function middleware() {
  return NextResponse.next();
}

// Optionally scope if needed later
export const config = {
  matcher: [
    // '/((?!_next/static|_next/image|favicon.ico).*)'
  ],
};
