export function isClient(): boolean {
  return typeof window !== "undefined";
}

export function createArticleLink(articleId: string): string {
  return `/articles/${articleId}`;
}

export function createVideoLink(videoId: string): string {
  return `https://youtu.be/${videoId}`;
}

export function createVideoThumbnailLink(videoId: string): string {
  return `http://i3.ytimg.com/vi/${videoId}/hqdefault.jpg`;
}
