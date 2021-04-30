import { ArticlesState } from "../../types/articles/store.articles.types";
import { fetchPageArticles } from "../../lib/graphql/fetchers/articles";

const initialState: ArticlesState = {
  pageArticles: {},
};

export async function getInitialState(): Promise<ArticlesState> {
  initialState.pageArticles = await fetchPageArticles();
  return initialState;
}
