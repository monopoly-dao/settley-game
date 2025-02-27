import { DefaultJWT } from 'next-auth/jwt';

declare module 'next-auth' {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    pluralityToken: string;
    user: {
      id: string;
      email: string;
      authAddress: null | string;
      proxyAddress: string;
    };
  }

  interface User {
    pluralityToken: string;
    user: {
      id: string;
      email: string;
      authAddress: null | string;
      proxyAddress: string;
    };
  }
}

declare module 'next-auth/jwt' {
  //   /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
  interface JWT extends DefaultJWT {
    data: {
      pluralityToken: string;
      user: {
        id: string;
        email: string;
        authAddress: null | string;
        proxyAddress: string;
      };
    };
  }
}
