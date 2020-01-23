import * as types from "../types";

export interface ReduxAction {
  type: string;
  payload?: any;
}

export const showLoading = (): ReduxAction => {
  return {
    type: types.SHOW_LOADING
  };
};
export const hideLoading = (): ReduxAction => {
  return {
    type: types.HIDE_LOADING
  };
};
