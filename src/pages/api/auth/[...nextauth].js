import User from '@/models/userModel';
import NextAuth from 'next-auth/next';
import CredentialsProvider from 'next-auth/providers/credentials';
import connectDB from '@/db';

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'email', type: 'email' },
        password: { label: 'password', type: 'text' },
      },
      async authorize(credentials) {
        connectDB();
        if (!credentials.email || !credentials.password) {
          throw new Error('Invalid Credetials');
        }

        const user = await User.findOne({
          email: credentials.email.trim().toLowerCase(),
        }).select('+password');

        console.log(user);

        const isCorrectPassword = await user.correctPassword(
          credentials.password,
          user.password
        );

        if (!user || !isCorrectPassword) {
          throw new Error('Invalid credentials');
        }

        if (!isCorrectPassword) {
          throw new Error('Invalid credentials');
        }

        const currentUser = {
          name: user.name,
          email: user.email,
          image: user.photo,
          id: user._id,
        };
        return currentUser;
      },
    }),
  ],
  secret: process.env.JWT_SECRET,
  session: {
    maxAge: 24 * 60 * 60,
    updateAge: 24 * 60 * 60,
    strategy: 'jwt',
  },
};

export default NextAuth(authOptions);
