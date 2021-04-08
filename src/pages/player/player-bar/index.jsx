import React, { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { Slider } from "antd";
import { Control, Operator, PlayBarWrapper, PlayInfo } from "./styled";
import { getSongDetailAction } from "../store/actionCreator";
import { getImageSize, formatDate } from "@/utils/format";

const PlayerBar = (props) => {
  // 获取歌曲详情
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSongDetailAction(347230));
  }, [dispatch]);
  const { currentSong } = useSelector(
    (state) => ({
      currentSong: state.getIn(["player", "currentSong"]),
    }),
    shallowEqual
  );

  // 歌曲信息处理
  const artist = (currentSong && currentSong.al) || {};
  const singerName = (currentSong.ar && currentSong.ar[0].name) || "未知歌手";
  const duration = currentSong.dt || 0;

  return (
    <PlayBarWrapper className="sprite_player">
      <div className="content wrap-v2">
        <Control>
          <button className="sprite_player prev" />
          <button className="sprite_player play" />
          <button className="sprite_player next" />
        </Control>
        <PlayInfo>
          <div className="image">
            <a href="/#">
              <img
                src={getImageSize(artist.picUrl, 35)}
                alt={currentSong.name}
              />
            </a>
          </div>
          <div className="info">
            <div className="song">
              <a href="/#" className="song-name">
                {artist.name}
              </a>
              <a href="/#" className="singer-name">
                {singerName}
              </a>
            </div>
            <div className="progress">
              <Slider defaultValue={30} />
              <div className="time">
                <span className="now-time">02:30</span>
                <span className="divider">/</span>
                <span className="duration">
                  {formatDate(duration, "mm:ss")}
                </span>
              </div>
            </div>
          </div>
        </PlayInfo>
        <Operator>
          <div className="left">
            <button className="sprite_player btn favor" />
            <button className="sprite_player btn share" />
          </div>
          <div className="right sprite_player">
            <button className="sprite_player btn volume" />
            <button className="sprite_player btn loop" />
            <button className="sprite_player btn playlist" />
          </div>
        </Operator>
      </div>
    </PlayBarWrapper>
  );
};

export default memo(PlayerBar);
