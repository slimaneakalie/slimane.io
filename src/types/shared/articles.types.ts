export interface Article {
  id: string;
  thumbnailURL: string;
  title: string;
  shortDescription: string;
  readingTimeInMinute: number;
  publishingDateStr: string;
  body?: string;
}

export interface ArticlesMap {
  [key: string]: Article;
}

export interface SlugStaticPath {
  slug: string;
}
