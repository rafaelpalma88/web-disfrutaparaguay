import { getServerSession } from "next-auth";

import { Avatar } from "@/app/components/Avatar";
import { showUserRole } from "@/app/lib/show-user-role";
import { IComment } from "@/app/utils/interfaces/IComment";
import { IPost } from "@/app/utils/interfaces/IPost";
import { nextAuthOptions } from "@/utils/authOptions";

import { Comment } from "../Comment";

export async function Post({ id, title, content, comments }: IPost) {
  const session = await getServerSession(nextAuthOptions);

  return (
    <article className="mb-8 rounded-lg bg-gray-200 p-10 dark:bg-gray-500">
      <header className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Avatar
            name={session?.user?.name ? session?.user?.name : "User profile"}
          />
          <div className="flex flex-col">
            <strong className="block leading-6 text-black">
              {session?.user?.name ? session?.user?.name : "User profile"}
            </strong>
            <span className="block text-sm leading-6 text-black">
              {session?.user?.role && showUserRole(session?.user?.role)}
            </span>
          </div>
        </div>
        <time
          className="text-sm text-black"
          title="11 de maio às 08:13h"
          dateTime="2022-05-11 08:13:10"
        >
          Publicado há 1 hora
        </time>
      </header>
      <div className="mt-6 leading-6 text-black">
        <h3>{title}</h3>
        <p className="mt-4">{content}</p>
        <p className="mt-4">Id: {id}</p>
        {/* <p style={{ marginTop: "1rem" }}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <p style={{ marginTop: "1rem" }}>
          Illo possimus eveniet velit? Soluta, optio animi illum tenetur
          accusantium eum molestiae explicabo esse commodi autem, consequatur
          odio reiciendis.
        </p> */}
        <p className="mt-4">
          <a className="font-bold text-green-500 no-underline" href="#">
            Fugit, nihil explicabo!
          </a>
        </p>
      </div>
      <form className="mb-6 mt-2 w-full">
        <textarea
          className="text-lightgray mt-4 h-24 w-full resize-none rounded-lg border-0 bg-gray-900 p-4 leading-tight"
          placeholder="Deixe um comentário"
        />
        <button
          className="mt-4 cursor-pointer rounded-lg border-0 bg-green-500 p-4 font-bold text-white transition-colors hover:bg-green-600"
          type="submit"
        >
          Comentar
        </button>
      </form>
      <div className="mt-8">
        {comments.map((comment: IComment) => {
          return (
            <Comment
              key={comment.id}
              id={comment.id}
              authorId={comment.authorId}
              authorName={comment.authorName}
              content={comment.content}
            />
          );
        })}
      </div>
    </article>
  );
}
