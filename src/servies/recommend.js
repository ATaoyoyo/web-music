import request from "./request";

export function getTopBanners() {
  return request({ url: "/banner" });
}

export function getRecommend(limit = 30) {
  return request({
    url: "/personalized",
    params: {
      limit,
    },
  });
}

export function getNewAlbum(limit = 30) {
  return request({
    url: "/album/new",
    params: {
      limit,
    },
  });
}
