import axios from "./axiosInstance";
import { User } from "../types/user";

export const signup = (_body: User & { password: string }) =>
  axios.post("/signup").then((response) => response.data.user);

export const login = (_body: { email: string; password: string }) =>
  axios.post("/login").then((response) => response.data.user);
