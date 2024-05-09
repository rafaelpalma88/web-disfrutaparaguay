"use client";

import Link from "next/link";
import { ModeToggle } from "../ModeThemeToggle";
import { HeaderContent, HeaderWrapper, Logo, Navigation } from "./index.styled";
import Image from "next/image";
import { Button } from "@/components/ui/button";

// TODO:        <Link href="/privacy-policy">Quem somos</Link>
// TODO:        <Link href="/terms-of-use">Eventos</Link>
// TODO:        <Link href="/sign-in">Sign-in</Link>
// TODO:        <Link href="/sign-up">Sign-up</Link>

export const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderContent>
        <Logo>
          <Image
            src="/logoDisfrutaParaguay.png"
            width={200}
            height={200}
            alt="Logo Disfruta Paraguay"
          />
        </Logo>
        <Navigation>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <Link href="/sign-in">
                <Button>Sign In</Button>
              </Link>
            </li>
            <li>
              <ModeToggle />
            </li>
          </ul>
        </Navigation>
      </HeaderContent>
    </HeaderWrapper>
  );
};

export default Header;
