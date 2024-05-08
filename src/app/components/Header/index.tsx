import Link from "next/link";
import { ModeToggle } from "../ModeThemeToggle";

export function Header() {
  return (
    <ul className="flex justify-center">
      <li>
        <Link href="/privacy-policy">Quem somos</Link>
      </li>
      <li className="mx-2">|</li>
      <li>
        <Link href="/terms-of-use">Eventos</Link>
      </li>
      <li className="mx-2">|</li>
      <li>
        <Link href="/sign-in">Sign-in</Link>
      </li>
      <li className="mx-2">|</li>
      <li>
        <Link href="/sign-up">Sign-up</Link>
      </li>
      <ModeToggle />
    </ul>
  );
}
