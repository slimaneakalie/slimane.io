interface ArticleResponseElement {
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
}

export interface ArticlesGraphqlResponse {
  allPost: ArticleResponseElement[];
}
