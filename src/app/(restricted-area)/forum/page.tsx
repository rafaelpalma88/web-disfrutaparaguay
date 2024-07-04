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
    <div
      className="wrapper"
      style={{
        maxWidth: "70rem",
        margin: "2rem auto",
        padding: "0 1rem",
        display: "grid",
        gridTemplateColumns: "256px 1fr",
        gap: "2rem",
        alignItems: "flex-start",
      }}
    >
      <Sidebar />
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
