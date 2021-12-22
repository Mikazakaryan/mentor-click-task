import { Models } from "@rematch/core";
import user from "./user";
import matches from "./matches";

export interface RootModel extends Models<RootModel> {
  user: typeof user;
  matches: typeof matches;
}

export const models: RootModel = { user, matches };
