"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { Avatar } from "@/app/components/Avatar";
import { IComment } from "@/app/interfaces/IComment";
import { IPost } from "@/app/interfaces/IPost";
import { ISession } from "@/app/interfaces/ISession";
import { api } from "@/app/lib/axios";
import { dateTimeFormatAmericanDate } from "@/app/lib/date-time-format-american-date";
import { dateTimeFormatRelativeToNow } from "@/app/lib/date-time-format-relative-to-now";
import { showUserRole } from "@/app/lib/show-user-role";

// import { postsMock } from "@/app/mocks/postMock";
import { Comment } from "../Comment";

interface IPostProps {
  session: ISession;
}

export function Post({ session }: IPostProps) {
  const [posts, setPosts] = useState<IPost[]>([]);
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function onSubmit(data: any) {
    console.log(data);
    // id: "1",
    // author: {
    //   id: "123456",
    //   avatarUrl: "https://avatars.githubusercontent.com/u/23245187?v=4",
    //   name: "Rafael Costa Palma",
    //   role: "ADMIN",
    // },
    // publishedAt: new Date("2022-05-03 20:00:00"),
    // content: "Example Comment 1",
  }

  useEffect(() => {
    async function getApiData() {
      const result = await api.get("/posts");
      setPosts(result.data.posts);
      // setPosts(postsMock);
    }

    getApiData();
  }, []);

  return (
    <main>
      {posts.map((post) => {
        return (
          <article
            key={post.id}
            className="mb-8 rounded-lg bg-gray-200 p-10 dark:bg-gray-500"
          >
            <header className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Avatar
                  name={
                    session?.user?.name ? session?.user?.name : "User profile"
                  }
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
                title={dateTimeFormatAmericanDate(post.publishedAt)}
                dateTime={new Date(post.publishedAt).toISOString()}
              >
                {dateTimeFormatRelativeToNow(post.publishedAt)}
              </time>
            </header>
            <div className="mt-6 leading-6 text-black">
              <h3>{post.title}</h3>
              <p className="mt-4">{post.content}</p>
              <p className="mt-4">Id: {post.id}</p>
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
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="mb-6 mt-2 w-full"
            >
              {errors.comment && <span>This field is required</span>}
              <textarea
                {...register("comment", { required: true })}
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
              {post.comments.map((comment: IComment) => {
                return (
                  <Comment
                    key={comment.id}
                    session={session}
                    comment={comment}
                  />
                );
              })}
            </div>
          </article>
        );
      })}
    </main>
  );
}
