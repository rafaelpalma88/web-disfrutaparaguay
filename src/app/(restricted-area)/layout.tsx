import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { Home, Pizza, UtensilsCrossed } from "lucide-react";

import { Separator } from "@/components/ui/separator";
import { nextAuthOptions } from "@/utils/authOptions";

import { AccountMenu } from "../components/AccountMenu";
import { ModeToggle } from "../components/ModeThemeToggle";
import { NavLink } from "../components/NavLink";

import "../globals.css";

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
            <Pizza className="h-6 w-6" />

            <Separator orientation="vertical" className="h-6" />

            <nav className="flex flex-1 items-center space-x-4 lg:space-x-6">
              <NavLink href="/">
                <Home className="h-4 w-4" />
                Início
              </NavLink>
              <NavLink href="/">
                <UtensilsCrossed className="h-4 w-4" />
                Pedidos
              </NavLink>
              <NavLink href="/sign-in">
                <UtensilsCrossed className="h-4 w-4" />
                Sign In
              </NavLink>
            </nav>

            <ModeToggle />
            <AccountMenu />
          </div>
        </div>
        <div className="pb-6 pl-6 pr-6 pt-5">{children}</div>
      </div>
    </>
  );
}
