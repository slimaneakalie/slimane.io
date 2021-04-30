import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ArticlesState } from "../../types/articles/store.articles.types";

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
  },
});

export const { setArticlesState } = articlesSlice.actions;

export const articlesRootReducer = articlesSlice.reducer;
