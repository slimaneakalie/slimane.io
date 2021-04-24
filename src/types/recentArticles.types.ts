import { Article } from "./article.types";

interface ArticlesMap {
  [key: string]: Article;
}

export interface RecentArticlesProps {
  articles: ArticlesMap;
}
