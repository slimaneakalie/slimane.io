import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SharedState } from "../../types/shared/store.types";
import { audioPlatforms } from "./initializeState";

const initialState: SharedState = {
  darkModeActivated: false,
  audioPlatforms,
};

const sharedSlice = createSlice({
  name: "shared",
  initialState,
  reducers: {
    setDarkMode(state: SharedState, action: PayloadAction<boolean>) {
      state.darkModeActivated = action.payload;
    },
  },
});

export const { setDarkMode } = sharedSlice.actions;

export const sharedRootReducer = sharedSlice.reducer;
