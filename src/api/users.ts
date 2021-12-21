import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { User } from "../types/user";
import usersMock from "../mock/users.json";

const mock = new MockAdapter(axios);

mock.onGet("/users").reply(200, {
  users: usersMock,
});

export const getUsers = () =>
  axios.get("/users").then((response): User[] => response.data.users);
