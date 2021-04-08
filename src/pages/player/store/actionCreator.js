import * as actionType from "./constant";
import { getSongDetail } from "../../../servies/player";

const changeSongDetailAction = (res) => ({
  type: actionType.CHANGE_SONG_DETAIL,
  data: res.songs[0],
});

export function getSongDetailAction(ids) {
  return (dispatch) => {
    getSongDetail(ids).then((res) => {
      dispatch(changeSongDetailAction(res));
    });
  };
}
