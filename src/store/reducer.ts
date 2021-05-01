import { homeRootReducer } from "./home/slice";
import { sharedRootReducer } from "./shared/slice";
import { articlesRootReducer } from "./articles/slice";

export const rootReducer = {
  home: homeRootReducer,
  articles: articlesRootReducer,
  shared: sharedRootReducer,
};
