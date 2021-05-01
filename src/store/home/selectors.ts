import { createSelector } from "@reduxjs/toolkit";
import { State } from "../../types/shared/store.types";
import { selectSelf } from "../selectors";
import { HomeState } from "../../types/home/store.home.types";

export function selectHomeStateField(fieldName: keyof HomeState) {
  return createSelector(selectSelf, (state: State) => state.home[fieldName]);
}
