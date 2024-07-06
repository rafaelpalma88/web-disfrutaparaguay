import Image from "next/image";
import { getServerSession } from "next-auth";

import { Avatar } from "@/app/components/Avatar";
import { CustomButton as Button } from "@/app/components/CustomButton";
import { showUserRole } from "@/app/lib/show-user-role";
import { nextAuthOptions } from "@/utils/authOptions";

export async function Sidebar() {
  const session = await getServerSession(nextAuthOptions);

  return (
    <aside
      style={{ background: "#efeeee", borderRadius: 8, overflow: "hidden" }}
    >
      <Image
        width={500}
        height={200}
        alt=""
        src="https://images.unsplash.com/photo-1532635248-cdd3d399f56c?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        style={{ width: "100%", height: 72, objectFit: "cover" }}
      />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "calc(0px - 1rem - 6px)",
        }}
      >
        <Avatar
          name={session?.user?.name ? session?.user?.name : "User profile"}
        />

        <strong style={{ marginTop: "1rem", color: "gray", lineHeight: 1.6 }}>
          {session?.user?.name && session?.user?.name}
        </strong>
        <span style={{ fontSize: "0.875rem", color: "gray", lineHeight: 1.6 }}>
          {session?.user?.role && showUserRole(session?.user?.role)}
        </span>
      </div>

      <footer
        style={{
          padding: "1.5rem 2rem 2rem",
        }}
      >
        <Button type="EDIT_PROFILE" title="Edit profile" direction="/profile" />
      </footer>
    </aside>
  );
}
