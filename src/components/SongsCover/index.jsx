import React, { memo } from "react";
import { SongsCoverWrapper } from "./styled";

import { getCount, getImageSize } from "@/utils/format";

const SongsCover = (props) => {
  const { info } = props;
  return (
    <SongsCoverWrapper>
      <div className="cover-top">
        <img src={getImageSize(info.picUrl, 140)} alt="" />
        <div className="cover sprite_cover">
          <div className="info sprite_cover">
            <span>
              <i className="sprite_icon erji" />
              {getCount(info.playCount)}
            </span>
            <i className="sprite_icon play" />
          </div>
        </div>
      </div>
      <div className="cover-bottom text-nowrap">{info.name}</div>
      <div className="cover-source text-nowrap">
        by {info.copywriter || info.creator.nickname}
      </div>
    </SongsCoverWrapper>
  );
};

export default memo(SongsCover);
