import NextAuth from 'next-auth';
import ProviderCredentials from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import User from '../../../models/userModel';
import connectDB from '../../../utils/dbConnect';

export default NextAuth({
  session: {
    strategy: 'jwt',
  },
  providers: [
    ProviderCredentials({
      name: 'Credentials',
      async authorize(credentials, req) {
        connectDB();
        const user = User.findOne({ email: credentials.email }).select(
          '+password'
        );
        // console.log(user);

        if (
          !user ||
          !(await user.correctPassword(credentials.password, user.password))
        ) {
          throw new Error('Incorrect email or password');
        }

        const result = {
          name: user.name,
          email: user.email,
          role: user.role,
          photo: user.photo,
        };
        return result;
      },
    }),
  ],
  secret: process.env.JWT_SECRET,
  pages: {
    signIn: '/pages/login',
  },
});
