import { createSelector } from "@reduxjs/toolkit";
import { selectSelf } from "../selectors";
import { State } from "../../types/shared/store.types";
import { PodcastState } from "../../types/podcast/store.podcast.types";

export function selectPodcastStateField(fieldName: keyof PodcastState) {
  return createSelector(selectSelf, (state: State) => state.podcast[fieldName]);
}
