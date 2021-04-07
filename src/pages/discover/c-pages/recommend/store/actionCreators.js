import * as actionType from "./constants";
import { getTopBanners, getRecommend, getNewAlbum } from "@/servies/recommend";
import { getRanking, getRankingSongs } from "@/servies/recommend";

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

const changeUpRanking = (res) => ({
  type: actionType.UP_RANKING_SONGS,
  data: res.playlist,
});

const changeNewRanking = (res) => ({
  type: actionType.NEW_RANKING_SONGS,
  data: res.playlist,
});

const changeOriginalRanking = (res) => ({
  type: actionType.ORIGINAL_RANKING_SONGS,
  data: res.playlist,
});

// 顶部banner
export const getTopBannersAction = () => {
  return (dispatch) => {
    getTopBanners().then((res) => {
      dispatch(changeTopBannersAction(res));
    });
  };
};

// 热门推荐
export const getHotRecommendAction = (limit) => {
  return (dispatch) => {
    getRecommend(limit).then((res) => {
      dispatch(changeHotRecommendAction(res));
    });
  };
};

// 新碟上架
export const getNewAlbumAction = (limit) => {
  return (dispatch) => {
    getNewAlbum(limit).then((res) => {
      dispatch(changeNewAlbum(res));
    });
  };
};

// 所有榜单
export const getRankingAction = () => {
  return (dispatch) => {
    getRanking().then((res) => {
      console.log(res);
    });
  };
};

// 榜单歌曲
export const getRankingSongsAction = (id, type) => {
  return (dispatch) => {
    getRankingSongs(id).then((res) => {
      switch (type) {
        case "up":
          dispatch(changeUpRanking(res));
          break;
        case "new":
          dispatch(changeNewRanking(res));
          break;
        case "original":
          dispatch(changeOriginalRanking(res));
          break;
        default:
          break;
      }
    });
  };
};
