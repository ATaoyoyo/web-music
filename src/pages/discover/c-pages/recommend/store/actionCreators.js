import * as actionType from "./constants";
import { getTopBanners } from "../../../../../servies/recommend";

const changeTopBannersAction = (res) => ({
  type: actionType.CHANGE_TOP_BANNER,
  data: res.banners,
});

export const getTopBannersAction = () => {
  return (dispatch) => {
    getTopBanners().then((res) => {
      console.log(res);
      dispatch(changeTopBannersAction(res));
    });
  };
};
