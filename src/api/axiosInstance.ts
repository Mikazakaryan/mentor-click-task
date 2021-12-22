import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { Gender } from "../types/user";
import usersMock from "../mock/users.json";

const instance = axios.create({
  baseURL: "https://real-domain.com/api/",
  timeout: 1000,
});

const mock = new MockAdapter(instance);

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

mock.onGet("/users").reply(200, {
  users: usersMock,
});

export default instance;
