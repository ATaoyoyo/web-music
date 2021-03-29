import React, { memo } from "react";
import { DiscoverWrapper, TopMenu } from "./styled";

import { discoverMenu } from "@/common/local-data";
import { NavLink } from "react-router-dom";
import { renderRoutes } from "react-router-config";

const ATDiscover = memo((props) => {
  const { route } = props;

  return (
    <DiscoverWrapper>
      <div className="top">
        <TopMenu className="wrap-v1">
          {discoverMenu.map((item) => {
            return (
              <div className="item" key={item.title}>
                <NavLink to={item.link}>{item.title}</NavLink>
              </div>
            );
          })}
        </TopMenu>
      </div>
      {renderRoutes(route.routes)}
    </DiscoverWrapper>
  );
});

export default ATDiscover;
