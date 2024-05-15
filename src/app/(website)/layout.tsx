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

      <div className="h-20 bg-gray-200 py-5 text-center">
        <Footer />
      </div>
    </>
  );
}
