import { PodcastItem, PodcastMap } from "./podcast.types";

export interface PodcastState {
  pagePodcastEpisodes: PodcastMap;
}

export interface SetPodcastItemStateAction {
  slug: string;
  newState: PodcastItem;
}
