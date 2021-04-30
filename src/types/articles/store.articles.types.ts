import { Article, ArticlesMap } from "../shared/articles.types";

export interface ArticlesState {
  pageArticles: ArticlesMap;
}

export interface SetArticleElementStateAction {
  id: string;
  newState: Article;
}
