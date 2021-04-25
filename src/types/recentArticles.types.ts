import { Article } from "./articleCard.types";

interface ArticlesMap {
  [key: string]: Article;
}

export interface RecentArticlesProps {
  articles: ArticlesMap;
}
