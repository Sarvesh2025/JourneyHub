import Link from 'next/link';
import Image from 'next/image';
import ReviewForm from '@/components/ReviewForm.jsx';
import MapView from '@/components/MapView.jsx';
import CampActions from '@/components/CampActions.jsx';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, DollarSign, ArrowLeft, Star, User, MessageSquare, Tent } from 'lucide-react';

export const dynamic = 'force-dynamic';

async function loadCamp(id) {
  const base = process.env.NEXT_PUBLIC_BASE_URL ?? '';
  const [campRes, revRes] = await Promise.all([
    fetch(`${base}/api/campgrounds/${id}`, { cache: 'no-store' }),
    fetch(`${base}/api/campgrounds/${id}/reviews`, { cache: 'no-store' })
  ]);
  const campJson = campRes.ok ? await campRes.json() : { ok: false };
  const revJson = revRes.ok ? await revRes.json() : { ok: false, reviews: [] };
  return { camp: campJson.camp || null, reviews: revJson.reviews || [] };
}

export default async function CampgroundDetail({ params }) {
  const { id } = params;
  const { camp, reviews } = await loadCamp(id);
  
  if (!camp) {
    return (
      <div className="container max-w-2xl py-16 px-4">
        <Card>
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 h-12 w-12 rounded-full bg-destructive/10 flex items-center justify-center">
              <Tent className="h-6 w-6 text-destructive" />
            </div>
            <CardTitle>Campground Not Found</CardTitle>
            <CardDescription>The campground you're looking for doesn't exist.</CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center">
            <Button asChild>
              <Link href="/campgrounds">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Campgrounds
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const avgRating = reviews.length > 0 
    ? (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1)
    : null;

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Back Button */}
      <div className="border-b bg-background/95 backdrop-blur">
        <div className="container py-4 px-4">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/campgrounds">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Campgrounds
            </Link>
          </Button>
        </div>
      </div>

      <div className="container max-w-6xl py-8 px-4">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Images Gallery */}
            {Array.isArray(camp.images) && camp.images.length > 0 ? (
              <div className="grid gap-2">
                <div className="relative h-64 rounded-lg overflow-hidden">
                  <Image
                    src={camp.images[0].url}
                    alt={camp.title}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                {camp.images.length > 1 && (
                  <div className="grid grid-cols-4 gap-2">
                    {camp.images.slice(1, 5).map((img, idx) => (
                      <div key={img.filename || idx} className="relative h-20 rounded-md overflow-hidden">
                        <Image
                          src={img.url}
                          alt={`${camp.title} ${idx + 2}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <div className="h-64 rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                <Tent className="h-16 w-16 text-primary/20" />
              </div>
            )}

            {/* Campground Info Card */}
            <Card>
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <CardTitle className="text-3xl mb-2">{camp.title}</CardTitle>
                    <CardDescription className="flex items-center gap-2 text-base">
                      <MapPin className="h-4 w-4" />
                      {camp.location}
                    </CardDescription>
                  </div>
                  {typeof camp.price !== 'undefined' && (
                    <Badge className="text-lg px-4 py-2">
                      <DollarSign className="h-4 w-4 mr-1" />
                      {camp.price}/night
                    </Badge>
                  )}
                </div>
                {avgRating && (
                  <div className="flex items-center gap-2 pt-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(avgRating)
                              ? 'fill-primary text-primary'
                              : 'text-muted-foreground'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {avgRating} ({reviews.length} {reviews.length === 1 ? 'review' : 'reviews'})
                    </span>
                  </div>
                )}
              </CardHeader>
              {camp.description && (
                <CardContent>
                  <h3 className="font-semibold mb-2">About this campground</h3>
                  <p className="text-muted-foreground leading-relaxed">{camp.description}</p>
                </CardContent>
              )}
            </Card>

            {/* Map */}
            {camp.geometry?.coordinates && (
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-xl flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    Location
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="rounded-lg overflow-hidden border" style={{ height: '300px' }}>
                    <MapView coordinates={camp.geometry.coordinates} title={camp.title} location={camp.location} />
                  </div>
                  <div className="flex items-center justify-between text-sm pt-2">
                    <div className="flex items-center gap-1.5 text-muted-foreground">
                      <MapPin className="h-3.5 w-3.5" />
                      <span>{camp.geometry.coordinates[1].toFixed(4)}°N, {camp.geometry.coordinates[0].toFixed(4)}°E</span>
                    </div>
                    <a 
                      href={`https://www.google.com/maps?q=${camp.geometry.coordinates[1]},${camp.geometry.coordinates[0]}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline inline-flex items-center gap-1 font-medium"
                    >
                      View on Maps
                      <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Reviews Section */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="h-5 w-5" />
                  Reviews ({reviews.length})
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {reviews.length === 0 ? (
                  <p className="text-muted-foreground text-center py-8">
                    No reviews yet. Be the first to share your experience!
                  </p>
                ) : (
                  <div className="space-y-4">
                    {reviews.map((review) => (
                      <div key={review._id} className="border rounded-lg p-4 space-y-2">
                        <div className="flex items-start justify-between">
                          <div className="flex items-center gap-2">
                            <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                              <User className="h-4 w-4 text-primary" />
                            </div>
                            <div>
                              <p className="font-medium text-sm">
                                {review.author?.username || 'Anonymous'}
                              </p>
                              <div className="flex items-center gap-1">
                                {[...Array(5)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className={`h-3 w-3 ${
                                      i < review.rating
                                        ? 'fill-primary text-primary'
                                        : 'text-muted-foreground'
                                    }`}
                                  />
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground pl-10">{review.body}</p>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Add Review Form */}
            <Card>
              <CardHeader>
                <CardTitle>Add Your Review</CardTitle>
                <CardDescription>Share your experience</CardDescription>
              </CardHeader>
              <CardContent>
                <ReviewForm campgroundId={id} />
              </CardContent>
            </Card>

            {/* Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <CampActions campId={camp._id} authorId={camp.author?._id} />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
