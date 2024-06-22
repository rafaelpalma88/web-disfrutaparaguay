import { api } from "@/app/lib/axios";

export interface RegisterUserBody {
  name: string;
  email: string;
  password: string;
}

export async function registerUser({
  name,
  email,
  password,
}: RegisterUserBody) {
  const createdUser = await api.post("users", { name, email, password });

  return createdUser;
}
