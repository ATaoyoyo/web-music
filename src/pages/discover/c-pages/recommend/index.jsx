import React, { memo } from "react";

import { RecommendWrapper } from "./styled";

import TopBanner from "./c-cpn/top-banner";

const ATRecommend = () => {
  return (
    <RecommendWrapper>
      <TopBanner />
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
