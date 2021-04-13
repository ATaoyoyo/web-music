import React, { memo } from "react";

import { PlayerWrapper, PlayerLeft, PlayerRight } from "./styled";

const Player = (props) => {
  return (
    <PlayerWrapper>
      <div className="content wrap-v2">
        <PlayerLeft>
          <h2>player-info</h2>
          <h2>song-content</h2>
        </PlayerLeft>
        <PlayerRight>
          <h2>simi-playlist</h2>
          <h2>simi-songs</h2>
          <h2>download</h2>
        </PlayerRight>
      </div>
    </PlayerWrapper>
  );
};

export default memo(Player);
