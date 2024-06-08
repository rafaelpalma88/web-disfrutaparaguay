"use client";

import { z } from "zod";

const envSchema = z.object({
  NEXT_PUBLIC_API_URL: z.string().url(),
});

const parsedEnv = envSchema.safeParse(process.env);

console.log("API URL:", process.env.NEXT_PUBLIC_API_URL);

console.log("parsedEnv", parsedEnv);

console.log("Error details:", parsedEnv.error);

// Exportando as variáveis de ambiente validadas
export const env = parsedEnv.data;
