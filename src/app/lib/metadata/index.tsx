import { Metadata } from "next";

export function customMetadata(pageTitle: string) {
  const metadata: Metadata = {
    title: `${pageTitle} | Disfruta Paraguay`,
    description: "Welcome to Disfruta Paraguay, your group in Paraguay.",
  };

  return metadata;
}
