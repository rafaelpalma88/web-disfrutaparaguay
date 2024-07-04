import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { Home, MessageCircle, Smile } from "lucide-react";

import { Separator } from "@/components/ui/separator";
import { nextAuthOptions } from "@/utils/authOptions";

import { HeaderUserMenu } from "../components/HeaderUserMenu";
import { ModeToggle } from "../components/ModeThemeToggle";
import { NavLink } from "../components/NavLink";
import { customMetadata } from "../lib/metadata";

import "../globals.css";

export const metadata = customMetadata("Dashboard");

export default async function RestrictedAreaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(nextAuthOptions);

  if (!session) {
    redirect("/sign-in");
  }
  return (
    <>
      <div>
        <div className="border-b">
          <div className="flex h-16 items-center gap-6 px-6">
            <Smile className="h-6 w-6" />

            <Separator orientation="vertical" className="h-6" />

            <nav className="flex flex-1 items-center space-x-4 lg:space-x-6">
              <NavLink href="/dashboard">
                <Home className="h-4 w-4" />
                Início
              </NavLink>
              {(session?.user?.role === "MEMBER" || session?.user?.role) ===
                "ADMIN" && (
                <NavLink href="/forum">
                  <MessageCircle className="h-4 w-4" />
                  Forum
                </NavLink>
              )}
            </nav>

            <ModeToggle />
            <HeaderUserMenu />
          </div>
        </div>
        <div className="pb-6 pl-6 pr-6 pt-5">{children}</div>
      </div>
    </>
  );
}
