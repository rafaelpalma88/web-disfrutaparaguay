import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

interface Token {
  name: string;
  value: string;
}

export async function middleware(request: NextRequest) {
  const token: Token | undefined = request.cookies.get("@web-disfrutaparaguay");

  if (token) {
    return NextResponse.next();
  } else {
    return NextResponse.redirect(new URL("/sign-in", request.url));
  }
}

export const config = {
  matcher: ["/dashboard", "/dashboard/:path*"],
};
