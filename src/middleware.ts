import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import axios from "axios";

interface Token {
  name: string;
  value: string;
}

export async function middleware(request: NextRequest) {
  const token: Token | undefined = request.cookies.get("@web-disfrutaparaguay");

  if (token) {
    try {
      await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/me`, // TODO: Ajustar esse .env para env.js
        null,
        {
          headers: {
            Authorization: `Bearer ${token.value}`,
          },
        },
      );
      return NextResponse.next();
    } catch (err) {
      return NextResponse.redirect(new URL("/sign-in", request.url));
    }
  }
}

export const config = {
  matcher: ["/dashboard", "/dashboard/:path*"],
};
