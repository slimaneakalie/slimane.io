import { Article, ArticlesMap } from "../shared/articles.types";

export interface ArticlesState {
  pageArticles: ArticlesMap;
}

export interface SetArticleItemStateAction {
  id: string;
  newState: Article;
}
