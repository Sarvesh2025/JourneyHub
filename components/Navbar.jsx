"use client";
import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';
import { Button } from '@/components/ui/button';
import { Tent, MapPin, PlusCircle, LogOut, User, Menu, Settings, UserCircle } from 'lucide-react';
import { useState, useEffect } from 'react';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from '@/components/ui/dropdown-menu';

export default function Navbar() {
  const { data: session } = useSession();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const [userAvatar, setUserAvatar] = useState(null);

  // Fetch user avatar
  useEffect(() => {
    if (session?.user) {
      fetchUserAvatar();
    }
  }, [session]);

  const fetchUserAvatar = async () => {
    try {
      const res = await fetch('/api/users/stats');
      const data = await res.json();
      if (data.ok && data.user?.avatar) {
        setUserAvatar(data.user.avatar);
      }
    } catch (error) {
      console.error('Error fetching avatar:', error);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center px-4">
        {/* Logo */}
        <div className="mr-8 flex items-center space-x-2">
          <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <Tent className="h-6 w-6 text-primary" />
            <span className="hidden font-bold text-xl sm:inline-block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              JourneyHub
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium flex-1">
          <Link 
            href="/campgrounds" 
            className="flex items-center space-x-1 transition-colors hover:text-primary text-foreground/60 hover:text-foreground"
          >
            <MapPin className="h-4 w-4" />
            <span>Explore</span>
          </Link>
          {session?.user && (
            <Link 
              href="/campgrounds/new" 
              className="flex items-center space-x-1 transition-colors hover:text-primary text-foreground/60 hover:text-foreground"
            >
              <PlusCircle className="h-4 w-4" />
              <span>Add Campground</span>
            </Link>
          )}
        </nav>

        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex items-center space-x-3">
          {session?.user ? (
            <DropdownMenu open={profileDropdownOpen} onOpenChange={setProfileDropdownOpen}>
              <DropdownMenuTrigger>
                <div className="flex items-center space-x-2 text-sm px-3 py-2 rounded-md bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 hover:border-primary/40 transition-all duration-200 hover:shadow-md">
                  <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center overflow-hidden">
                    {userAvatar?.url ? (
                      <img 
                        src={userAvatar.url} 
                        alt={session.user.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <User className="h-4 w-4 text-primary" />
                    )}
                  </div>
                  <span className="text-foreground font-medium">
                    {session.user.name}
                  </span>
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">{session.user.name}</p>
                    <p className="text-xs leading-none text-muted-foreground">
                      {session.user.email}
                    </p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/profile" className="flex items-center cursor-pointer">
                    <UserCircle className="mr-2 h-4 w-4" />
                    <span>My Profile</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/profile/edit" className="flex items-center cursor-pointer">
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Edit Profile</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem 
                  onClick={() => signOut({ callbackUrl: '/' })}
                  className="text-red-600 focus:text-red-600 cursor-pointer"
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Logout</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <>
              <Button variant="ghost" size="sm" asChild>
                <Link href="/login">Login</Link>
              </Button>
              <Button size="sm" asChild>
                <Link href="/register">Register</Link>
              </Button>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden ml-auto p-2 hover:bg-accent rounded-md transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <nav className="container px-4 py-4 space-y-3">
            <Link 
              href="/campgrounds" 
              className="flex items-center space-x-2 px-3 py-2 rounded-md hover:bg-accent transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              <MapPin className="h-4 w-4" />
              <span>Explore Campgrounds</span>
            </Link>
            {session?.user && (
              <Link 
                href="/campgrounds/new" 
                className="flex items-center space-x-2 px-3 py-2 rounded-md hover:bg-accent transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                <PlusCircle className="h-4 w-4" />
                <span>Add Campground</span>
              </Link>
            )}
            <div className="pt-3 border-t space-y-2">
              {session?.user ? (
                <>
                  <div className="flex items-center space-x-2 px-3 py-2 text-sm bg-gradient-to-r from-primary/10 to-primary/5 rounded-md border border-primary/20">
                    <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center overflow-hidden">
                      {userAvatar?.url ? (
                        <img 
                          src={userAvatar.url} 
                          alt={session.user.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <User className="h-4 w-4 text-primary" />
                      )}
                    </div>
                    <div className="flex flex-col">
                      <span className="font-medium">{session.user.name}</span>
                      <span className="text-xs text-muted-foreground">{session.user.email}</span>
                    </div>
                  </div>
                  <Link 
                    href="/profile"
                    className="flex items-center space-x-2 px-3 py-2 rounded-md hover:bg-accent transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <UserCircle className="h-4 w-4" />
                    <span>My Profile</span>
                  </Link>
                  <Link 
                    href="/profile/edit"
                    className="flex items-center space-x-2 px-3 py-2 rounded-md hover:bg-accent transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Settings className="h-4 w-4" />
                    <span>Edit Profile</span>
                  </Link>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      signOut({ callbackUrl: '/' });
                    }}
                    className="w-full justify-start text-red-600 hover:text-red-600"
                  >
                    <LogOut className="h-4 w-4 mr-2" />
                    Logout
                  </Button>
                </>
              ) : (
                <div className="space-y-2">
                  <Button variant="ghost" size="sm" asChild className="w-full">
                    <Link href="/login" onClick={() => setMobileMenuOpen(false)}>Login</Link>
                  </Button>
                  <Button size="sm" asChild className="w-full">
                    <Link href="/register" onClick={() => setMobileMenuOpen(false)}>Register</Link>
                  </Button>
                </div>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
