"use client";

import { ThumbsUp, Trash } from "lucide-react";

import { Avatar } from "@/app/components/Avatar";
import { IComment } from "@/app/interfaces/IComment";
import { ISession } from "@/app/interfaces/ISession";

interface ICommentProps {
  session: ISession;
  comment: IComment;
}

export function Comment({ comment, session }: ICommentProps) {
  return (
    <div className="mt-6 flex gap-4">
      <Avatar
        name={session?.user?.name ? session?.user?.name : "User profile"}
      />

      <div className="flex-1">
        <div className="rounded-lg bg-gray-300 p-4">
          <header className="flex items-center justify-between">
            <div className="flex flex-col">
              <p>Id do comentário: {comment.id}</p>
              <p>Id do autor: {comment.author.id}</p>

              <strong className="block">{comment.author.name}</strong>
              <time
                className="block text-sm leading-6 text-black"
                title="11 de maio às 08:13h"
                dateTime="2022-05-11 08:13:10"
              >
                Publicado há 1 hora
              </time>
            </div>
            <button
              className="cursor-pointer rounded border-0 bg-transparent leading-none text-gray-500"
              title="Deletar comentário"
            >
              <Trash className="text-black" />
            </button>
          </header>
          <p className="mt-4">{comment.content}</p>
        </div>

        <footer className="mt-4">
          <button className="mt-2 flex cursor-pointer items-center gap-2 border-0 bg-transparent text-gray-500">
            <ThumbsUp size={20} />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
