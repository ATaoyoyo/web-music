import React, { memo } from "react";
import { NavLink } from "react-router-dom";
import { HeaderLeft, HeaderRight, HeaderWrapper } from "./styled";

import { headerList } from "../../common/local-data";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

export default memo(function () {
  const formatterHeaderList = (item, index) => {
    return index < 3 ? (
      <NavLink key={item.path} to={item.path} exact>
        {item.title}
        <i className="sprite_01 icon" />
      </NavLink>
    ) : (
      <a key={item.path} href={item.path}>
        {item.title}
      </a>
    );
  };

  return (
    <HeaderWrapper>
      <div className="content wrap-v1">
        <HeaderLeft>
          <a href="#/" className="logo sprite_01">
            网易云音乐
          </a>
          <div className="select-list">
            {headerList.map((item, index) => {
              return (
                <div key={item.title} className="select-item">
                  {formatterHeaderList(item, index)}
                </div>
              );
            })}
          </div>
        </HeaderLeft>
        <HeaderRight>
          <Input
            className="search"
            placeholder="音乐/视频/电台/用户"
            prefix={<SearchOutlined />}
          />
          <button className="center">创作者中心</button>
          <button className="login">登录</button>
        </HeaderRight>
      </div>
      <div className="divider" />
    </HeaderWrapper>
  );
});
