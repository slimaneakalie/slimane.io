export interface Article {
  id: string;
  thumbnailURL: string;
  title: string;
  shortDescription: string;
  readingTimeInMinute: number;
  publishingDateStr: string;
  body?: object;
}

export interface ArticlesMap {
  [key: string]: Article;
}

export interface SlugStaticPath {
  params: {
    slug: string;
  };
}
