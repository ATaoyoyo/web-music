import React, { memo } from "react";

import {
  Content,
  RecommendLeft,
  RecommendRight,
  RecommendWrapper,
} from "./styled";

import TopBanner from "./c-cpn/top-banner";
import HotRecommend from "./c-cpn/hot-recommend";
import NewAlbum from "./c-cpn/new-album";
import Ranking from "./c-cpn/ranking";

const ATRecommend = () => {
  return (
    <RecommendWrapper>
      <TopBanner />
      <Content className="wrap-v2">
        <RecommendLeft>
          <HotRecommend />
          <NewAlbum />
          <Ranking />
        </RecommendLeft>
        <RecommendRight></RecommendRight>
      </Content>
    </RecommendWrapper>
  );
};

export default memo(ATRecommend);

// const mapStateToProps = (state) => ({
//   topBanner: state.recommend.topBanner,
// });
//
// const mapDispatchToProps = (dispatch) => ({
//   getBanners: () => {
//     dispatch(getTopBannersAction());
//   },
// });
//
// export default connect(mapStateToProps, mapDispatchToProps)(memo(ATRecommend));
