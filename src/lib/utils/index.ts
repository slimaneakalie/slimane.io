export function isClient(): boolean {
  return typeof window !== "undefined";
}

export function createArticleLink(articleId: string): string {
  return `/articles/${articleId}`;
}

export function createPodcastLink(podcastId: string): string {
  return `/podcast/${podcastId}`;
}

export function createPodcastEmbedLink(podcastId: string): string {
  return `https://open.spotify.com/embed/episode/${podcastId}?theme=0`
}

export function createVideoLink(videoId: string): string {
  return `https://youtu.be/${videoId}`;
}

export function createVideoThumbnailLink(videoId: string): string {
  return `https://i3.ytimg.com/vi/${videoId}/maxresdefault.jpg`;
}

export function formatDate(date: Date): string {
  return date.toDateString().slice(4);
}

export function createBookHighlightsLink(bookId: string): string {
  return `/books/${bookId}`;
}
