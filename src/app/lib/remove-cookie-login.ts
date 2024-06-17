"use server";

import { cookies } from "next/headers";

async function removeCookieLogin() {
  cookies().set({
    name: "@web-disfrutaparaguay",
    value: "",
    httpOnly: true,
    path: "/",
    secure: true,
    sameSite: "strict",
    expires: new Date(0), // Expire the cookie immediately
  });
}

export default removeCookieLogin;
