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
import { serialize } from "next-mdx-remote/serialize";

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
    const article = { ...response?.data.allPost[0] };
    if (article.bodyMarkdown) {
      const mdxOptions = {
        remarkPlugins: [require("remark-prism")],
      };
      article.bodyMarkdown = await serialize(article.bodyMarkdown as string, {
        mdxOptions,
      });
    }

    return mapArticleElement(article);
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
