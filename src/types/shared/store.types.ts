import { HomeState } from "../home/store.home.types";
import { ArticlesState } from "../articles/store.articles.types";

export interface SharedState {
  darkModeActivated: boolean;
}

export interface State {
  home: HomeState;
  articles: ArticlesState;
  shared: SharedState;
}
