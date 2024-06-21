import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  console.log("request", request);
  //   const currentUser = request.cookies.get("@web-disfrutaparaguay")?.value;

  //   if (currentUser && !request.nextUrl.pathname.startsWith("/dashboard")) {
  //     return Response.redirect(new URL("/dashboard", request.url));
  //   }

  //   if (!currentUser && !request.nextUrl.pathname.startsWith("/sign-in")) {
  //     return Response.redirect(new URL("/sign-in", request.url));
  //   }
  // }
  return NextResponse.next();
}
export const config = {
  matcher: ["/dashboard", "/dashboard/:path*"],
  // matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};
