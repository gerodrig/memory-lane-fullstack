import { NextResponse, NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  if (process.env.NODE_ENV !== 'development') {
    const url = req.nextUrl.clone();
    url.pathname = '/';
    return NextResponse.redirect(url);
  }
}

export const config = {
  // matcher: '/api/admin/:path*'
  matcher: '/api/:path*',
};
