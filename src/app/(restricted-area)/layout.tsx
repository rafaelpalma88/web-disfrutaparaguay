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
        <div className="absolute top-0 right-0 mt-4 mr-4 flex">
          <ModeToggle />
        </div>

        {children}
      </div>
    </>
  );
}
