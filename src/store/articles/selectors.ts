import { createSelector } from "@reduxjs/toolkit";
import { selectSelf } from "../selectors";
import { State } from "../../types/shared/store.types";
import { ArticlesState } from "../../types/articles/store.articles.types";

export function selectArticlesStateField(fieldName: keyof ArticlesState) {
  return createSelector(
    selectSelf,
    (state: State) => state.articles[fieldName]
  );
}
