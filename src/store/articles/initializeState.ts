import { ArticlesState } from "../../types/articles/store.articles.types";
import { fetchPageArticles } from "../../lib/graphql/fetchers/articles";

export async function getArticlesInitialState(): Promise<ArticlesState> {
  return {
    pageArticles: await fetchPageArticles(),
  };
}
