"use client";
import { useSession, signIn } from 'next-auth/react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertCircle, Upload, Loader2, MapPin, DollarSign, FileText, Image as ImageIcon } from 'lucide-react';

export default function NewCampgroundPage() {
  const { data: session } = useSession();
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [files, setFiles] = useState([]);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  async function uploadFile(file) {
    const form = new FormData();
    form.append('file', file);
    const base = process.env.NEXT_PUBLIC_BASE_URL ?? '';
    const res = await fetch(`${base}/api/uploads`, { method: 'POST', body: form });
    const json = await res.json();
    if (!res.ok || !json.ok) throw new Error(json.error || 'Upload failed');
    return { url: json.url, filename: json.filename };
  }

  async function onSubmit(e) {
    e.preventDefault();
    setError('');
    if (!session?.user) {
      return signIn(undefined, { callbackUrl: '/campgrounds/new' });
    }
    try {
      setSubmitting(true);
      const uploads = [];
      for (const f of files) {
        const up = await uploadFile(f);
        uploads.push(up);
      }
      const payload = { title, location, price: Number(price), description, images: uploads };
      const base = process.env.NEXT_PUBLIC_BASE_URL ?? '';
      const res = await fetch(`${base}/api/campgrounds`, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const json = await res.json();
      if (!res.ok || !json.ok) throw new Error(json.error || 'Failed to create');
      router.push(`/campgrounds/${json.id}`);
    } catch (err) {
      setError(err.message);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="container max-w-2xl py-8 px-4">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight mb-2">Add New Campground</h1>
        <p className="text-muted-foreground">Share your favorite camping spot with the community</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Campground Details</CardTitle>
          <CardDescription>Fill in the information about your campground</CardDescription>
        </CardHeader>
        <CardContent>
          {error && (
            <div className="mb-6 p-4 rounded-md bg-destructive/10 border border-destructive/20 flex items-start gap-3">
              <AlertCircle className="h-5 w-5 text-destructive mt-0.5" />
              <div className="flex-1">
                <p className="text-sm font-medium text-destructive">{error}</p>
              </div>
            </div>
          )}

          <form onSubmit={onSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="title" className="flex items-center gap-2">
                <FileText className="h-4 w-4" />
                Campground Name
              </Label>
              <Input
                id="title"
                placeholder="e.g., Sunset Valley Campground"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                disabled={submitting}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="location" className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                Location
              </Label>
              <Input
                id="location"
                placeholder="e.g., Yosemite National Park, CA"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                required
                disabled={submitting}
              />
              <p className="text-xs text-muted-foreground">Enter a specific location for accurate mapping</p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="price" className="flex items-center gap-2">
                <DollarSign className="h-4 w-4" />
                Price per Night
              </Label>
              <Input
                id="price"
                type="number"
                min="0"
                step="0.01"
                placeholder="0.00"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                disabled={submitting}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description" className="flex items-center gap-2">
                <FileText className="h-4 w-4" />
                Description
              </Label>
              <Textarea
                id="description"
                placeholder="Describe the campground, amenities, and what makes it special..."
                rows={5}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                disabled={submitting}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="images" className="flex items-center gap-2">
                <ImageIcon className="h-4 w-4" />
                Images
              </Label>
              <div className="relative">
                <Input
                  id="images"
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={(e) => setFiles(Array.from(e.target.files || []))}
                  disabled={submitting}
                  className="cursor-pointer"
                />
              </div>
              {files.length > 0 && (
                <p className="text-sm text-muted-foreground">
                  {files.length} {files.length === 1 ? 'file' : 'files'} selected
                </p>
              )}
            </div>

            <div className="flex gap-3 pt-4">
              <Button
                type="submit"
                disabled={submitting}
                className="flex-1"
              >
                {submitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Creating...
                  </>
                ) : (
                  <>
                    <Upload className="mr-2 h-4 w-4" />
                    Create Campground
                  </>
                )}
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => router.back()}
                disabled={submitting}
              >
                Cancel
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
