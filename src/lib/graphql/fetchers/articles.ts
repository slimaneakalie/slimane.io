import { executeGraphqlQuery } from "../client";
import {
  GET_ALL_ARTICLES_SLUGS,
  GET_ARTICLE_DATA,
  GET_PAGE_ARTICLES,
} from "../queries/articles";
import { ArticlesGraphqlResponse } from "../../../types/shared/graphql.types";
import { Article, ArticlesMap } from "../../../types/shared/articles.types";
import {
  mapArticleElement,
  mapResponseToArticlesMap,
} from "../mappers/articles.mappers";
import { StaticPath } from "../../../types/shared/next.types";

export async function fetchPageArticles(): Promise<ArticlesMap> {
  const response = await executeGraphqlQuery<ArticlesGraphqlResponse>(
    GET_PAGE_ARTICLES,
    {}
  );

  return mapResponseToArticlesMap(response);
}

export async function fetchArticleCompleteData(
  slug: string
): Promise<Article | undefined> {
  const response = await executeGraphqlQuery<ArticlesGraphqlResponse>(
    GET_ARTICLE_DATA,
    { slug }
  );

  if (response && response.data.allPost.length > 0) {
    return mapArticleElement(response?.data.allPost[0]);
  }
}

export async function fetchAllArticleSlugs(): Promise<StaticPath[]> {
  const response = await executeGraphqlQuery<ArticlesGraphqlResponse>(
    GET_ALL_ARTICLES_SLUGS,
    {}
  );

  const slugs: StaticPath[] = [];

  response?.data.allPost?.forEach((article) => {
    slugs.push({ params: { slug: article.slug.current } });
  });

  return slugs;
}
