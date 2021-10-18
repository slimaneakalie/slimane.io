import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HomeState } from "../../types/home/store.home.types";

const initialState: HomeState = {
  latestVideos: [],
  latestArticles: {},
  allVideosExternalLink: "",
  presenterVideoId: "",
  latestPodcast: null,
  presenterVideoStart: 0,
};

const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    setHomeState(state: HomeState, action: PayloadAction<HomeState>) {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const { setHomeState } = homeSlice.actions;

export const homeRootReducer = homeSlice.reducer;
