import Image from "next/image";
import { getServerSession } from "next-auth";
import { ThumbsUp, Trash } from "lucide-react";

import { IComment } from "@/app/utils/interfaces/IComment";
import { nextAuthOptions } from "@/utils/authOptions";

export async function Comment({ id, authorId, authorName, content }: IComment) {
  const session = await getServerSession(nextAuthOptions);

  return (
    <div style={{ marginTop: "1.5rem", display: "flex", gap: "1rem" }}>
      <Image
        src="/user.jpg"
        alt={session?.user?.name ? session?.user?.name : "User profile"}
        width={48}
        height={48}
        style={{
          borderRadius: 8,
          border: "2px solid gray",
          width: "calc(2rem + 16px)",
          height: "calc(2rem + 16px)",
        }}
      />

      <div style={{ flex: 1 }}>
        <div style={{ background: "gray", borderRadius: 8, padding: "1rem" }}>
          <header
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <p>Id do comentário: {id}</p>
              <p>Id do autor: {authorId}</p>

              <strong style={{ display: "block" }}>{authorName}</strong>
              <time
                style={{
                  display: "block",
                  fontSize: "0.875rem",
                  color: "black",
                  lineHeight: 1.6,
                }}
                title="11 de maio às 08:13h"
                dateTime="2022-05-11 08:13:10"
              >
                Publicado há 1 hora
              </time>
            </div>
            <button
              style={{
                background: "transparent",
                border: 0,
                color: "gray",
                cursor: "pointer",
              }}
              title="Deletar comentário"
            >
              <Trash />
            </button>
          </header>
          <p>{content}</p>
        </div>

        <footer>
          <button
            style={{
              display: "flex",
              background: "transparent",
              border: 0,
              color: "gray",
              cursor: "pointer",
              gap: "0.45rem",
              marginTop: "0.5rem",
            }}
          >
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
