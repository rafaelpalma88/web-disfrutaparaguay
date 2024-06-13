import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
// import jwt from "jsonwebtoken";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("@web-disfrutaparaguay");
  console.log("dentro de middleware: xxxx", token);

  if (!token) {
    console.log("!token");
    return NextResponse.redirect(new URL("/sign-in", request.url));
  }

  // try {
  //   const decoded = jwt.verify(token.value, "apidisfrutaparaguaysecret"); //TODO: ajustar isso
  //   console.log("Token is valid:", decoded);

  //   // TODO: Finalizar essa parte de decodificação do token
  //   return NextResponse.next();
  // } catch (err) {
  //   console.log("err", err);
  //   // Se o token for inválido, redirecione para a página de login
  //   return NextResponse.redirect(`/sign-in`);
  // }
}

export const config = {
  matcher: ["/dashboard", "/dashboard/:path*"],
};
