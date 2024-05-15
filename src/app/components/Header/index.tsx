"use client";

import Link from "next/link";
import Image from "next/image";
import { ModeToggle } from "../ModeThemeToggle";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { HamburgerMenu } from "../HamburgerMenu";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;

      if (scrollTop > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 py-2 transition ${isScrolled ? "bg-background" : ""}`}
    >
      {/* <HamburgerMenu /> */}
      {/* border-b-2 border-gray-300 */}
      <div className="mx-auto flex max-w-4xl items-center justify-center">
        <div className="flex w-full items-center justify-between">
          <Link href="/">
            <Image
              src="/logoDisfrutaParaguay.png"
              width={200}
              height={200}
              alt="Logo Disfruta Paraguay"
            />
          </Link>
          <nav>
            <ul className="flex items-center justify-center space-x-4">
              {/* <li className="pl-2 pr-2">
                <Link href="/">Home</Link>
              </li>
              <li className="pl-2 pr-2">
                <Link href="/about">About</Link>
              </li> */}
              <li className="pl-2 pr-2">
                <Link href="/sign-in">
                  <Button>Sign In</Button>
                </Link>
              </li>
              <li className="pl-2 pr-2">
                <ModeToggle />
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
