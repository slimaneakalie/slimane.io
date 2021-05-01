import { ArticlesState } from "../../types/articles/store.articles.types";
import { fetchPageArticles } from "../../lib/graphql/fetchers/articles";
import { Article } from "../../types/shared/articles.types";

const initialState: ArticlesState = {
  pageArticles: {},
};

export async function getArticlesInitialState(): Promise<ArticlesState> {
  initialState.pageArticles = await fetchPageArticles();
  return initialState;
}
