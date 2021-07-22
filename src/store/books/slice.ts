import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HomeState } from "../../types/home/store.home.types";
import { BooksPageState } from "../../types/books/store.books.types";

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
  },
});

export const { setBooksState } = booksSlice.actions;

export const booksRootReducer = booksSlice.reducer;
