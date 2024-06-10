import { ModeToggle } from "../components/ModeThemeToggle";

import "../globals.css";

export default function SignInSignUpLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative">
      <div className="absolute right-0 top-0 pr-5 pt-5">
        <ModeToggle />
      </div>
      <div className="">{children}</div>
    </div>
  );
}
