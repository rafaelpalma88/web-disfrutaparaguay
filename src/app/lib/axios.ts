import axios from "axios";

// import { env } from "../../../env";

export const api = axios.create({
  // baseURL: env && env.NEXT_PUBLIC_API_URL,
  baseURL: "https://api-disfruta-paraguay.onrender.com",
  // baseURL: "http://localhost:4000",
});
