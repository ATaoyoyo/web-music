import React, { memo, useEffect, useRef } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Carousel } from "antd";

import { getNewAlbumAction } from "../../store/actionCreators";
import ThemeHeaderRcm from "@/components/Theme-header-rcm";
import { AlbumWrapper } from "./styled";
import AlbumCover from "../../../../../../components/AlbumCover";

const NewAlbum = () => {
  // 请求新碟上架数据
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getNewAlbumAction(10));
  }, [dispatch]);
  const { newAlbum } = useSelector(
    (state) => ({
      newAlbum: state.getIn(["recommend", "newAlbum"]),
    }),
    shallowEqual
  );

  // 轮播实例
  const albumRef = useRef();

  return (
    <AlbumWrapper>
      <ThemeHeaderRcm title="新碟上架" />
      <div className="content">
        <button
          className="arrow arrow-left sprite_02"
          onClick={() => albumRef.current.prev()}
        />
        <div className="album">
          <Carousel ref={albumRef} dots={false}>
            {[0, 1].map((item) => {
              return (
                <div className="page" key={item}>
                  {newAlbum.slice(item * 5, (item + 1) * 5).map((album) => {
                    return (
                      <AlbumCover
                        key={album.id}
                        info={album}
                        size={100}
                        width={118}
                        bgp="-570px"
                      />
                    );
                  })}
                </div>
              );
            })}
          </Carousel>
        </div>
        <button
          className="arrow arrow-right sprite_02"
          onClick={() => albumRef.current.next()}
        />
      </div>
    </AlbumWrapper>
  );
};

export default memo(NewAlbum);
