import { AudioPlatforms } from "./LatestPodcast";
import { ArticlesMap } from "./recentArticles.types";
import { Video } from "./videoCard.types";

export interface HomeState {
  audioPlatforms: AudioPlatforms[];
  latestVideos: Video[];
  latestArticles: ArticlesMap;
  allVideosExternalLink: string;
  latestPodcastEmbedUrl: string;
  presenterVideoId: string;
}
