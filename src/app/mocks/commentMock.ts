import { IComment } from "../interfaces/IComment";

export const commentMock: IComment = {
  id: "1",
  author: {
    id: "123456",
    avatarUrl: "https://avatars.githubusercontent.com/u/23245187?v=4",
    name: "Rafael Costa Palma",
    role: "ADMIN",
  },
  publishedAt: new Date("2022-05-03 20:00:00"),
  content: "Example Comment 1",
};
