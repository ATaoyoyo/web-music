import request from "./request";

// 顶部banner
export function getTopBanners() {
  return request({ url: "/banner" });
}

// 推荐列表
export function getRecommend(limit = 30) {
  return request({
    url: "/personalized",
    params: {
      limit,
    },
  });
}

// 新碟上架
export function getNewAlbum(limit = 30) {
  return request({
    url: "/album/new",
    params: {
      limit,
    },
  });
}

// 榜单
export function getRanking() {
  return request({
    url: "/toplist",
  });
}

// 榜单歌曲
export function getRankingSongs(id) {
  return request({
    url: "/playlist/detail",
    params: { id },
  });
}
