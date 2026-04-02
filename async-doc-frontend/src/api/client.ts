import ky from "ky";

export const api = ky.create({
  prefixUrl: "http://localhost:8000",
  timeout: 10000,
  credentials: "include", // optional for auth cookies
  headers: {
    Accept: "application/json",
  },
});