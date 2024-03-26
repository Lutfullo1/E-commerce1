import axios from "axios";

export const request = axios.create({
  baseURL: "https://e-commerce1-server.vercel.app",
});
