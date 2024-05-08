import "../globals.css";
import { Footer } from "../components/Footer";

export default function WebsiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="flex-1">{children}</div>

      <div className="bg-gray-200 py-5 text-center h-20">
        <Footer />
      </div>
    </>
  );
}
