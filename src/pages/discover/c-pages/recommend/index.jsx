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
import UserLogin from "./c-cpn/user-login";
import HotAnchor from "./c-cpn/hot-anchor";
import SettleSinger from "./c-cpn/settle-singer";

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
        <RecommendRight>
          <UserLogin />
          <SettleSinger />
          <HotAnchor />
        </RecommendRight>
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
