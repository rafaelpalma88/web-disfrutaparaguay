import { Inter } from "next/font/google";

import NextAuthSessionProvider from "@/providers/sessionProvider";

import { ThemeProvider } from "./components/ThemeProvider";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          storageKey="disfrutaparaguay-theme"
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NextAuthSessionProvider>
            <div className="flex min-h-screen flex-col">{children}</div>
          </NextAuthSessionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
