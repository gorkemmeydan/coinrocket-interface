import { NextRequest, NextResponse } from 'next/server';

export default function middleware(req: NextRequest) {
  const { cookies } = req;

  const accessToken = cookies.accessToken;
  const refreshToken = cookies.refreshToken;

  const url = req.url;

  if (url.includes('/app')) {
    if (accessToken === undefined && refreshToken === undefined) {
      const fullUrl = req.nextUrl.clone();
      fullUrl.pathname = '/login';
      return NextResponse.redirect(fullUrl);
    }
  }

  if (url.includes('/login')) {
    if (!(accessToken === undefined && refreshToken === undefined)) {
      const fullUrl = req.nextUrl.clone();
      fullUrl.pathname = '/app/dashboard';
      return NextResponse.redirect(fullUrl);
    }
  }

  return NextResponse.next();
}
