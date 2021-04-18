import request from "./request";

/**
 * 歌曲详情
 * @param ids
 * @returns {AxiosPromise}
 */
export function getSongDetail(ids) {
  return request({
    url: "/song/detail",
    params: { ids },
  });
}

/**
 * 歌曲播放url
 * @param id
 * @returns {AxiosPromise}
 */
export function getSongUrl(id) {
  return request({
    url: "/song/url",
    params: { id },
  });
}
