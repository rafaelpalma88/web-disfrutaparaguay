import Link from "next/link";
import Image from "next/image";
import { ModeToggle } from "../ModeThemeToggle";
import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="border-b-2 border-gray-300 py-2">
      <div className="max-w-4xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <div>
            <Image
              src="/logoDisfrutaParaguay.png"
              width={200}
              height={200}
              alt="Logo Disfruta Paraguay"
            />
          </div>

          <nav>
            <ul className="flex justify-center items-center space-x-4">
              <li>
                <Link href="/">
                  <p className="text-gray-600 hover:text-gray-900">Home</p>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <p className="text-gray-600 hover:text-gray-900">About</p>
                </Link>
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
          </nav>
        </div>
      </div>
    </header>
  );
};
