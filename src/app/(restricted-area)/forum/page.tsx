import { customMetadata } from "@/app/lib/metadata";

export const metadata = customMetadata("Forum");

export default function Forum() {
  return (
    <div
      className="wrapper"
      style={{ maxWidth: "70rem", margin: "2rem auto", padding: "0 1rem" }}
    >
      <aside>sidebar</aside>
      <main>
        <p>xxxxx</p>
        <p>xxxxx</p>
      </main>
    </div>
  );
}
