import { Article } from "./articles.types";

export interface ArticleResponseElement {
  title: string;
  excerpt: string;
  slug: {
    current: string;
  };
  mainImage: {
    asset: {
      url: string;
    };
  };
  readingTimeInMinute: number;
  _createdAt: string;
  author: Article["author"];
  tags: Article["tags"];
  bodyRaw?: object;
}

export interface ArticlesGraphqlResponse {
  allPost: ArticleResponseElement[];
}
