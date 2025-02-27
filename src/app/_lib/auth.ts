import axios, { AxiosError } from 'axios';
import { NextAuthOptions, User } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

import logger from '@/lib/logger';

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Login Form',
      id: 'login',
      credentials: {
        pluralityToken: {
          label: 'token',
          type: 'text',
        },
      },
      async authorize(credentials) {
        try {
          const data: {
            pluralityToken: string;
          } = {
            pluralityToken: credentials?.pluralityToken as string,
          };

          const user = await axios.post<{
            success: boolean;
            user: User;
          }>(
            `https://app.plurality.network/api/user/validate`,
            {
              token: data.pluralityToken,
            },
            {
              auth: {
                username: '0ee0e972-0b52-4154-9ca3-2f837969f1d3',
                password: process.env.PLURALITY_CLIENT_SECRET as string,
              },
            }
          );

          const newUser = { ...user };
          newUser.data.user.pluralityToken = data.pluralityToken;

          return newUser.data.user;
        } catch (error) {
          if (error instanceof AxiosError) {
            if (
              error.response?.data &&
              typeof error.response.data === 'object'
            ) {
              if (
                'errorType' in error.response.data &&
                typeof error.response.data.errorType === 'string'
              ) {
                logger(error.response.data.errorType);
                throw new Error(error.response.data.errorType);
              }

              if (
                'data' in error.response.data &&
                typeof error.response.data.data === 'object' &&
                'error' in error.response.data.data &&
                typeof error.response.data.data.error === 'string'
              ) {
                logger(error.response.data.data.error);
                throw new Error(error.response.data.data.error);
              }

              logger(error.response.data.message);
              throw new Error(error.response.data.message);
            }
          }
        }

        return null;
      },
    }),
  ],
  pages: {
    error: '/login',
    signIn: '/login',
    signOut: '/login',
  },
  session: {
    strategy: 'jwt',
    maxAge: 60 * 60 * 24 * 30, // 30 days // 20 * 60, // 10 minutes
  },
  secret: `${process.env.NEXTAUTH_SECRET}`,
  callbacks: {
    // signIn: ({}) => {},

    jwt: async ({ token, user, trigger, session, account }) => {
      if (account && user) {
        token.data = user;

        return token;
      }

      if (trigger === 'update') {
        const updatedToken = token;

        updatedToken.data = session;

        return updatedToken;
      }

      user && (token.data = user);

      return token;
    },
    session: ({ session, token }) => {
      session.pluralityToken = token.data.pluralityToken;
      session.user = token.data.user;

      return session;
    },
  },
};
