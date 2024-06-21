import NextAuth, { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import axios from "axios";

const nextAuthOptions: NextAuthOptions = {
  providers: [
    Credentials({
      name: "credentials",
      credentials: {
        email: { label: "email", type: "text" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials, req) {
        if (credentials) {
          const response = await axios.post(
            `http://localhost:4000/sessions`,
            // `${process.env.NEXT_PUBLIC_API_URL}/sessions`, TODO: resolver variaveis de ambiente
            {
              email: credentials.email,
              password: credentials.password,
            },
          );
          return response.data;
        }
        return null;
      },
    }),
  ],
  pages: {
    signIn: "/sign-in",
  },
};

const handler = NextAuth(nextAuthOptions);

export { handler as GET, handler as POST };
