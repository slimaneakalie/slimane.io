import { Video } from "./videoCard.types";
import { ArticlesMap } from "../shared/articles.types";
import { PodcastItem } from "../podcast/podcast.types";

export interface HomeState {
  latestVideos: Video[];
  latestArticles: ArticlesMap;
  allVideosExternalLink: string;
  latestPodcast: PodcastItem | null;
  presenterVideoId: string;
  presenterVideoStart: number;
}
