import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  ArticlesState,
  SetArticleElementStateAction,
} from "../../types/articles/store.articles.types";

const initialState: ArticlesState = {
  pageArticles: {},
};

const articlesSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {
    setArticlesState(
      state: ArticlesState,
      action: PayloadAction<ArticlesState>
    ) {
      return {
        ...state,
        ...action.payload,
      };
    },
    setArticleElementState(
      state: ArticlesState,
      action: PayloadAction<SetArticleElementStateAction>
    ) {
      const { id, newState } = action.payload;
      state.pageArticles[id] = newState;
    },
  },
});

export const {
  setArticlesState,
  setArticleElementState,
} = articlesSlice.actions;

export const articlesRootReducer = articlesSlice.reducer;
