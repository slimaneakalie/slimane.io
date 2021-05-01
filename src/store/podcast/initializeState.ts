import { PodcastState } from "../../types/podcast/store.podcast.types";
import { fetchPagePodcastEpisodes } from "../../lib/graphql/fetchers/podcast";

export async function getPodcastInitialState(): Promise<PodcastState> {
  return {
    pagePodcastEpisodes: await fetchPagePodcastEpisodes(),
  };
}
