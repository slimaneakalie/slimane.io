interface Author {
  name: string;
  contactLink: string;
}

export interface Tag {
  name: string;
}

export interface Article {
  id: string;
  thumbnailURL: string;
  title: string;
  shortDescription: string;
  readingTimeInMinute: number;
  publishingDateStr: string;
  author: Author | null;
  tags: Tag[] | null;
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
