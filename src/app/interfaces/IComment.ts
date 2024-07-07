export interface IComment {
  id: string;
  author: {
    id: string;
    avatarUrl: string;
    name: string;
    // role: "MEMBER" | "ADMIN" | "NOT_APPROVED";
    role: string;
  };
  publishedAt: Date;
  content: string;
}
