import "../globals.css";
import { Footer } from "../components/Footer";

export default function RestrictedAreaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="flex-1">{children}</div>
    </>
  );
}
