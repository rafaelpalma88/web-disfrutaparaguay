import Image from "next/image";
import { getServerSession } from "next-auth";

import { nextAuthOptions } from "@/utils/authOptions";

export async function Sidebar() {
  const session = await getServerSession(nextAuthOptions);

  return (
    <aside>
      <Image
        width={500}
        height={200}
        alt=""
        src="https://images.unsplash.com/photo-1532635248-cdd3d399f56c?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />

      <div>
        <strong>{session?.user?.name && session?.user?.name}</strong>
        <span>Cargo na empresa</span>
      </div>

      <footer>
        <a href="#">Editar seu perfil</a>
      </footer>
    </aside>
  );
}
