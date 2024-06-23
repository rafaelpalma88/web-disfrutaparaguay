import { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { AxiosError } from "axios";

import { api } from "@/app/lib/axios";

export const nextAuthOptions: NextAuthOptions = {
  providers: [
    Credentials({
      name: "credentials",
      credentials: {
        email: { label: "email", type: "text" },
        password: { label: "password", type: "password" },
      },
      // Arrumar este tipo depois
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      async authorize(credentials, _request) {
        if (credentials) {
          try {
            const response = await api.post("/sessions", {
              email: credentials.email,
              password: credentials.password,
            });
            return response.data;
          } catch (error) {
            if (error instanceof AxiosError && error.response?.data?.message) {
              throw new Error(error.response.data.message);
            } else {
              throw new Error("Erro ao fazer login");
            }
          }
        }
      },
    }),
  ],
  pages: {
    signIn: `${process.env.API_URL}/sign-in`,
  },
  callbacks: {
    async jwt({ token, user }) {
      user && (token.user = user);
      return token;
    },
    async session({ session, token }) {
      // TODO: Arrumar este tipo depois
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      session = token.user as any;
      return session;
    },
  },
};
