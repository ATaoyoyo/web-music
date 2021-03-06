import React, { memo } from "react";
import { AlbumWrapper } from "./styled";

import { getImageSize } from "@/utils/format";

const AlbumCover = (props) => {
  const { info, size = 130, width = 153, bgp = "-845px" } = props;
  return (
    <AlbumWrapper size={size} width={width} bgp={bgp}>
      <div className="album-image">
        <img src={getImageSize(info.picUrl, size)} alt="" />
        <a href="/todo" className="cover image_cover">Cover</a>
      </div>
      <div className="album-info">
        <div className="name text-nowrap">{info.name}</div>
        <div className="artist text-nowrap">{info.artist.name}</div>
      </div>
    </AlbumWrapper>
  );
};

export default memo(AlbumCover);
