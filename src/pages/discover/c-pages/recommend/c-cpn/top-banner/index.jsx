import React, { memo, useEffect, useRef, useState, useCallback } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { getTopBannersAction } from "../../store/actionCreators";

import { Carousel } from "antd";
import {
  BannerWrapper,
  BannerLeft,
  BannerRight,
  BannerControl,
} from "./styled";

const TopBanner = () => {
  // 轮播index
  const [currentIndex, setCurrentIndex] = useState(0);

  // 获取banner数据
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTopBannersAction());
  }, [dispatch]);
  const { topBanner } = useSelector(
    (state) => ({
      topBanner: state.getIn(["recommend", "topBanner"]),
    }),
    shallowEqual
  );

  // 轮播ref
  const bannerRef = useRef();

  // 轮播背景
  const bgImage =
    topBanner[currentIndex] &&
    topBanner[currentIndex].imageUrl + "?imageView&blur=40x20";

  const beforeChange = useCallback((form, to) => {
    setCurrentIndex(to);
  }, []);

  return (
    <div>
      <BannerWrapper bgImage={bgImage}>
        <div className="banner wrap-v2">
          <BannerLeft>
            <Carousel
              effect="fade"
              autoplay
              ref={bannerRef}
              beforeChange={beforeChange}
            >
              {topBanner.map((item) => {
                return (
                  <div className="banner-item" key={item.imageUrl}>
                    <img
                      className="image"
                      src={item.imageUrl}
                      alt={item.typeTitle}
                    />
                  </div>
                );
              })}
            </Carousel>
          </BannerLeft>
          <BannerRight />
          <BannerControl>
            <button
              className="btn left"
              onClick={() => bannerRef.current.prev()}
            />
            <button
              className="btn right"
              onClick={() => bannerRef.current.next()}
            />
          </BannerControl>
        </div>
      </BannerWrapper>
    </div>
  );
};

export default memo(TopBanner);
