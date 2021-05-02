import { Video } from "./videoCard.types";
import { ArticlesMap } from "../shared/articles.types";

export interface HomeState {
  latestVideos: Video[];
  latestArticles: ArticlesMap;
  allVideosExternalLink: string;
  latestPodcastEmbedUrl: string;
  presenterVideoId: string;
}
