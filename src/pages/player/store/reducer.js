import { Map } from "immutable";

import * as actionTypes from "./constant";

const defaultState = Map({
  currentSong: {},
  currentSongIndex: 0,
  currentSongUrl: "",
  playList: [],
  sequence: 0, // 0 循环 1 随机 2 单曲
});

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_SONG_DETAIL:
      return state.set("currentSong", action.data);

    case actionTypes.CHANGE_CURRENT_SONG_INDEX:
      return state.set("currentSongIndex", action.data);

    case actionTypes.CHANGE_PLAY_LIST:
      return state.set("playList", action.data);

    case actionTypes.CHANGE_CURRENT_SONG_URL:
      return state.set("currentSongUrl", action.data);

    case actionTypes.CHANGE_SEQUENCE:
      return state.set("sequence", action.data);

    default:
      return state;
  }
}
