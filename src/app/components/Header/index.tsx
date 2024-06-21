"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

import { ModeToggle } from "../ModeThemeToggle";
import Navbar from "../Navbar";

export const Header = async () => {
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

    // Definir o estado inicial
    handleScroll();

    // Adicionar um evento de rolagem
    window.addEventListener("scroll", handleScroll);

    // Limpar o evento de rolagem quando o componente for desmontado
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 py-2 transition ${isScrolled ? "bg-background" : ""}`}
    >
      <div className="mx-auto flex max-w-4xl items-center justify-center">
        <div className="flex w-full items-center justify-between pl-5 pt-3 sm:pl-0 sm:pt-0">
          <Link href="/">
            <Image
              src="/logoDisfrutaParaguay.png"
              width={200}
              height={200}
              alt="Logo Disfruta Paraguay"
              style={{ width: "auto", height: "auto", maxWidth: 200 }}
              priority={true}
            />
          </Link>
          <div className="pr-10 md:hidden">
            <Navbar />
          </div>
          <nav className="hidden md:block">
            <ul className="flex items-center justify-center space-x-4">
              <li className="pl-2 pr-2">
                <Link href="/sign-in">
                  <Button>Sign In</Button>
                </Link>
              </li>
              <li className="pl-1 pr-1 sm:pl-2 sm:pr-2">
                <ModeToggle />
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
