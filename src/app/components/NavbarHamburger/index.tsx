import { useState } from "react";
import Link from "next/link";

// import { ModeToggle } from "../ModeThemeToggle";

export function NavbarHamburger() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <div className="relative pr-10 md:hidden">
      <div
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="relative z-50 flex h-10 w-10 cursor-pointer flex-col justify-between rounded border border-transparent bg-transparent p-2"
      >
        <div
          className={`h-0.5 w-full bg-primary shadow transition-transform duration-300 ${isMenuOpen ? "translate-y-2.5 rotate-45" : ""}`}
        ></div>
        <div
          className={`h-0.5 w-full bg-primary shadow transition-opacity duration-300 ${isMenuOpen ? "opacity-0" : ""}`}
        ></div>
        <div
          className={`h-0.5 w-full bg-primary shadow transition-transform duration-300 ${isMenuOpen ? "-translate-y-2.5 -rotate-45" : ""}`}
        ></div>
      </div>
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-primary-foreground">
          <nav className="">
            <ul className="flex items-center justify-center space-x-4">
              <li className="pl-2 pr-2">
                <Link href="/sign-in">Sign In</Link>
              </li>
              {/* <li className="pl-1 pr-1 sm:pl-2 sm:pr-2">
                <ModeToggle />
              </li> */}
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
}
