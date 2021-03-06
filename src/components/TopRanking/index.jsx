import React, { memo } from "react";
import { TopRankingWrapper } from "./styled";

import { getImageSize } from "@/utils/format";
import { getSongDetailAction } from "@/pages/player/store";
import { useDispatch } from "react-redux";

const TopRanking = (props) => {
  const { info } = props;

  const { tracks = [] } = info;

  const dispatch = useDispatch();

  const playMusic = (item) => {
    dispatch(getSongDetailAction(item.id));
  };

  return (
    <TopRankingWrapper>
      <div className="header">
        <div className="image">
          <img src={getImageSize(info.coverImgUrl)} alt="" />
          <a href="/todo" className="image_cover">
            Ranking
          </a>
        </div>
        <div className="info">
          <a href="/todo">{info.name}</a>
          <div>
            <button className="btn play sprite_02" />
            <button className="btn favor sprite_02" />
          </div>
        </div>
      </div>
      <div className="list">
        {tracks.slice(0, 10).map((item, index) => {
          return (
            <div key={item.id} className="list-item">
              <div className="rank">{index + 1}</div>
              <div className="info">
                <span className="name text-nowrap">{item.name}</span>
                <div className="operate">
                  <button
                    className="btn play sprite_02"
                    onClick={() => playMusic(item)}
                  />
                  <button className="btn addto sprite_icon2" />
                  <button className="btn favor sprite_02" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="footer">
        <a href="/todo">查看全部&gt;</a>
      </div>
    </TopRankingWrapper>
  );
};

export default memo(TopRanking);
