import { createModel } from "@rematch/core";
import type { RootModel } from ".";
import { Gender, User } from "../../types/user";

const defaultState: User = {
  id: "",
  first_name: "",
  last_name: "",
  email: "",
  gender: Gender.Other,
  department: "",
  "job title": "",
  country: "",
  city: "",
};

const userModel = createModel<RootModel>()({
  state: { ...defaultState },
  reducers: {
    clearState: () => ({ ...defaultState }),
  },
  effects: () => ({}),
});

export default userModel;
