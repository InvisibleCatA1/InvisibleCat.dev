import { NextResponse } from "next/server";

export function middleware(request) {
    if (request.nextUrl.pathname.startsWith('/projects')) {
        return NextResponse.rewrite(new URL('/subpages/projects/projects', request.url))
      }
}