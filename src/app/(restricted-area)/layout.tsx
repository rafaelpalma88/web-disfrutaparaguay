import { Home, Pizza, UtensilsCrossed } from "lucide-react";

import { Separator } from "@/components/ui/separator";

import { AccountMenu } from "../components/AccountMenu";
import { ModeToggle } from "../components/ModeThemeToggle";
import { NavLink } from "../components/NavLink";

import "../globals.css";

export default function RestrictedAreaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isLogged = false; // TODO: Isto depois virá de um contexto.

  return (
    <>
      {isLogged ? (
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
          {/* <div>{children}</div> */}
        </div>
      ) : (
        <div className="flex-1">
          <div className="absolute right-0 top-0 mr-4 mt-4 flex">
            <ModeToggle />
          </div>

          {children}
        </div>
      )}
    </>
  );
}
