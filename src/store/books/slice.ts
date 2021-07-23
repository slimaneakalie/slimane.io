import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  BooksPageState,
  SetBookItemStateAction,
} from "../../types/books/store.books.types";

const initialState: BooksPageState = {
  books: {},
};

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    setBooksState(
      state: BooksPageState,
      action: PayloadAction<BooksPageState>
    ) {
      return {
        ...state,
        ...action.payload,
      };
    },
    setBookItemState(
      state: BooksPageState,
      action: PayloadAction<SetBookItemStateAction>
    ) {
      const { id, newState } = action.payload;
      state.books[id] = newState;
    },
  },
});

export const { setBooksState, setBookItemState } = booksSlice.actions;

export const booksRootReducer = booksSlice.reducer;
