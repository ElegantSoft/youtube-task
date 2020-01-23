import { SearchItem } from "src/utils/interfaces/youtubeItem";
import * as types from "../types";
import { ReduxAction } from "../actions/youtubeSearch";

export interface YoutubeState {
  loading: boolean;
  items: Array<SearchItem>;
}

const initialState: YoutubeState = {
  loading: true,
  items: []
};

export default (
  state = initialState,
  { type, payload }: ReduxAction
): YoutubeState => {
  switch (type) {
    case types.SHOW_LOADING:
      return {
        ...state,
        loading: true
      };
    case types.HIDE_LOADING:
      return {
        ...state,
        loading: false
      };

    default:
      return state;
  }
};
