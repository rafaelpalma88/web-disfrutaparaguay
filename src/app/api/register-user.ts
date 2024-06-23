import { api } from "../lib/axios";

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
  try {
    const createdUser = await api.post("users", {
      name,
      email,
      password,
    });

    return createdUser;
  } catch (error) {
    console.log("error", error);
    throw new Error("Erro ao criar usuário");
  }
}
