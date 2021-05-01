import { GET_LATEST_N_ARTICLES } from "../queries/home";
import { executeGraphqlQuery } from "../client";
import { ArticlesGraphqlResponse } from "../../../types/shared/graphql.types";
import { mapResponseToArticlesMap } from "../mappers/articles.mappers";
import { ArticlesMap } from "../../../types/shared/articles.types";

export async function fetchLatestArticles(n: number): Promise<ArticlesMap> {
  const response = await executeGraphqlQuery<ArticlesGraphqlResponse>(
    GET_LATEST_N_ARTICLES,
    { n }
  );

  return mapResponseToArticlesMap(response);
}
