interface Article {
  thumbnailURL: string;
  title: string;
  shortDescription: string;
  readingTimeInMinute: number;
  publishingDate: string;
}

interface ArticlesMap {
  [key: string]: Article;
}

export interface RecentArticlesProps {
  articles: ArticlesMap;
}
