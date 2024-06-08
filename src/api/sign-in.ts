import { api } from "@/app/lib/axios";

export interface SignInBody {
  email: string;
  password: string;
}

export async function signIn({ email, password }: SignInBody) {
  await api.post("authenticate", { email, password });
}
