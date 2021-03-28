import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: process.env.NODE_ENV === "production"
    ? "https://notely-flame.vercel.app/"
    : "http://localhost:3000",
});

