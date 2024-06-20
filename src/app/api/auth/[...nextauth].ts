import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { AxiosError } from "axios";

import { api } from "@/app/lib/axios";
// import { IUser } from "@/app/utils/interfaces/IUser";

// interface ISession {
//   session: any;
//   token: any;
// }

// interface IJwt {
//   token: any;
//   user: IUser;
// }

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      // The name to display on the sign-in form (e.g. 'Sign in with...')
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials) {
          throw new Error("Credenciais não fornecidas");
        }

        try {
          const response = await api.post("sessions", {
            email: credentials.email,
            password: credentials.password,
          });

          if (response.data) {
            return response.data;
          } else {
            return null;
          }
        } catch (error) {
          // console.log("error", error);
          if (error instanceof AxiosError && error.response?.data?.message) {
            throw new Error(error.response.data.message);
            // setAuthenticationError(error.response.data.message);
          } else {
            throw new Error("Erro ao fazer login");
            // setAuthenticationError("Erro ao fazer login");
          }
        }
      },
    }),
  ],
  // callbacks: {
  //   async session({ session, token }) {
  //     // Adicione informações adicionais à sessão aqui
  //     session.user.role = token.role;
  //     return session;
  //   },
  //   async jwt({ token, user }) {
  //     if (user) {
  //       token.role = user.role;
  //     }
  //     return token;
  //   },
  // },
  pages: {
    signIn: "/auth/sign-in", // Custom sign-in page
  },
};
export default NextAuth(authOptions);
