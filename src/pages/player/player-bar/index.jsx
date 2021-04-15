import React, { memo, useCallback, useEffect, useRef, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import { Slider } from "antd";
import { Control, Operator, PlayBarWrapper, PlayInfo } from "./styled";
import { getSongDetailAction } from "../store/actionCreator";
import { formatDate, getImageSize, playMusic } from "@/utils/format";

const PlayerBar = () => {
  // 获取歌曲详情
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSongDetailAction(347231));
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

  // 歌曲播放
  const audioRef = useRef();
  const [currentTime, setCurrentTime] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isChange, setIsChange] = useState(false);
  const [isPlay, setIsPlay] = useState(false);
  const playCountTime = formatDate(currentTime, "mm:ss");
  const allTime = formatDate(duration, "mm:ss");

  const handlePlayMusic = useCallback(() => {
    audioRef.current.src = playMusic(currentSong.id);
    console.log(playMusic(currentSong.id));
    isPlay ? audioRef.current.pause() : audioRef.current.play();
    setIsPlay(!isPlay);
  }, [currentSong.id, isPlay]);

  const timeUpdate = (e) => {
    if (!isChange) {
      setCurrentTime(e.target.currentTime * 1000);
      setProgress((currentTime / duration) * 100);
    }
  };

  const sliderChange = useCallback(
    (value) => {
      setCurrentTime((value / 100) * duration);
      setIsChange(true);
      setProgress(value);
    },
    [duration]
  );

  const sliderAfterChange = useCallback(
    (value) => {
      const time = ((value / 100) * duration) / 1000;
      audioRef.current.currentTime = time;
      setCurrentTime(time * 1000);
      setIsChange(false);

      if (!isPlay) {
        handlePlayMusic();
      }
    },
    [duration, handlePlayMusic, isPlay]
  );

  return (
    <PlayBarWrapper className="sprite_player">
      <div className="content wrap-v2">
        <Control isPlaying={isPlay}>
          <button className="sprite_player prev" />
          <button
            className="sprite_player play"
            onClick={() => handlePlayMusic()}
          />
          <button className="sprite_player next" />
        </Control>
        <PlayInfo>
          <div className="image">
            <NavLink to="/discover/Player">
              <img
                src={getImageSize(artist.picUrl, 35)}
                alt={currentSong.name}
              />
            </NavLink>
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
              <Slider
                defaultValue={30}
                value={progress}
                tooltipVisible={false}
                onChange={sliderChange}
                onAfterChange={sliderAfterChange}
              />
              <div className="time">
                <span className="now-time">{playCountTime}</span>
                <span className="divider">/</span>
                <span className="duration">{allTime}</span>
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
      <audio ref={audioRef} onTimeUpdate={(e) => timeUpdate(e)} />
    </PlayBarWrapper>
  );
};

export default memo(PlayerBar);
