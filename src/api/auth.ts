import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { Gender, User } from "../types/user";

const mock = new MockAdapter(axios);

const tempUser = {
  id: "temp_id",
  first_name: "Temp",
  last_name: "User",
  email: "temp@emil.com",
  gender: Gender.Other,
  department: "Marketing",
  "job title": "Analog Circuit Design manager",
  country: "China",
  city: "Damaying",
};

mock.onPost("/signup").reply(200, { user: tempUser });
mock.onPost("/login").reply(200, { user: tempUser });

export const signup = (_body: User & { password: string }) =>
  axios.post("/signup").then((response) => response.data.user);

export const login = (_body: { email: string; password: string }) =>
  axios.post("/login").then((response) => response.data.user);
