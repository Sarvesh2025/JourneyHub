"use client";
import { useSession, signIn } from 'next-auth/react';
import { useState, useTransition } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Star, Loader2, AlertCircle } from 'lucide-react';

export default function ReviewForm({ campgroundId }) {
  const { data: session } = useSession();
  const router = useRouter();
  const [rating, setRating] = useState(5);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [body, setBody] = useState('');
  const [error, setError] = useState('');
  const [pending, startTransition] = useTransition();

  if (!session?.user) {
    return (
      <div className="text-center py-6 space-y-4">
        <p className="text-muted-foreground">You must be signed in to post a review.</p>
        <Button onClick={() => signIn(undefined, { callbackUrl: `/campgrounds/${campgroundId}` })}>
          Sign in to Review
        </Button>
      </div>
    );
  }

  async function onSubmit(e) {
    e.preventDefault();
    setError('');
    try {
      const res = await fetch(`/api/campgrounds/${campgroundId}/reviews`, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ review: { rating: Number(rating), body } })
      });
      const json = await res.json();
      if (!res.ok || !json.ok) {
        throw new Error(json.error || 'Failed to post review');
      }
      setBody('');
      setRating(5);
      startTransition(() => router.refresh());
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      {error && (
        <div className="p-4 rounded-md bg-destructive/10 border border-destructive/20 flex items-start gap-3">
          <AlertCircle className="h-5 w-5 text-destructive mt-0.5" />
          <p className="text-sm font-medium text-destructive">{error}</p>
        </div>
      )}

      <div className="space-y-2">
        <Label>Your Rating</Label>
        <div className="flex items-center gap-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              onClick={() => setRating(star)}
              onMouseEnter={() => setHoveredRating(star)}
              onMouseLeave={() => setHoveredRating(0)}
              className="transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded"
            >
              <Star
                className={`h-8 w-8 transition-colors ${
                  star <= (hoveredRating || rating)
                    ? 'fill-primary text-primary'
                    : 'text-muted-foreground'
                }`}
              />
            </button>
          ))}
          <span className="ml-2 text-sm text-muted-foreground">
            {rating} {rating === 1 ? 'star' : 'stars'}
          </span>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="review-body">Your Review</Label>
        <Textarea
          id="review-body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
          rows={4}
          placeholder="Share your experience at this campground..."
          disabled={pending}
        />
      </div>

      <Button type="submit" disabled={pending} className="w-full">
        {pending ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Posting...
          </>
        ) : (
          'Post Review'
        )}
      </Button>
    </form>
  );
}
