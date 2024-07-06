import { Sidebar } from "@/app/components/Sidebar";
import { customMetadata } from "@/app/lib/metadata";

import { Post } from "./Post";

const postsMock = [
  {
    id: "1",
    title: "Titulo Exemplo 1",
    content: "Content Example 1",
    comments: [
      {
        id: "1",
        authorId: "1",
        authorName: "Rafael Costa Palma",
        content: "Example Comment 1",
      },
      {
        id: "2",
        authorId: "2",
        authorName: "Augusto Costa Palma",
        content: "Example Comment 2",
      },
    ],
  },
  {
    id: "2",
    title: "Titulo Exemplo 2",
    content: "Content Example 2",
    comments: [
      {
        id: "1",
        authorId: "1",
        authorName: "Rafael Costa Palma",
        content: "Example Comment 1",
      },
      {
        id: "2",
        authorId: "2",
        authorName: "Augusto Costa Palma",
        content: "Example Comment 2",
      },
    ],
  },
];

export const metadata = customMetadata("Forum");

export default function Forum() {
  return (
    <div className="wrapper mx-auto my-8 grid max-w-[70rem] gap-8 px-4 lg:grid-cols-[256px_1fr]">
      <div className="hidden lg:block">
        <Sidebar />
      </div>
      <main>
        {postsMock.map((post) => {
          return (
            <Post
              key={post.id}
              id={post.id}
              content={post.content}
              title={post.title}
              comments={post.comments}
            />
          );
        })}
      </main>
    </div>
  );
}
