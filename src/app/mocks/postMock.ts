import { IPost } from "../interfaces/IPost";

export const postsMock: IPost[] = [
  {
    id: "1",
    title: "Titulo Exemplo 1",
    content: "Content Example 1",
    publishedAt: new Date("2022-05-03 20:00:00"),
    author: {
      id: "123456",
      avatarUrl: "https://avatars.githubusercontent.com/u/23245187?v=4",
      name: "Rafael Costa Palma",
      role: "ADMIN",
    },
    comments: [
      {
        id: "1",
        author: {
          id: "123456",
          avatarUrl: "https://avatars.githubusercontent.com/u/23245187?v=4",
          name: "Rafael Costa Palma",
          role: "ADMIN",
        },
        publishedAt: new Date("2022-05-03 20:00:00"),
        content: "Example Comment 1",
      },
      {
        id: "2",
        author: {
          id: "123456",
          avatarUrl: "https://avatars.githubusercontent.com/u/23245187?v=4",
          name: "Rafael Costa Palma",
          role: "ADMIN",
        },
        publishedAt: new Date("2022-05-03 20:00:00"),
        content: "Example Comment 2",
      },
    ],
  },
];
