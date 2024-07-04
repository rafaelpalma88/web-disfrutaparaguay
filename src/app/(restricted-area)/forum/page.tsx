import { customMetadata } from "@/app/lib/metadata";

import { Sidebar } from "./Sidebar";

export const metadata = customMetadata("Forum");

export default function Forum() {
  return (
    <div
      className="wrapper"
      style={{
        maxWidth: "70rem",
        margin: "2rem auto",
        padding: "0 1rem",
        display: "grid",
        gridTemplateColumns: "256px 1fr",
        gap: "2rem",
        alignItems: "flex-start",
      }}
    >
      <Sidebar />
      <main>
        <p>xxxxx</p>
        <p>xxxxx</p>
      </main>
    </div>
  );
}
