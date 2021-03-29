import * as actionTypes from "./constants";

const defaultStatus = {
  topBanner: [],
};

function reducer(state = defaultStatus, action) {
  switch (action.type) {
    case actionTypes.CHANGE_TOP_BANNER:
      return { ...state, topBanner: action.data };

    default:
      return defaultStatus;
  }
}

export default reducer;
