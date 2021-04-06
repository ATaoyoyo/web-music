import * as actionType from "./constants";
import { getTopBanners, getRecommend } from "../../../../../servies/recommend";

const changeTopBannersAction = (res) => ({
  type: actionType.CHANGE_TOP_BANNER,
  data: res.banners,
});

const changeHotRecommendAction = (res) => ({
  type: actionType.HOT_RECOMMEND,
  data: res.result,
});

export const getTopBannersAction = () => {
  return (dispatch) => {
    getTopBanners().then((res) => {
      dispatch(changeTopBannersAction(res));
    });
  };
};

export const getHotRecommendAction = (limit) => {
  return (dispatch) => {
    getRecommend(limit).then((res) => {
      dispatch(changeHotRecommendAction(res));
    });
  };
};
