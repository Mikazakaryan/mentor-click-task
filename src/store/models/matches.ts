import { createModel } from "@rematch/core";
import type { RootModel } from ".";
import { User } from "../../types/user";

const matches: { [id: string]: User } = {};

const matchesModel = createModel<RootModel>()({
  state: { ...matches },
  reducers: {
    setMatches: (_, payload: { [id: string]: User }) => ({ ...payload }),
    clearState: () => ({ ...matches }),
  },
  effects: () => ({}),
});

export default matchesModel;
