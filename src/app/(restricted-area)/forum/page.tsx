import { getServerSession } from "next-auth";

import { Sidebar } from "@/app/components/Sidebar";
import { ISession } from "@/app/interfaces/ISession";
import { customMetadata } from "@/app/lib/metadata";
import { nextAuthOptions } from "@/utils/authOptions";

import { Post } from "./Post";

export const metadata = customMetadata("Forum");

export default async function Forum() {
  const session: ISession | null = await getServerSession(nextAuthOptions);

  if (!session) {
    return <p>Please log in to view the posts.</p>;
  }

  return (
    <div className="wrapper mx-auto my-8 grid max-w-[70rem] gap-8 px-4 lg:grid-cols-[256px_1fr]">
      <div className="hidden lg:block">
        <Sidebar />
      </div>

      <Post session={session} />
    </div>
  );
}
