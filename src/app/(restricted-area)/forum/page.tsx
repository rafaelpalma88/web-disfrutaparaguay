import { Sidebar } from "@/app/components/Sidebar";
import { customMetadata } from "@/app/lib/metadata";

import { Post } from "./Post";

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
        <p>Forum</p>
        <Post />
        <Post />
        <Post />
      </main>
    </div>
  );
}
