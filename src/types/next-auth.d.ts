// TODO: arrumar posteriormente esse tipo
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      email: string;
      password: string;
      name: string;
    };
  }
}
