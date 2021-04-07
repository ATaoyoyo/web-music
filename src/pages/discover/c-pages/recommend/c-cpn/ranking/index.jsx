import React, { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import ThemeHeaderRcm from "@/components/Theme-header-rcm";
import { RankingWrapper } from "./styled";

import { getRankingSongsAction } from "../../store/actionCreators";
import { SOAR_ID, ORIGINAL_ID, NEW_SONGS_ID } from "@/common/constant";
import TopRanking from "../../../../../../components/TopRanking";

const Ranking = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRankingSongsAction(SOAR_ID, "up"));
    dispatch(getRankingSongsAction(ORIGINAL_ID, "original"));
    dispatch(getRankingSongsAction(NEW_SONGS_ID, "new"));
  }, [dispatch]);

  const { upRanking, newRanking, originalRanking } = useSelector(
    (state) => ({
      upRanking: state.getIn(["recommend", "upRankingSongs"]),
      newRanking: state.getIn(["recommend", "newRankingSongs"]),
      originalRanking: state.getIn(["recommend", "originalRankingSongs"]),
    }),
    shallowEqual
  );

  return (
    <RankingWrapper>
      <ThemeHeaderRcm title="榜单" />
      <div className="tops">
        <TopRanking info={upRanking} />
        <TopRanking info={newRanking} />
        <TopRanking info={originalRanking} />
      </div>
    </RankingWrapper>
  );
};

export default memo(Ranking);
