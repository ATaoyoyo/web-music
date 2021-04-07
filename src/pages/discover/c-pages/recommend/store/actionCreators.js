import * as actionType from "./constants";
import { getTopBanners, getRecommend, getNewAlbum } from "@/servies/recommend";

const changeTopBannersAction = (res) => ({
  type: actionType.CHANGE_TOP_BANNER,
  data: res.banners,
});

const changeHotRecommendAction = (res) => ({
  type: actionType.HOT_RECOMMEND,
  data: res.result,
});

const changeNewAlbum = (res) => ({
  type: actionType.NEW_ALBUM,
  data: res.albums,
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

export const getNewAlbumAction = (limit) => {
  return (dispatch) => {
    getNewAlbum(limit).then((res) => {
      dispatch(changeNewAlbum(res));
    });
  };
};
