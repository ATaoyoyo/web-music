import { Map } from "immutable";

import * as actionTypes from "./constants";

const defaultStatus = Map({
  topBanner: [],
  recommend: [],
  newAlbum: [],
  upRankingSongs: {},
  newRankingSongs: {},
  originalRankingSongs: {},
});

function reducer(state = defaultStatus, action) {
  switch (action.type) {
    case actionTypes.CHANGE_TOP_BANNER:
      return state.set("topBanner", action.data);
    case actionTypes.HOT_RECOMMEND:
      return state.set("recommend", action.data);
    case actionTypes.NEW_ALBUM:
      return state.set("newAlbum", action.data);
    case actionTypes.UP_RANKING_SONGS:
      return state.set("upRankingSongs", action.data);
    case actionTypes.NEW_RANKING_SONGS:
      return state.set("newRankingSongs", action.data);
    case actionTypes.ORIGINAL_RANKING_SONGS:
      return state.set("originalRankingSongs", action.data);
    default:
      return state;
  }
}

export default reducer;
