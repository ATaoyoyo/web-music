import * as actionType from "./constant";
import { getSongDetail } from "../../../servies/player";

const changeSongDetailAction = (res) => ({
  type: actionType.CHANGE_SONG_DETAIL,
  data: res,
});

const changeCurrentSongIndexAction = (res) => ({
  type: actionType.CHANGE_CURRENT_SONG_INDEX,
  data: res,
});

const changePlayListAction = (res) => ({
  type: actionType.CHANGE_PLAY_LIST,
  data: res,
});

const changeCurrentSongUrlAction = res => ({
  type: actionType.CHANGE_CURRENT_SONG_URL,
  data: res
})

// 歌曲详情
export function getSongDetailAction(ids) {
  return (dispatch, getState) => {
    // 根据id查找playList是否有当前歌曲
    const playList = getState().getIn(["player", "playList"]);
    const songIndex = playList.findIndex((song) => song.id === ids);
    if (songIndex !== -1) {
      // 找到歌曲
      dispatch(changeCurrentSongIndexAction(songIndex));
      const song = playList[songIndex];
      dispatch(changeSongDetailAction(song));
    } else {
      // 没有找到
      getSongDetail(ids).then((res) => {
        const song = res.songs && res.songs[0];
        if (song) {
          // 将最新请求到的歌曲添加到列表里
          const newPlayList = [...playList, song];
          // 更新redux的值
          dispatch(changeSongDetailAction(song));
          dispatch(changePlayListAction(newPlayList));
          dispatch(changeCurrentSongIndexAction(newPlayList.length - 1));
        }
      });
    }
  };
}

// 歌曲播放Url
export function getSongUrl(id) {
  return dispatch => {
    getSongUrl(id).then(res => {
      dispatch(changeCurrentSongUrlAction(res.data[0].url))
    })
  }
}
