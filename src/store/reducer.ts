import { homeRootReducer } from "./home/slice";
import { sharedRootReducer } from "./shared/slice";
import { articlesRootReducer } from "./articles/slice";
import { podcastRootReducer } from "./podcast/slice";
import { booksRootReducer } from "./books/slice";

export const rootReducer = {
  home: homeRootReducer,
  articles: articlesRootReducer,
  podcast: podcastRootReducer,
  shared: sharedRootReducer,
  books: booksRootReducer,
};
