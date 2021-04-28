import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HomeState } from "../../types/home/store.home.types";

const initialState: HomeState = {
  audioPlatforms: [],
  latestVideos: [],
  latestArticles: {},
  allVideosExternalLink: "",
  podcastEmbedUrl: "",
  presenterVideoId: "",
};

const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    setState(state: HomeState, action: PayloadAction<HomeState>) {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const { setState } = homeSlice.actions;

export const homeRootReducer = homeSlice.reducer;
