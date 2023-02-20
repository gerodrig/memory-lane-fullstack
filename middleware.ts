import { NextResponse, NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const cookie = req.cookies.get("admin");

  console.log("cookie", cookie);

    if (cookie === undefined) {
      return NextResponse.rewrite(new URL('/', req.url))
    }
}

export const config = {
  matcher: '/api/admin/:path*'
};