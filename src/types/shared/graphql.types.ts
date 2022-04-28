import { Article } from "./articles.types";
import { PodcastItem } from "../podcast/podcast.types";
import { MDXRemoteSerializeResult } from "next-mdx-remote/dist/types";

export interface ArticlesGraphqlResponse {
  allPost: ArticleResponseElement[];
}

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
  textOrientation?: string;
  bodyRaw?: Record<string, unknown>;
  bodyMarkdown?: string | MDXRemoteSerializeResult;
}

export interface PodcastsGraphqlResponse {
  allPodcast: PodcastItem[];
}

export interface BooksGraphqlResponse {
  books: BookGraphqlResponseElement[];
  otherBooks: BookGraphqlResponseElement[];
}

export interface BookGraphqlResponseElement {
  title: string;
  highlightsNotionPageId: string;
  slug: {
    current: string;
  };
  cover3dImage: {
    asset: {
      url: string;
    };
  };
}
