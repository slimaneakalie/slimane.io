import {
  ArticleResponseElement,
  ArticlesGraphqlResponse,
} from "../../../types/shared/graphql.types";
import { Article, ArticlesMap } from "../../../types/shared/articles.types";
import { ApolloQueryResult } from "@apollo/client/core/types";
import { formatDate } from "../../utils";
import {MDXRemoteSerializeResult} from "next-mdx-remote/dist/types";

export function mapResponseToArticlesMap(
  response?: ApolloQueryResult<ArticlesGraphqlResponse>
): ArticlesMap {
  const articlesMap: ArticlesMap = {};
  if (response) {
    const articles = response.data.allPost;
    articles?.forEach((article) => {
      articlesMap[article.slug.current] = mapArticleElement(article);
    });
  }

  return articlesMap;
}

export function mapArticleElement(element: ArticleResponseElement): Article {
  return {
    id: element.slug.current,
    thumbnailURL: element.mainImage.asset.url,
    title: element.title,
    shortDescription: element.excerpt,
    readingTimeInMinute: element.readingTimeInMinute,
    body: element.bodyRaw || {},
    bodyMarkdown: element.bodyMarkdown ? element.bodyMarkdown as MDXRemoteSerializeResult : undefined,
    author: element.author || null,
    tags: element.tags || null,
    publishingDateStr: formatDate(new Date(element._createdAt)),
  };
}
