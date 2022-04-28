import {MDXRemoteSerializeResult} from "next-mdx-remote/dist/types";

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
  body?: Record<string, unknown>;
  textOrientation?: string;
  bodyMarkdown: MDXRemoteSerializeResult | null;
}

export interface ArticlesMap {
  [key: string]: Article;
}
