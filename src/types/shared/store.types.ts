import { HomeState } from "../home/store.home.types";
import { ArticlesState } from "../articles/store.articles.types";
import { PodcastState } from "../podcast/store.podcast.types";
import { AudioPlatforms } from "./whereToListen.types";

export interface SharedState {
  darkModeActivated: boolean;
  audioPlatforms: AudioPlatforms[];
}

export interface State {
  home: HomeState;
  articles: ArticlesState;
  podcast: PodcastState;
  shared: SharedState;
}
