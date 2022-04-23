export interface PodcastItem {
  slug: {
    current: string;
  };
  thumbnailURL: string;
  title: string;
  excerpt: string;
  streamingDateStr: string;
  videoId: string;
  audioId: string;
  arabicDescription: string;
  englishDescription: string;
}

export interface PodcastMap {
  [key: string]: PodcastItem;
}
