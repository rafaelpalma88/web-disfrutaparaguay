"use server";

import { cookies } from "next/headers";

async function saveCookieLogin(token: string) {
  cookies().set({
    name: "@web-disfrutaparaguay",
    value: token,
    httpOnly: true,
    path: "/",
    secure: true,
    sameSite: "strict",
  });
}

export default saveCookieLogin;
