"use client";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertCircle, Loader2, MapPin, DollarSign, FileText, Image as ImageIcon, Trash2, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

async function uploadFile(file) {
  const form = new FormData();
  form.append('file', file);
  const res = await fetch('/api/uploads', { method: 'POST', body: form });
  const json = await res.json();
  if (!res.ok || !json.ok) throw new Error(json.error || 'Upload failed');
  return { url: json.url, filename: json.filename };
}

export default function EditCampgroundPage({ params }) {
  const { id } = params;
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [images, setImages] = useState([]); // existing
  const [toDelete, setToDelete] = useState([]);
  const [newFiles, setNewFiles] = useState([]);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(`/api/campgrounds/${id}`, { cache: 'no-store' });
        const json = await res.json();
        if (!res.ok || !json.ok) throw new Error(json.error || 'Failed to load');
        const c = json.camp;
        setTitle(c.title || '');
        setLocation(c.location || '');
        setPrice(typeof c.price !== 'undefined' ? String(c.price) : '');
        setDescription(c.description || '');
        setImages(Array.isArray(c.images) ? c.images : []);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    })();
  }, [id]);

  function toggleDelete(filename) {
    setToDelete((prev) => prev.includes(filename) ? prev.filter(f => f !== filename) : [...prev, filename]);
  }

  async function onSubmit(e) {
    e.preventDefault();
    setError('');
    try {
      setSubmitting(true);
      const uploads = [];
      for (const f of newFiles) {
        const up = await uploadFile(f);
        uploads.push(up);
      }
      const payload = {
        title,
        location,
        price: Number(price),
        description,
        imagesAdd: uploads,
        deleteImages: toDelete
      };
      const res = await fetch(`/api/campgrounds/${id}`, {
        method: 'PUT',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok || json.ok === false) throw new Error((json && json.error) || 'Update failed');
      router.push(`/campgrounds/${id}`);
    } catch (e) {
      setError(e.message);
    } finally {
      setSubmitting(false);
    }
  }

  if (loading) {
    return (
      <div className="container max-w-2xl py-16 px-4">
        <Card>
          <CardContent className="flex items-center justify-center py-12">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="container max-w-2xl py-8 px-4">
      <div className="mb-6">
        <Button variant="ghost" size="sm" asChild>
          <Link href={`/campgrounds/${id}`}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Campground
          </Link>
        </Button>
      </div>

      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight mb-2">Edit Campground</h1>
        <p className="text-muted-foreground">Update your campground information</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Campground Details</CardTitle>
          <CardDescription>Make changes to your campground listing</CardDescription>
        </CardHeader>
        <CardContent>
          {error && (
            <div className="mb-6 p-4 rounded-md bg-destructive/10 border border-destructive/20 flex items-start gap-3">
              <AlertCircle className="h-5 w-5 text-destructive mt-0.5" />
              <p className="text-sm font-medium text-destructive">{error}</p>
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
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                required
                disabled={submitting}
              />
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
                rows={5}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                disabled={submitting}
              />
            </div>

            {images.length > 0 && (
              <div className="space-y-3">
                <Label className="flex items-center gap-2">
                  <ImageIcon className="h-4 w-4" />
                  Existing Images
                </Label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {images.map((img) => (
                    <div
                      key={img.filename || img.url}
                      className={`relative rounded-lg overflow-hidden border-2 transition-all ${
                        toDelete.includes(img.filename)
                          ? 'border-destructive opacity-50'
                          : 'border-border hover:border-primary'
                      }`}
                    >
                      <div className="relative h-32">
                        <Image
                          src={img.url}
                          alt={img.filename}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <label className="flex items-center gap-2 p-2 bg-background/95 backdrop-blur cursor-pointer hover:bg-accent transition-colors">
                        <input
                          type="checkbox"
                          checked={toDelete.includes(img.filename)}
                          onChange={() => toggleDelete(img.filename)}
                          className="rounded"
                        />
                        <span className="text-xs font-medium flex items-center gap-1">
                          <Trash2 className="h-3 w-3" />
                          Delete
                        </span>
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="new-images" className="flex items-center gap-2">
                <ImageIcon className="h-4 w-4" />
                Add New Images
              </Label>
              <Input
                id="new-images"
                type="file"
                multiple
                accept="image/*"
                onChange={(e) => setNewFiles(Array.from(e.target.files || []))}
                disabled={submitting}
                className="cursor-pointer"
              />
              {newFiles.length > 0 && (
                <p className="text-sm text-muted-foreground">
                  {newFiles.length} new {newFiles.length === 1 ? 'file' : 'files'} selected
                </p>
              )}
            </div>

            <div className="flex gap-3 pt-4">
              <Button type="submit" disabled={submitting} className="flex-1">
                {submitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Saving...
                  </>
                ) : (
                  'Save Changes'
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
