export function isClient(): boolean {
  return typeof window !== "undefined";
}

export function createArticleLink(articleId: string): string {
  return `/articles/${articleId}`;
}

export function createPodcastLink(podcastId: string): string {
  return `/podcast/${podcastId}`;
}

export function createVideoLink(videoId: string): string {
  return `https://youtu.be/${videoId}`;
}

export function createVideoThumbnailLink(videoId: string): string {
  return `http://i3.ytimg.com/vi/${videoId}/hqdefault.jpg`;
}

export function formatDate(date: Date): string {
  return date.toDateString().slice(4);
}
