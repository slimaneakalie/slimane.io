import { AllPodcastsGraphqlResponse } from "../../../types/shared/graphql.types";
import { PodcastMap } from "../../../types/podcast/podcast.types";
import { ApolloQueryResult } from "@apollo/client/core/types";
import { formatDate } from "../../utils";

export function mapResponseToPodcastMap(
  response?: ApolloQueryResult<AllPodcastsGraphqlResponse>
): PodcastMap {
  const podcastMap: PodcastMap = {};

  response?.data.allPodcast?.forEach((podcast) => {
    podcastMap[podcast._id] = {
      ...podcast,
      streamingDateStr: formatDate(new Date(podcast.streamingDateStr)),
    };
  });

  return podcastMap;
}
