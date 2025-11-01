import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/db';
import { Campground } from '@/lib/models';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/authOptions';
import { cloudinary as cloud } from '@/lib/cloudinary';

export const runtime = 'nodejs';

export async function GET(_req, { params }) {
  try {
    await connectToDatabase();
    const { id } = params;
    const camp = await Campground.findById(id).populate('author').lean();
    if (!camp) return NextResponse.json({ ok: false, error: 'Not found' }, { status: 404 });
    return NextResponse.json({ ok: true, camp });
  } catch (e) {
    console.error('GET /api/campgrounds/[id] error', e);
    return NextResponse.json({ ok: false, error: 'Failed to load campground' }, { status: 500 });
  }
}

export async function PUT(request, { params }) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) return NextResponse.json({ ok: false, error: 'Unauthorized' }, { status: 401 });
    await connectToDatabase();
    const { id } = params;
    const body = await request.json();
    const existing = await Campground.findById(id);
    if (!existing) return NextResponse.json({ ok: false, error: 'Not found' }, { status: 404 });
    if (String(existing.author) !== String(session.user.id)) {
      return NextResponse.json({ ok: false, error: 'Forbidden' }, { status: 403 });
    }
    const updatable = ['title', 'location', 'price', 'description'];
    updatable.forEach((k) => {
      if (Object.prototype.hasOwnProperty.call(body, k)) existing[k] = body[k];
    });
    // Add new images if provided
    if (Array.isArray(body.imagesAdd) && body.imagesAdd.length) {
      existing.images.push(...body.imagesAdd);
    }
    await existing.save();
    // Delete images if requested
    if (Array.isArray(body.deleteImages) && body.deleteImages.length) {
      for (const filename of body.deleteImages) {
        try { await cloud.uploader.destroy(filename); } catch (e) {}
      }
      await existing.updateOne({ $pull: { images: { filename: { $in: body.deleteImages } } } });
    }
    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error('PUT /api/campgrounds/[id] error', e);
    return NextResponse.json({ ok: false, error: 'Failed to update campground' }, { status: 500 });
  }
}

export async function DELETE(_request, { params }) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) return NextResponse.json({ ok: false, error: 'Unauthorized' }, { status: 401 });
    await connectToDatabase();
    const { id } = params;
    const existing = await Campground.findById(id);
    if (!existing) return NextResponse.json({ ok: false, error: 'Not found' }, { status: 404 });
    if (String(existing.author) !== String(session.user.id)) {
      return NextResponse.json({ ok: false, error: 'Forbidden' }, { status: 403 });
    }
    await Campground.findByIdAndDelete(id);
    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error('DELETE /api/campgrounds/[id] error', e);
    return NextResponse.json({ ok: false, error: 'Failed to delete campground' }, { status: 500 });
  }
}
