import { AudioPlatforms } from "./LatestPodcast";
import { Video } from "./videoCard.types";
import { ArticlesMap } from "../shared/articles.types";

export interface HomeState {
  audioPlatforms: AudioPlatforms[];
  latestVideos: Video[];
  latestArticles: ArticlesMap;
  allVideosExternalLink: string;
  latestPodcastEmbedUrl: string;
  presenterVideoId: string;
}
