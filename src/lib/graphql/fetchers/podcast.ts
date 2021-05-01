import { executeGraphqlQuery } from "../client";
import { PodcastMap } from "../../../types/podcast/podcast.types";
import { GET_ALL_PODCAST_EPISODES } from "../queries/podcast";
import { PodcastsGraphqlResponse } from "../../../types/shared/graphql.types";
import { mapResponseToPodcastMap } from "../mappers/podcast.mappers";

export async function fetchPagePodcastEpisodes(): Promise<PodcastMap> {
  const response = await executeGraphqlQuery<PodcastsGraphqlResponse>(
    GET_ALL_PODCAST_EPISODES,
    {}
  );

  return mapResponseToPodcastMap(response);
}
