export const metadata = {
  title: 'JourneyHub',
  description: 'Campgrounds application migrated to Next.js',
};

import './globals.css';
import AuthProvider from '@/components/AuthProvider.jsx';
import Navbar from '@/components/Navbar.jsx';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <Navbar />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
