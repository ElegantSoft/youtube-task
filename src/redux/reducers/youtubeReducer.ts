import { SearchItem } from "src/utils/interfaces/youtubeItem";
import * as types from "../types";

export interface YoutubeState {
  loading: boolean;
  items: Array<SearchItem>;
  query: string;
}

const initialState: YoutubeState = {
  loading: true,
  query: "reactjs",
  items: []
};

export default (
  state = initialState,
  { type, payload }: { type: string; payload: any }
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
    case types.CHANGE_QUERY:
      return {
        ...state,
        query: payload
      };
    case types.ADD_ITEMS:
      return {
        ...state,
        items: payload
      };

    default:
      return state;
  }
};
