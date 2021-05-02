import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  PodcastState,
  SetPodcastItemStateAction,
} from "../../types/podcast/store.podcast.types";

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
    setPodcastItemState(
      state: PodcastState,
      action: PayloadAction<SetPodcastItemStateAction>
    ) {
      const { id, newState } = action.payload;
      state.pagePodcastEpisodes[id] = newState;
    },
  },
});

export const { setPodcastState, setPodcastItemState } = podcastSlice.actions;

export const podcastRootReducer = podcastSlice.reducer;
