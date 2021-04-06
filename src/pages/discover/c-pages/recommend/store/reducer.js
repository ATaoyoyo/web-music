import { Map } from "immutable";

import * as actionTypes from "./constants";

const defaultStatus = Map({
  topBanner: [],
});

function reducer(state = defaultStatus, action) {
  switch (action.type) {
    case actionTypes.CHANGE_TOP_BANNER:
      return state.set("topBanner", action.data);

    default:
      return defaultStatus;
  }
}

export default reducer;
