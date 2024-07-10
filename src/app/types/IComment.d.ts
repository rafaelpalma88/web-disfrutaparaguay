import { IRoleUser } from "./IRoleUser";

export interface IComment {
  id: string;
  author: {
    id: string;
    avatarUrl: string;
    name: string;
    role: IRoleUser;
  };
  publishedAt: Date;
  content: string;
}
