import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, DollarSign, ArrowRight, Tent } from 'lucide-react';

export const dynamic = 'force-dynamic';

async function loadCampgrounds() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL ?? ''}/api/campgrounds`, { cache: 'no-store' });
  if (!res.ok) return { ok: false, camps: [] };
  return res.json();
}

export default async function CampgroundsPage() {
  const { camps = [] } = await loadCampgrounds();
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Header Section */}
      <div className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container py-8 px-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-4xl font-bold tracking-tight mb-2">Explore Campgrounds</h1>
              <p className="text-muted-foreground text-lg">
                Discover {camps.length} amazing camping {camps.length === 1 ? 'destination' : 'destinations'}
              </p>
            </div>
            <Button size="lg" asChild>
              <Link href="/campgrounds/new">
                <Tent className="mr-2 h-5 w-5" />
                Add Campground
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Campgrounds Grid */}
      <div className="container py-8 px-4">
        {camps.length === 0 ? (
          <Card className="max-w-md mx-auto">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 h-12 w-12 rounded-full bg-muted flex items-center justify-center">
                <Tent className="h-6 w-6 text-muted-foreground" />
              </div>
              <CardTitle>No campgrounds yet</CardTitle>
              <CardDescription>
                Be the first to share an amazing camping spot!
              </CardDescription>
            </CardHeader>
            <CardFooter className="justify-center">
              <Button asChild>
                <Link href="/campgrounds/new">Add First Campground</Link>
              </Button>
            </CardFooter>
          </Card>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {camps.map((camp) => (
              <Card key={camp._id} className="overflow-hidden hover:shadow-lg transition-shadow group">
                {/* Image */}
                <div className="relative h-48 bg-muted overflow-hidden">
                  {camp.images && camp.images.length > 0 ? (
                    <Image
                      src={camp.images[0].url}
                      alt={camp.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-primary/5">
                      <Tent className="h-16 w-16 text-primary/20" />
                    </div>
                  )}
                  {camp.price && (
                    <div className="absolute top-3 right-3">
                      <Badge className="bg-background/90 backdrop-blur text-foreground border shadow-sm">
                        <DollarSign className="h-3 w-3 mr-0.5" />
                        {camp.price}/night
                      </Badge>
                    </div>
                  )}
                </div>

                {/* Content */}
                <CardHeader>
                  <CardTitle className="line-clamp-1 group-hover:text-primary transition-colors">
                    {camp.title}
                  </CardTitle>
                  <CardDescription className="flex items-center gap-1">
                    <MapPin className="h-3.5 w-3.5" />
                    <span className="line-clamp-1">{camp.location}</span>
                  </CardDescription>
                </CardHeader>

                {/* Footer */}
                <CardFooter>
                  <Button asChild variant="ghost" className="w-full group/btn">
                    <Link href={`/campgrounds/${camp._id}`}>
                      View Details
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
