import { ArticlesGraphqlResponse } from "../../../types/shared/graphql.types";
import { ArticlesMap } from "../../../types/shared/articles.types";
import { ApolloQueryResult } from "@apollo/client/core/types";

export function mapResponseToArticlesMap(
  response?: ApolloQueryResult<ArticlesGraphqlResponse>
): ArticlesMap {
  const articlesMap: ArticlesMap = {};
  if (response) {
    const articles = response.data.allPost;
    articles?.forEach((article) => {
      articlesMap[article.slug.current] = {
        id: article.slug.current,
        thumbnailURL: article.mainImage.asset.url,
        title: article.title,
        shortDescription: article.excerpt,
        readingTimeInMinute: article.readingTimeInMinute,
        publishingDateStr: new Date(article._createdAt).toLocaleDateString(),
      };
    });
  }

  return articlesMap;
}
