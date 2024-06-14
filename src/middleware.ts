import type { NextRequest } from "next/server";
// import { NextResponse } from "next/server";
import axios from "axios";
// import jwt from "jsonwebtoken";

// interface Token {
//   name: string;
//   value: string;
// }

export async function middleware(request: NextRequest) {
  const token = request.cookies.get("@web-disfrutaparaguay");

  if (token) {
    console.log("token.value:", token.value);

    try {
      const response = await axios.post(
        "https://api-disfruta-paraguay.onrender.com/me",
        null,
        {
          headers: {
            Authorization: `Bearer ${token.value}`,
          },
        },
      );
      console.log("Response:", response.data);
      console.log("o token é valido");
      //   return NextResponse.next();
    } catch (err) {
      console.log("o token é invalido", err);
      //   return NextResponse.redirect(new URL("/sign-in", request.url));
      //   return NextResponse.redirect(`/sign-in`);
    }
  }
}

export const config = {
  matcher: ["/dashboard", "/dashboard/:path*"],
};
