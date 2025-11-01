"use client";
import { useSession, signOut } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { User, Mail, ArrowLeft, Save, Lock, Eye, EyeOff, Upload, X, Camera } from 'lucide-react';
import Link from 'next/link';

export default function EditProfilePage() {
  const { data: session, status, update } = useSession();
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });
  const [showPasswords, setShowPasswords] = useState({
    current: false,
    new: false,
    confirm: false,
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });
  const [avatar, setAvatar] = useState(null);
  const [avatarPreview, setAvatarPreview] = useState(null);
  const [uploadingAvatar, setUploadingAvatar] = useState(false);
  const [currentAvatar, setCurrentAvatar] = useState(null);

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login');
    }
  }, [status, router]);

  useEffect(() => {
    if (session?.user) {
      setFormData(prev => ({
        ...prev,
        username: session.user.name || '',
        email: session.user.email || '',
      }));
      // Fetch user stats to get avatar
      fetchUserAvatar();
    }
  }, [session]);

  const fetchUserAvatar = async () => {
    try {
      const base = process.env.NEXT_PUBLIC_BASE_URL ?? '';
      const res = await fetch(`${base}/api/users/stats`);
      const data = await res.json();
      if (data.ok && data.user?.avatar) {
        setCurrentAvatar(data.user.avatar);
      }
    } catch (error) {
      console.error('Error fetching avatar:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ type: '', text: '' });

    try {
      // Validate password fields if changing password
      if (formData.newPassword || formData.currentPassword || formData.confirmPassword) {
        if (!formData.currentPassword) {
          setMessage({
            type: 'error',
            text: 'Please enter your current password to change it.',
          });
          setLoading(false);
          return;
        }
        if (!formData.newPassword) {
          setMessage({
            type: 'error',
            text: 'Please enter a new password.',
          });
          setLoading(false);
          return;
        }
        if (formData.newPassword !== formData.confirmPassword) {
          setMessage({
            type: 'error',
            text: 'New passwords do not match.',
          });
          setLoading(false);
          return;
        }
        if (formData.newPassword.length < 6) {
          setMessage({
            type: 'error',
            text: 'New password must be at least 6 characters.',
          });
          setLoading(false);
          return;
        }
      }

      const updateData = {
        email: formData.email,
      };

      // Only include password fields if user is changing password
      if (formData.currentPassword && formData.newPassword) {
        updateData.currentPassword = formData.currentPassword;
        updateData.newPassword = formData.newPassword;
      }

      const base = process.env.NEXT_PUBLIC_BASE_URL ?? '';
      const res = await fetch(`${base}/api/users/update`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updateData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Failed to update profile');
      }

      setMessage({
        type: 'success',
        text: 'Profile updated successfully!',
      });

      // Clear password fields
      setFormData(prev => ({
        ...prev,
        currentPassword: '',
        newPassword: '',
        confirmPassword: '',
      }));

      // If password was changed, sign out and redirect to login
      if (formData.currentPassword && formData.newPassword) {
        setTimeout(() => {
          setMessage({
            type: 'info',
            text: 'Password changed. Please sign in again with your new password.',
          });
          setTimeout(() => {
            signOut({ callbackUrl: '/login' });
          }, 2000);
        }, 1500);
      } else {
        // Update session with new email
        await update();
      }
    } catch (error) {
      setMessage({
        type: 'error',
        text: error.message || 'Failed to update profile. Please try again.',
      });
    } finally {
      setLoading(false);
    }
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        setMessage({
          type: 'error',
          text: 'Image size should be less than 5MB',
        });
        return;
      }
      setAvatar(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatarPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAvatarUpload = async () => {
    if (!avatar) return;

    setUploadingAvatar(true);
    setMessage({ type: '', text: '' });

    try {
      const formData = new FormData();
      formData.append('avatar', avatar);
      const base = process.env.NEXT_PUBLIC_BASE_URL ?? '';
      
      const res = await fetch(`${base}/api/users/avatar`, {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Failed to upload avatar');
      }

      setMessage({
        type: 'success',
        text: 'Avatar updated successfully!',
      });

      setAvatar(null);
      setAvatarPreview(null);

      // Refresh the page to show new avatar
      setTimeout(() => {
        window.location.reload();
      }, 1500);
    } catch (error) {
      setMessage({
        type: 'error',
        text: error.message || 'Failed to upload avatar',
      });
    } finally {
      setUploadingAvatar(false);
    }
  };

  const handleRemoveAvatar = async () => {
    if (!confirm('Are you sure you want to remove your profile picture?')) {
      return;
    }

    setUploadingAvatar(true);
    setMessage({ type: '', text: '' });

    try {
      const base = process.env.NEXT_PUBLIC_BASE_URL ?? '';
      const res = await fetch(`${base}/api/users/avatar`, {
        method: 'DELETE',
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Failed to remove avatar');
      }

      setMessage({
        type: 'success',
        text: 'Avatar removed successfully!',
      });

      setTimeout(() => {
        window.location.reload();
      }, 1500);
    } catch (error) {
      setMessage({
        type: 'error',
        text: error.message || 'Failed to remove avatar',
      });
    } finally {
      setUploadingAvatar(false);
    }
  };

  if (status === 'loading') {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
            <p className="mt-4 text-muted-foreground">Loading...</p>
          </div>
        </div>
      </div>
    );
  }

  if (!session?.user) {
    return null;
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <div className="mb-6">
        <Button variant="ghost" asChild>
          <Link href="/profile">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Profile
          </Link>
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <User className="h-6 w-6" />
            Edit Profile
          </CardTitle>
          <CardDescription>
            Update your profile information
          </CardDescription>
        </CardHeader>
        <CardContent>
          {message.text && (
            <div
              className={`mb-6 p-4 rounded-lg ${
                message.type === 'error'
                  ? 'bg-red-50 text-red-800 border border-red-200'
                  : message.type === 'success'
                  ? 'bg-green-50 text-green-800 border border-green-200'
                  : 'bg-blue-50 text-blue-800 border border-blue-200'
              }`}
            >
              {message.text}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Profile Picture */}
            <div className="space-y-4 pb-6 border-b">
              <h3 className="text-lg font-semibold">Profile Picture</h3>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <div className="relative">
                  <div className="h-24 w-24 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center overflow-hidden border-4 border-background shadow-lg">
                    {avatarPreview ? (
                      <img src={avatarPreview} alt="Preview" className="w-full h-full object-cover" />
                    ) : currentAvatar?.url ? (
                      <img src={currentAvatar.url} alt="Current avatar" className="w-full h-full object-cover" />
                    ) : (
                      <User className="h-12 w-12 text-white" />
                    )}
                  </div>
                  {(currentAvatar?.url || avatarPreview) && !uploadingAvatar && (
                    <button
                      type="button"
                      onClick={handleRemoveAvatar}
                      className="absolute -top-1 -right-1 h-6 w-6 rounded-full bg-red-500 text-white flex items-center justify-center hover:bg-red-600 transition-colors shadow-md"
                      title="Remove avatar"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  )}
                </div>
                <div className="flex-1 space-y-3">
                  <div className="flex flex-wrap gap-2">
                    <label htmlFor="avatar-upload">
                      <input
                        id="avatar-upload"
                        type="file"
                        accept="image/*"
                        onChange={handleAvatarChange}
                        className="hidden"
                        disabled={uploadingAvatar}
                      />
                      <span className="inline-flex items-center px-4 py-2 rounded-md border border-input bg-background hover:bg-accent hover:text-accent-foreground cursor-pointer transition-colors">
                        <Camera className="mr-2 h-4 w-4" />
                        Choose Photo
                      </span>
                    </label>
                    {avatar && (
                      <Button
                        type="button"
                        onClick={handleAvatarUpload}
                        disabled={uploadingAvatar}
                        size="sm"
                      >
                        {uploadingAvatar ? (
                          <>
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                            Uploading...
                          </>
                        ) : (
                          <>
                            <Upload className="mr-2 h-4 w-4" />
                            Upload
                          </>
                        )}
                      </Button>
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    JPG, PNG or GIF. Max size 5MB. Recommended 400x400px.
                  </p>
                </div>
              </div>
            </div>

            {/* Basic Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Basic Information</h3>
              
              <div className="space-y-2">
                <Label htmlFor="username" className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  Username
                </Label>
                <Input
                  id="username"
                  type="text"
                  value={formData.username}
                  disabled
                  className="disabled:opacity-60 disabled:cursor-not-allowed"
                />
                <p className="text-xs text-muted-foreground">
                  Username cannot be changed
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="Enter your email"
                  required
                  disabled={loading}
                />
              </div>
            </div>

            {/* Password Change Section */}
            <div className="space-y-4 pt-4 border-t">
              <h3 className="text-lg font-semibold">Change Password</h3>
              <p className="text-sm text-muted-foreground">
                Leave blank if you don't want to change your password
              </p>

              <div className="space-y-2">
                <Label htmlFor="currentPassword" className="flex items-center gap-2">
                  <Lock className="h-4 w-4" />
                  Current Password
                </Label>
                <div className="relative">
                  <Input
                    id="currentPassword"
                    type={showPasswords.current ? "text" : "password"}
                    value={formData.currentPassword}
                    onChange={(e) =>
                      setFormData({ ...formData, currentPassword: e.target.value })
                    }
                    placeholder="Enter current password"
                    disabled={loading}
                    className="pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPasswords({ ...showPasswords, current: !showPasswords.current })}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    {showPasswords.current ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="newPassword" className="flex items-center gap-2">
                  <Lock className="h-4 w-4" />
                  New Password
                </Label>
                <div className="relative">
                  <Input
                    id="newPassword"
                    type={showPasswords.new ? "text" : "password"}
                    value={formData.newPassword}
                    onChange={(e) =>
                      setFormData({ ...formData, newPassword: e.target.value })
                    }
                    placeholder="Enter new password"
                    disabled={loading}
                    className="pr-10"
                    minLength={6}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPasswords({ ...showPasswords, new: !showPasswords.new })}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    {showPasswords.new ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword" className="flex items-center gap-2">
                  <Lock className="h-4 w-4" />
                  Confirm New Password
                </Label>
                <div className="relative">
                  <Input
                    id="confirmPassword"
                    type={showPasswords.confirm ? "text" : "password"}
                    value={formData.confirmPassword}
                    onChange={(e) =>
                      setFormData({ ...formData, confirmPassword: e.target.value })
                    }
                    placeholder="Confirm new password"
                    disabled={loading}
                    className="pr-10"
                    minLength={6}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPasswords({ ...showPasswords, confirm: !showPasswords.confirm })}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    {showPasswords.confirm ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>
            </div>

            <div className="flex gap-3 pt-4">
              <Button type="submit" disabled={loading} className="flex-1">
                {loading ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Saving...
                  </>
                ) : (
                  <>
                    <Save className="mr-2 h-4 w-4" />
                    Save Changes
                  </>
                )}
              </Button>
              <Button type="button" variant="outline" asChild>
                <Link href="/profile">Cancel</Link>
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
