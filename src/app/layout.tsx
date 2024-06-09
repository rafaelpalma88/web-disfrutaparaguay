"use client";

// import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Toaster } from "@/components/ui/toaster";
import { useQueryClient } from "@/lib/useQueryClient";
import NextAuthSessionProvider from "@/providers/sessionProvider";
import { QueryClientProvider } from "@tanstack/react-query";

import { ThemeProvider } from "./components/ThemeProvider";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Disfruta Paraguay",
//   description: "Your group in Paraguay",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const queryClient = useQueryClient();

  return (
    <html lang="en">
      <body className={inter.className}>
        <NextAuthSessionProvider>
          <QueryClientProvider client={queryClient}>
            <ThemeProvider
              storageKey="disfrutaparaguay-theme"
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              <div className="flex min-h-screen flex-col">{children}</div>
              <Toaster />
            </ThemeProvider>
          </QueryClientProvider>
        </NextAuthSessionProvider>
      </body>
    </html>
  );
}
