import {
  GET_LATEST_N_ARTICLES,
  LatestNArticlesResponse,
} from "../queries/home";
import { executeGraphqlQuery } from "../client";
import { ArticlesMap } from "../../../types/home/recentArticles.types";

export async function fetchLatestArticles(n: number): Promise<ArticlesMap> {
  const articlesMap: ArticlesMap = {};
  const allPost = await executeGraphqlQuery<LatestNArticlesResponse>(
    GET_LATEST_N_ARTICLES,
    { n }
  );

  if (allPost) {
    const articles = allPost.data.allPost;
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
