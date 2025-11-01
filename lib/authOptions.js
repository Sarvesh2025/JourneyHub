import Credentials from 'next-auth/providers/credentials';
import { connectToDatabase } from '@/lib/db';
import { User } from '@/lib/models';

export const authOptions = {
  session: { strategy: 'jwt' },
  providers: [
    Credentials({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials) {
        if (!credentials?.username || !credentials?.password) return null;
        await connectToDatabase();
        const fn = User.authenticate();
        return new Promise((resolve) => {
          fn(credentials.username, credentials.password, (err, user) => {
            if (err || !user) return resolve(null);
            resolve({ id: String(user._id), username: user.username, email: user.email || null });
          });
        });
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.username = user.username;
        token.email = user.email || null;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user = {
          id: token.id,
          name: token.username,
          email: token.email || null
        };
      }
      return session;
    }
  },
  pages: { signIn: '/login' },
  secret: process.env.NEXTAUTH_SECRET
};
