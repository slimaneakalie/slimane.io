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
  body: string;
}

export interface ArticlesGraphqlResponse {
  allPost: ArticleResponseElement[];
}
