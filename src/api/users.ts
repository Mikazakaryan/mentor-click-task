import axios from "./axiosInstance";
import { User } from "../types/user";

export const getUsers = () =>
  axios.get("/users").then((response): User[] => response.data.users);
