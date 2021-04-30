import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./reducer";
import { State } from "../types/shared/store.types";

const store = configureStore<State>({
  reducer: rootReducer,
});

export default store;
