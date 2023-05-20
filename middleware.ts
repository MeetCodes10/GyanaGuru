import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { useContext } from "react";
import { CoursesContext } from "./context/CoursesContext";

export function middleware(request: NextRequest) {

  let isLoggedIn = request.cookies.get('login')?.value
 

  if (!isLoggedIn || isLoggedIn === 'false' || isLoggedIn === 'undefined' || isLoggedIn === 'null') {
    const url = request.nextUrl.clone()
    url.pathname = '/login'
    return NextResponse.rewrite(url)
  }
  return NextResponse.next();
}

export const config = {
  matcher: ['/courses/:path*', '/dashboard/:path*', '/dashboard', '/login', '/profile/:path*', '/profile'],
}