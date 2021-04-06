import React, { memo, useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { getTopBannersAction } from "./store/actionCreators";

const ATRecommend = () => {
  const dispatch = useDispatch();
  const { topBanner } = useSelector(
    (state) => ({
      topBanner: state.getIn(["recommend", "topBanner"]),
    }),
    shallowEqual
  );

  useEffect(() => {
    dispatch(getTopBannersAction());
  }, [dispatch]);

  return <div>recommend:{topBanner.length}</div>;
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
