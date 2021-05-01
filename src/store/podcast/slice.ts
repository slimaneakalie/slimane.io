import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  ArticlesState,
  SetArticleItemStateAction,
} from "../../types/articles/store.articles.types";
import { PodcastState } from "../../types/podcast/store.podcast.types";

const initialState: PodcastState = {
  pagePodcastEpisodes: {},
};

const podcastSlice = createSlice({
  name: "podcast",
  initialState,
  reducers: {
    setPodcastState(state: PodcastState, action: PayloadAction<PodcastState>) {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const { setPodcastState } = podcastSlice.actions;

export const podcastRootReducer = podcastSlice.reducer;
