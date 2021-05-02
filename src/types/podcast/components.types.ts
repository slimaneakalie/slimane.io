import { PodcastItem, PodcastMap } from "./podcast.types";

export interface PodcastCardProps {
  podcastCardData: PodcastItem;
  className?: string;
}

export interface PodcastPageProps {
  podcastPageEpisodes: PodcastMap;
}

export interface PodcastItemPageProps {
  podcastItem: PodcastItem;
}
