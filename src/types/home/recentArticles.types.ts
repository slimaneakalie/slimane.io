import { Article } from "./articleCard.types";

export interface ArticlesMap {
  [key: string]: Article;
}

export interface RecentArticlesProps {
  articles: ArticlesMap;
}
