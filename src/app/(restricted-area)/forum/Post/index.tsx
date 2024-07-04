import Image from "next/image";
import { getServerSession } from "next-auth";

import { showUserRole } from "@/app/lib/show-user-role";
import { nextAuthOptions } from "@/utils/authOptions";

import { Comment } from "../Comment";

export interface PostProps {
  id: string;
  title: string;
  content: string;
  comments: CommentProps[];
}

export interface CommentProps {
  id: string;
  authorId: string;
  authorName: string;
  content: string;
}

export async function Post({ id, title, content, comments }: PostProps) {
  const session = await getServerSession(nextAuthOptions);

  return (
    <article
      style={{
        background: "lightgray",
        borderRadius: 8,
        padding: "2.5rem",
        marginBottom: "1.5rem",
      }}
    >
      <header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <Image
            src="/user.jpg"
            alt={session?.user?.name ? session?.user?.name : "User profile"}
            width={48}
            height={48}
            style={{
              borderRadius: 8,
              border: "2px solid gray",
              // outline: "2px solid green",
              width: "calc(2rem + 16px)",
              height: "calc(2rem + 16px)",
            }}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <strong
              style={{ display: "block", color: "black", lineHeight: 1.6 }}
            >
              {session?.user?.name ? session?.user?.name : "User profile"}
            </strong>
            <span
              style={{
                display: "block",
                fontSize: "0.875rem",
                color: "black",
                lineHeight: 1.6,
              }}
            >
              {session?.user?.role && showUserRole(session?.user?.role)}
            </span>
          </div>
        </div>
        <time
          style={{ fontSize: "0.875rem", color: "black" }}
          title="11 de maio às 08:13h"
          dateTime="2022-05-11 08:13:10"
        >
          Publicado há 1 hora
        </time>
      </header>
      <div style={{ lineHeight: 1.6, color: "black", marginTop: "1.5rem" }}>
        <h3>{title}</h3>
        <p style={{ marginTop: "1rem" }}>{content}</p>
        <p style={{ marginTop: "1rem" }}>Id: {id}</p>
        {/* <p style={{ marginTop: "1rem" }}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <p style={{ marginTop: "1rem" }}>
          Illo possimus eveniet velit? Soluta, optio animi illum tenetur
          accusantium eum molestiae explicabo esse commodi autem, consequatur
          odio reiciendis.
        </p> */}
        <p style={{ marginTop: "1rem" }}>
          <a
            style={{
              fontWeight: "bold",
              color: "green",
              textDecoration: "none",
            }}
            href="#"
          >
            Fugit, nihil explicabo!
          </a>
        </p>
      </div>
      <form
        style={{
          width: "100%",
          marginTop: "0.5rem",
          marginBottom: "1.5rem",
        }}
      >
        <textarea
          style={{
            width: "100%",
            background: "gray",
            border: 0,
            resize: "none",
            height: "6rem",
            padding: "1rem",
            borderRadius: 8,
            color: "lightgray",
            lineHeight: 1.4,
            marginTop: "1rem",
          }}
          placeholder="Deixe um comentário"
        />
        <button
          style={{
            padding: "1rem 1.5rem",
            marginTop: "1rem",
            borderRadius: 8,
            border: 0,
            background: "green",
            color: "white",
            fontWeight: "bold",
            cursor: "pointer", // criar hover no botao adicionando transitions
          }}
          type="submit"
        >
          Comentar
        </button>
      </form>
      <div>
        {comments.map((comment: CommentProps) => {
          return <Comment key={comment.id} />;
        })}
      </div>
    </article>
  );
}
