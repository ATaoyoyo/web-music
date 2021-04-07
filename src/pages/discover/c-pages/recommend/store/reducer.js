import { Map } from "immutable";

import * as actionTypes from "./constants";

const defaultStatus = Map({
  topBanner: [],
  recommend: [],
  newAlbum: [],
});

function reducer(state = defaultStatus, action) {
  switch (action.type) {
    case actionTypes.CHANGE_TOP_BANNER:
      return state.set("topBanner", action.data);
    case actionTypes.HOT_RECOMMEND:
      return state.set("recommend", action.data);
    case actionTypes.NEW_ALBUM:
      return state.set("newAlbum", action.data);
    default:
      return defaultStatus;
  }
}

export default reducer;
