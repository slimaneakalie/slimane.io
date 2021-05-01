import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  ArticlesState,
  SetArticleItemStateAction,
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
    setArticleItemState(
      state: ArticlesState,
      action: PayloadAction<SetArticleItemStateAction>
    ) {
      const { id, newState } = action.payload;
      state.pageArticles[id] = newState;
    },
  },
});

export const { setArticlesState, setArticleItemState } = articlesSlice.actions;

export const articlesRootReducer = articlesSlice.reducer;
