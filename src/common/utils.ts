export function isClient(): boolean {
  return typeof window !== "undefined";
}

export function createArticleLink(articleId: string): string {
  return `/articles/${articleId}`;
}

export function createVideoLink(videoId: string): string {
  return `https://youtu.be/${videoId}`;
}
