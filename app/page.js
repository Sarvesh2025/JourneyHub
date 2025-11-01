import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Tent, MapPin, Users, Star, Compass } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="flex-1 flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-100/50">
        
        <div className="container px-4 py-8 md:py-12 relative">
          <div className="flex flex-col items-center text-center space-y-6 max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 border border-primary/20 shadow-sm">
              <Tent className="h-4 w-4 text-primary" />
              <span className="text-sm font-semibold text-primary">Discover Amazing Campgrounds</span>
            </div>
            
            {/* Heading */}
            <h1 className="text-3xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Your Next Adventure{' '}
              <span className="text-primary">Starts Here</span>
            </h1>
            
            {/* Description */}
            <p className="max-w-[650px] text-muted-foreground text-lg md:text-xl leading-relaxed">
              Explore breathtaking campgrounds, share your experiences, and connect with fellow outdoor enthusiasts. Find your perfect camping spot today.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" asChild className="text-base px-8 h-12 shadow-lg hover:shadow-xl transition-shadow">
                <Link href="/campgrounds">
                  Explore Campgrounds
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-base px-8 h-12">
                <Link href="/register">Get Started Free</Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap items-center justify-center gap-8 pt-8 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <MapPin className="h-4 w-4 text-primary" />
                </div>
                <span className="font-medium">1000+ Locations</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <Users className="h-4 w-4 text-primary" />
                </div>
                <span className="font-medium">Active Community</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <Star className="h-4 w-4 text-primary" />
                </div>
                <span className="font-medium">Trusted Reviews</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
