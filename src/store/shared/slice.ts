import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HomeState } from "../../types/home/store.home.types";
import { SharedState } from "../../types/shared/store.types";

const initialState: SharedState = {
  darkModeActivated: false,
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
