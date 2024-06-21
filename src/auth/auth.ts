import { AxiosError } from "axios";

import { api } from "@/app/lib/axios";

interface SignInResponse {
  token: string;
  user: {
    id: string;
    name: string;
    email: string;
    approved_at: string | null;
    created_at: string;
    role: "ADMIN" | "MEMBER" | "NOT_APPROVED";
  };
}

interface SignInCredentials {
  email: string;
  password: string;
}

export async function signInTeste({
  email,
  password,
}: SignInCredentials): Promise<SignInResponse> {
  try {
    const response = await api.post("sessions", { email, password });

    return response.data;
  } catch (error) {
    // console.log("error", error);
    // throw new Error("Error"); //TODO: melhorar isso
    if (error instanceof AxiosError && error.response?.data?.message) {
      throw new Error(error.response.data.message);
      // setAuthenticationError(error.response.data.message);
    } else {
      throw new Error("Erro ao fazer login");
      // setAuthenticationError("Erro ao fazer login");
    }
  }
}
