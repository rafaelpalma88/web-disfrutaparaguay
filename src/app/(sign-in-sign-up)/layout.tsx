import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";

import { nextAuthOptions } from "@/utils/authOptions";

import { ModeToggle } from "../components/ModeThemeToggle";

import "../globals.css";

export default async function SignInSignUpLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(nextAuthOptions);

  if (session) {
    redirect("/dashboard");
  }

  return (
    <div className="relative">
      <div className="absolute right-0 top-0 pr-5 pt-5">
        <ModeToggle />
      </div>
      <div className="">{children}</div>
    </div>
  );
}
