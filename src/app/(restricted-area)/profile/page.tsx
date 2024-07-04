import { Sidebar } from "@/app/components/Sidebar";
import { customMetadata } from "@/app/lib/metadata";

export const metadata = customMetadata("Profile");

export default function Profile() {
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
        <p>Profile</p>
        <p>xxxxx</p>
      </main>
    </div>
  );
}
