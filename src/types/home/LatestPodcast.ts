export interface AudioPlatforms {
  name: string;
  url: string;
  iconPath: string;
}
export interface LatestPodcastProps {
  podcastEmbedUrl: string;
  audioPlatforms: AudioPlatforms[];
}
