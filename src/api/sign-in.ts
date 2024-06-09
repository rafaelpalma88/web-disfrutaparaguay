import { api } from "@/app/lib/axios";

export interface SignInBody {
  email: string;
  password: string;
}

export async function signIn({ email, password }: SignInBody) {
  const token = await api.post("sessions", { email, password });

  return token;
}
