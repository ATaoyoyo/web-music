import React, { memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { shallowEqual } from "react-redux/lib/alternate-renderers";

import { HotRecommendWrapper } from "./styled";
import ThemeHeaderRcm from "@/components/Theme-header-rcm";

import { HOT_RECOMMEND_LIMIT } from "@/common/constant";
import { getHotRecommendAction } from "../../store/actionCreators";
import SongsCover from "../../../../../../components/SongsCover";

const HotRecommend = (props) => {
  // 获取推荐列表
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getHotRecommendAction(HOT_RECOMMEND_LIMIT));
  }, [dispatch]);

  const { recommend } = useSelector(
    (state) => ({
      recommend: state.getIn(["recommend", "recommend"]),
    }),
    shallowEqual
  );

  return (
    <HotRecommendWrapper>
      <ThemeHeaderRcm
        title="热门推荐"
        keywords={["华语", "流行", "摇滚", "民谣", "电子"]}
      />
      <div className="recommend-list">
        {recommend.map((item) => (
          <SongsCover key={item.id} info={item} />
        ))}
      </div>
    </HotRecommendWrapper>
  );
};

export default memo(HotRecommend);
