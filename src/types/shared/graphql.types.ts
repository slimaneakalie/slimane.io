import { Article } from "./articles.types";
import { PodcastItem } from "../podcast/podcast.types";

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
  bodyRaw?: object;
}

export interface AllPodcastsGraphqlResponse {
  allPodcast: PodcastItem[];
}

export interface PodcastGraphqlResponse {
  Podcast: PodcastItem;
}

export interface BooksGraphqlResponse {
  allBook: BookGraphqlResponseElement[];
}

export interface BookGraphqlResponseElement {
  title: string;
  highlightsNotionPageId: string;
  shortDescription?: string;
  cover3dImage: {
    asset: {
      url: string;
    };
  };
}
