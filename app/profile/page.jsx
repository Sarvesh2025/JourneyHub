"use client";
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { User, MapPin, MessageSquare, Settings, Tent, Star } from 'lucide-react';
import Link from 'next/link';

export default function ProfilePage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login');
    }
  }, [status, router]);

  useEffect(() => {
    if (session?.user) {
      fetchUserStats();
    }
  }, [session]);

  const fetchUserStats = async () => {
    try {
      const base = process.env.NEXT_PUBLIC_BASE_URL ?? '';
      const res = await fetch(`${base}/api/users/stats`);
      const data = await res.json();
      if (data.ok) {
        setStats(data.stats);
      }
    } catch (error) {
      console.error('Error fetching stats:', error);
    } finally {
      setLoading(false);
    }
  };

  if (status === 'loading' || loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
            <p className="mt-4 text-muted-foreground">Loading profile...</p>
          </div>
        </div>
      </div>
    );
  }

  if (!session?.user) {
    return null;
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      {/* Profile Header */}
      <div className="mb-8">
        <Card className="overflow-hidden">
          <div className="h-32 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/5"></div>
          <CardContent className="relative pt-0 pb-6">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between -mt-16 md:-mt-12">
              <div className="flex flex-col md:flex-row md:items-end gap-4">
                <div className="h-24 w-24 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center border-4 border-background shadow-lg overflow-hidden">
                  {stats?.user?.avatar?.url ? (
                    <img 
                      src={stats.user.avatar.url} 
                      alt={session.user.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <User className="h-12 w-12 text-white" />
                  )}
                </div>
                <div className="mb-2">
                  <h1 className="text-3xl font-bold">{session.user.name}</h1>
                  <p className="text-muted-foreground">{stats?.user?.email || session.user.email}</p>
                </div>
              </div>
              <Button asChild className="mt-4 md:mt-0 md:mb-2">
                <Link href="/profile/edit">
                  <Settings className="mr-2 h-4 w-4" />
                  Edit Profile
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Campgrounds</CardTitle>
            <Tent className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-primary">{stats?.campgroundCount || 0}</div>
            <p className="text-xs text-muted-foreground mt-1">
              Campgrounds you've added
            </p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Reviews</CardTitle>
            <MessageSquare className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-primary">{stats?.reviewCount || 0}</div>
            <p className="text-xs text-muted-foreground mt-1">
              Reviews you've written
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Campgrounds */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Tent className="h-5 w-5" />
              Recent Campgrounds
            </CardTitle>
            <CardDescription>Your latest campground additions</CardDescription>
          </CardHeader>
          <CardContent>
            {stats?.recentCampgrounds && stats.recentCampgrounds.length > 0 ? (
              <div className="space-y-4">
                {stats.recentCampgrounds.map((campground) => (
                  <Link
                    key={campground._id}
                    href={`/campgrounds/${campground._id}`}
                    className="block p-3 rounded-lg border hover:bg-accent transition-colors"
                  >
                    <div className="flex items-start gap-3">
                      {campground.images?.[0]?.url && (
                        <img
                          src={campground.images[0].url}
                          alt={campground.title}
                          className="w-16 h-16 rounded object-cover"
                        />
                      )}
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold truncate">{campground.title}</h3>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                          <MapPin className="h-3 w-3" />
                          <span className="truncate">{campground.location}</span>
                        </div>
                        <p className="text-sm font-medium text-primary mt-1">
                          ${campground.price}/night
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center py-8 text-muted-foreground">
                <Tent className="h-12 w-12 mx-auto mb-3 opacity-50" />
                <p>No campgrounds yet</p>
                <Button asChild variant="outline" size="sm" className="mt-3">
                  <Link href="/campgrounds/new">Add your first campground</Link>
                </Button>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Recent Reviews */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="h-5 w-5" />
              Recent Reviews
            </CardTitle>
            <CardDescription>Your latest reviews</CardDescription>
          </CardHeader>
          <CardContent>
            {stats?.recentReviews && stats.recentReviews.length > 0 ? (
              <div className="space-y-4">
                {stats.recentReviews.map((review, index) => (
                  <div
                    key={review._id || index}
                    className="p-3 rounded-lg border"
                  >
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < review.rating
                              ? 'fill-yellow-400 text-yellow-400'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                      <span className="text-sm text-muted-foreground ml-2">
                        {review.rating}/5
                      </span>
                    </div>
                    <p className="text-sm line-clamp-2">{review.body}</p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8 text-muted-foreground">
                <MessageSquare className="h-12 w-12 mx-auto mb-3 opacity-50" />
                <p>No reviews yet</p>
                <Button asChild variant="outline" size="sm" className="mt-3">
                  <Link href="/campgrounds">Explore campgrounds</Link>
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
