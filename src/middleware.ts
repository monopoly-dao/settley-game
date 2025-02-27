import withAuth from 'next-auth/middleware';

export default withAuth(
  // function middleware(req) {
  //   if (!req.nextauth.token?.data.user.primaryDestinationCountry) {
  //     return NextResponse.redirect(
  //       new URL('/set-primary-destination', req.url)
  //     );
  //   }

  //   if (!req.nextauth.token?.data.user.emailVerified) {
  //     return NextResponse.redirect(new URL('/verify-email', req.url));
  //   }

  //   if (req.nextauth.token?.data.user.id && req.nextUrl.pathname === '/login') {
  //     return NextResponse.redirect(new URL('/', req.url));
  //   }
  // },
  {
    // callbacks: {
    //   authorized: ({ token }) => token?.role === 'admin',
    // },
  }
);

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|login|favicon|assets|fonts|svg|images|serviceWorker).*)',
  ],
};
