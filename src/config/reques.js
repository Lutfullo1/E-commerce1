import axios from "axios";

export const request = axios.create({
  baseURL: "https://server-ruddy-pi.vercel.app",
});
