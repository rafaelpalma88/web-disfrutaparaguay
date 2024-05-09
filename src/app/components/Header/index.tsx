"use client";

import Link from "next/link";
import Image from "next/image";
import { ModeToggle } from "../ModeThemeToggle";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

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
      className={` fixed top-0 left-0 right-0 z-50 py-2 transition ${isScrolled ? "bg-background" : ""}`}
    >
      {/* border-b-2 border-gray-300 */}
      <div className="max-w-4xl mx-auto flex justify-center items-center">
        <div className="flex items-center justify-between w-full">
          <Link href="/">
            <Image
              src="/logoDisfrutaParaguay.png"
              width={200}
              height={200}
              alt="Logo Disfruta Paraguay"
            />
          </Link>
          <nav>
            <ul className="flex justify-center items-center space-x-4">
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
