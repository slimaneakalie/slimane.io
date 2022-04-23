import { executeGraphqlQuery } from "../client";
import { PodcastItem, PodcastMap } from "../../../types/podcast/podcast.types";
import {
  GET_ALL_PODCAST_EPISODES,
  GET_ALL_PODCAST_SLUGS,
  GET_PODCAST_DATA,
} from "../queries/podcast";
import {
  PodcastsGraphqlResponse,
} from "../../../types/shared/graphql.types";
import { mapResponseToPodcastMap } from "../mappers/podcast.mappers";
import { StaticPath } from "../../../types/shared/next.types";

export async function fetchPagePodcastEpisodes(): Promise<PodcastMap> {
  const response = await executeGraphqlQuery<PodcastsGraphqlResponse>(
    GET_ALL_PODCAST_EPISODES,
    {}
  );

  return mapResponseToPodcastMap(response);
}

export async function fetchAllPodcastSlugs(): Promise<StaticPath[]> {
  const response = await executeGraphqlQuery<PodcastsGraphqlResponse>(
    GET_ALL_PODCAST_SLUGS,
    {}
  );

  const slugs: StaticPath[] = [];

  response?.data.allPodcast?.forEach((podcast) => {
    slugs.push({ params: { slug: podcast.slug.current } });
  });

  return slugs;
}

export async function fetchPodcastCompleteData(
    slug: string
): Promise<PodcastItem | undefined> {
  const response = await executeGraphqlQuery<PodcastsGraphqlResponse>(
    GET_PODCAST_DATA,
    {
      slug,
    }
  );


  if (response && response.data.allPodcast.length > 0) {
    const podcast = { ...response?.data.allPodcast[0] };
    return podcast;
  }
}
