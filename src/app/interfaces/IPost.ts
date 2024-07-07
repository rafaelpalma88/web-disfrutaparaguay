import { IComment } from "./IComment";

export interface IPost {
  id: string;
  title: string;
  content: string;
  author: {
    id: string;
    avatarUrl: string;
    name: string;
    // role: "MEMBER" | "ADMIN" | "NOT_APPROVED";
    role: string;
  };
  publishedAt: Date;
  comments: IComment[];
  // onSubmitComment: (comment: string, postId: string) => void;
}
