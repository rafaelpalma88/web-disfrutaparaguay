// import { Footer } from "../components/Footer";

import "../globals.css";

export default function WebsiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="flex-1">{children}</div>

      {/* <div className="h-20  py-5 text-center">
        <Footer />
      </div> */}
    </>
  );
}
