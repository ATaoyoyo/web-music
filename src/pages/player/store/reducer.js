import { Map } from "immutable";
import * as actionTypes from "./constant";

const defaultState = Map({
  currentSong: {},
});

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_SONG_DETAIL:
      return state.set("currentSong", action.data);
    default:
      return state;
  }
}
