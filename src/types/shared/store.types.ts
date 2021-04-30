import { HomeState } from "../home/store.home.types";

export interface SharedState {
  darkModeActivated: boolean;
}

export interface State {
  home: HomeState;
  shared: SharedState;
}
