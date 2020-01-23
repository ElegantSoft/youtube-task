import { combineReducers } from "redux";
import youtubeReducer, { YoutubeState } from "./youtubeReducer";

export default combineReducers({
  youtube: youtubeReducer
});

export interface CentralState {
  youtube: YoutubeState;
}
