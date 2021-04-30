import { executeGraphqlQuery } from "../client";
import { GET_PAGE_ARTICLES } from "../queries/articles";
import { ArticlesGraphqlResponse } from "../../../types/shared/graphql.types";
import { ArticlesMap } from "../../../types/shared/articles.types";
import { mapResponseToArticlesMap } from "../mappers/articlesGraphqlResponse";

export async function fetchPageArticles(): Promise<ArticlesMap> {
  const response = await executeGraphqlQuery<ArticlesGraphqlResponse>(
    GET_PAGE_ARTICLES,
    {}
  );

  return mapResponseToArticlesMap(response);
}
