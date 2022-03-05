import { AudioPlatform } from "../shared/whereToListen.types";
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
  audioPlatforms: AudioPlatform[];
}

export interface PodcastPlatformsPageDisplayProps {
  className?: string;
  audioPlatforms: AudioPlatform[];
}