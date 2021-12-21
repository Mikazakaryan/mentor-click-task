import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { Gender, User } from "../types/user";

const mock = new MockAdapter(axios);

mock.onPost("/users").reply(200, {});
mock.onPost("/login").reply(200, {
  user: {
    id: "temp_id",
    first_name: "Temp",
    last_name: "User",
    email: "temp@emil.com",
    gender: Gender.Other,
    department: "Marketing",
    "job title": "Analog Circuit Design manager",
    country: "China",
    city: "Damaying",
  },
});

export const signup = (_body: User) => axios.post("/signup");

export const login = (_body: { email: string; password: string }) =>
  axios.post("/login").then((response) => response.data.user);
