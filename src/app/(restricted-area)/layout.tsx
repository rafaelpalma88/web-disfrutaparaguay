import { ModeToggle } from "../components/ModeThemeToggle";
import "../globals.css";

export default function RestrictedAreaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="flex-1">
        <div className="absolute right-0 top-0 mr-4 mt-4 flex">
          <ModeToggle />
        </div>

        {children}
      </div>
    </>
  );
}
