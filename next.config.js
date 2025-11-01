/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    // We can enable serverActions later when we migrate forms
  },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'res.cloudinary.com' },
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'api.maptiler.com' }
    ]
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'geolocation=()' },
          {
            key: 'Content-Security-Policy',
            value: (() => {
              const isDev = process.env.NODE_ENV !== 'production';
              const scriptSrc = [
                "script-src 'self' 'unsafe-inline'",
                'https://stackpath.bootstrapcdn.com',
                'https://kit.fontawesome.com',
                'https://cdnjs.cloudflare.com',
                'https://cdn.jsdelivr.net',
                'https://cdn.maptiler.com',
                isDev ? "'unsafe-eval'" : null
              ].filter(Boolean).join(' ');
              const connectSrc = [
                "connect-src 'self'",
                'https://api.maptiler.com',
                isDev ? 'http://localhost:*' : null,
                isDev ? 'http://127.0.0.1:*' : null,
                isDev ? 'ws:' : null
              ].filter(Boolean).join(' ');
              return [
                "default-src 'self'",
                scriptSrc,
                "style-src 'self' 'unsafe-inline' https://kit-free.fontawesome.com https://stackpath.bootstrapcdn.com https://fonts.googleapis.com https://use.fontawesome.com https://cdn.jsdelivr.net https://cdn.maptiler.com",
                "img-src 'self' blob: data: https://res.cloudinary.com https://images.unsplash.com https://api.maptiler.com",
                connectSrc,
                "worker-src 'self' blob:",
                "object-src 'none'",
                "frame-ancestors 'self'"
              ].join('; ');
            })()
          }
        ]
      }
    ];
  }
};

module.exports = nextConfig;
