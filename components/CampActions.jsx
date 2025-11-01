"use client";
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { Button } from '@/components/ui/button';
import { Edit, Trash2, Shield } from 'lucide-react';
import { useState } from 'react';

export default function CampActions({ campId, authorId }) {
  const { data: session } = useSession();
  const [deleting, setDeleting] = useState(false);
  const isOwner = session?.user?.id && String(session.user.id) === String(authorId);

  async function onDelete() {
    if (!confirm('Are you sure you want to delete this campground? This action cannot be undone.')) return;
    setDeleting(true);
    try {
      const res = await fetch(`/api/campgrounds/${campId}`, { method: 'DELETE' });
      if (res.ok) {
        window.location.href = '/campgrounds';
      } else {
        const j = await res.json().catch(() => ({}));
        alert(j.error || 'Failed to delete');
        setDeleting(false);
      }
    } catch (err) {
      alert('Failed to delete campground');
      setDeleting(false);
    }
  }

  if (!isOwner) {
    return (
      <div className="text-center py-6">
        <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
          <Shield className="h-4 w-4" />
          <span>Only the owner can edit this campground</span>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <Button asChild variant="outline" className="w-full">
        <Link href={`/campgrounds/${campId}/edit`} className="flex items-center justify-center">
          <Edit className="mr-2 h-4 w-4" />
          Edit Campground
        </Link>
      </Button>
      <Button 
        onClick={onDelete} 
        disabled={deleting}
        variant="destructive" 
        className="w-full flex items-center justify-center"
      >
        <Trash2 className="mr-2 h-4 w-4" />
        {deleting ? 'Deleting...' : 'Delete Campground'}
      </Button>
    </div>
  );
}
