"use client";

import { ThumbsUp, Trash } from "lucide-react";

import { Avatar } from "@/app/components/Avatar";
import { dateTimeFormatAmericanDate } from "@/app/lib/date-time-format-american-date";
import { dateTimeFormatRelativeToNow } from "@/app/lib/date-time-format-relative-to-now";
import { IComment } from "@/app/types/IComment";
import { ISession } from "@/app/types/ISession";

interface ICommentProps {
  session: ISession;
  comment: IComment;
  onRemoveComment: (commentId: string) => void;
}

export function Comment({ comment, session, onRemoveComment }: ICommentProps) {
  return (
    <div className="mt-6 flex gap-4">
      <Avatar
        name={session?.user?.name ? session?.user?.name : "User profile"}
      />

      <div className="flex-1">
        <div className="rounded-lg bg-gray-300 p-4">
          <header className="flex items-center justify-between">
            <div className="flex flex-col">
              <p style={{ display: "none" }}>
                Id do autor: {comment.author.id}
              </p>

              <strong className="block">{comment.author.name}</strong>

              <time
                className="text-sm text-black"
                title={dateTimeFormatAmericanDate(comment.publishedAt)}
                dateTime={new Date(comment.publishedAt).toISOString()}
              >
                {dateTimeFormatRelativeToNow(comment.publishedAt)}
              </time>
            </div>
            <button
              className="cursor-pointer rounded border-0 bg-transparent leading-none text-gray-500"
              title="Remove comment"
              onClick={() => onRemoveComment(comment.id)}
            >
              <Trash size={15} className="text-black" />
            </button>
          </header>
          <p className="mt-4">{comment.content}</p>
        </div>

        <footer className="mt-4">
          <button className="mt-2 flex cursor-pointer items-center gap-2 border-0 bg-transparent text-gray-500">
            <ThumbsUp size={20} />
            Like <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
