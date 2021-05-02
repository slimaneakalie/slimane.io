import { createSelector } from "@reduxjs/toolkit";
import { selectSelf } from "../selectors";
import { SharedState, State } from "../../types/shared/store.types";

export function selectSharedStateField(fieldName: keyof SharedState) {
  return createSelector(selectSelf, (state: State) => state.shared[fieldName]);
}
