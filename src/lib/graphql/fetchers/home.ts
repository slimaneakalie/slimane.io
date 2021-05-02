import {
  GET_LATEST_N_ARTICLES,
  GET_LATEST_PODCAST_EPISODE,
} from "../queries/home";
import { executeGraphqlQuery } from "../client";
import {
  AllPodcastsGraphqlResponse,
  ArticlesGraphqlResponse,
} from "../../../types/shared/graphql.types";
import { mapResponseToArticlesMap } from "../mappers/articles.mappers";
import { ArticlesMap } from "../../../types/shared/articles.types";
import { PodcastItem } from "../../../types/podcast/podcast.types";
import { GET_PODCAST_DATA } from "../queries/podcast";

export async function fetchLatestArticles(n: number): Promise<ArticlesMap> {
  const response = await executeGraphqlQuery<ArticlesGraphqlResponse>(
    GET_LATEST_N_ARTICLES,
    { n }
  );

  return mapResponseToArticlesMap(response);
}

export async function fetchLatestPodcast(): Promise<PodcastItem | null> {
  const response = await executeGraphqlQuery<AllPodcastsGraphqlResponse>(
    GET_LATEST_PODCAST_EPISODE,
    {}
  );

  if (response && response.data.allPodcast?.length > 0) {
    return response.data.allPodcast[0];
  }

  return null;
}
