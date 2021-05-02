import { executeGraphqlQuery } from "../client";
import { PodcastItem, PodcastMap } from "../../../types/podcast/podcast.types";
import {
  GET_ALL_PODCAST_EPISODES,
  GET_ALL_PODCAST_IDS,
  GET_PODCAST_DATA,
} from "../queries/podcast";
import {
  ArticlesGraphqlResponse,
  AllPodcastsGraphqlResponse,
  PodcastGraphqlResponse,
} from "../../../types/shared/graphql.types";
import { mapResponseToPodcastMap } from "../mappers/podcast.mappers";
import { StaticPath } from "../../../types/shared/next.types";
import { GET_ARTICLE_DATA } from "../queries/articles";
import { mapArticleElement } from "../mappers/articles.mappers";

export async function fetchPagePodcastEpisodes(): Promise<PodcastMap> {
  const response = await executeGraphqlQuery<AllPodcastsGraphqlResponse>(
    GET_ALL_PODCAST_EPISODES,
    {}
  );

  return mapResponseToPodcastMap(response);
}

export async function fetchAllPodcastIds(): Promise<StaticPath[]> {
  const response = await executeGraphqlQuery<AllPodcastsGraphqlResponse>(
    GET_ALL_PODCAST_IDS,
    {}
  );

  const ids: StaticPath[] = [];

  response?.data.allPodcast?.forEach((podcast) => {
    ids.push({ params: { id: podcast._id } });
  });
  return ids;
}

export async function fetchPodcastCompleteData(
  id: string
): Promise<PodcastItem | undefined> {
  const response = await executeGraphqlQuery<PodcastGraphqlResponse>(
    GET_PODCAST_DATA,
    {
      id,
    }
  );

  return response?.data.Podcast;
}
