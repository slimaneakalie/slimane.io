import { createSelector } from "@reduxjs/toolkit";
import { selectSelf } from "../selectors";
import { State } from "../../types/shared/store.types";
import { BooksPageState } from "../../types/books/store.books.types";

export function selectBooksStateField(fieldName: keyof BooksPageState) {
  return createSelector(selectSelf, (state: State) => state.books[fieldName]);
}
