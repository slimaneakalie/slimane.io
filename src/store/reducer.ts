import { homeRootReducer } from "./home/slice";
import { sharedRootReducer } from "./shared/slice";

export const rootReducer = {
  home: homeRootReducer,
  shared: sharedRootReducer,
};
