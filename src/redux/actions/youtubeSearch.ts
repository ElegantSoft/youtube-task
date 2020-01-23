import { ThunkAction } from "redux-thunk";
// import { YoutubeState } from "../reducers/youtubeReducer";
import { SearchItem } from "src/utils/interfaces/youtubeItem";
import ytApi from "../../utils/apis/youtube";
import * as types from "../types";
import { CentralState } from "../reducers";

export interface Action {
  type: string;
  payload?: any;
}

type ThunkResult<R> = ThunkAction<R, CentralState, undefined, Action>;

export const showLoading = (): Action => {
  return {
    type: types.SHOW_LOADING
  };
};
export const hideLoading = (): Action => {
  return {
    type: types.HIDE_LOADING
  };
};

export const addItems = (items: Array<SearchItem>): Action => {
  return {
    type: types.ADD_ITEMS,
    payload: items
  };
};
export const changeQuery = (query: string): Action => {
  return {
    type: types.CHANGE_QUERY,
    payload: query
  };
};

export const search = (): ThunkResult<void> => {
  return async (dispatch, getState): Promise<void> => {
    const { query } = getState().youtube;
    try {
      dispatch(showLoading());
      const response = await ytApi.get("/search", {
        params: {
          q: query
        }
      });
      const { items } = response.data;
      console.log(items);
      dispatch(addItems(items));
      dispatch(hideLoading());
    } catch (error) {
      dispatch(hideLoading());
    }
  };
};
