import { Map } from "immutable";
import * as actionTypes from "./constant";

const defaultState = Map({
  currentSong: {},
  currentSongIndex: 0,
  playList: [],
});

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_SONG_DETAIL:
      return state.set("currentSong", action.data);
    case actionTypes.CHANGE_CURRENT_SONG_INDEX:
      return state.set("currentSongIndex", action.data)
    case actionTypes.CHANGE_PLAY_LIST:
      return state.set("playList", action.data)
    default:
      return state;
  }
}
