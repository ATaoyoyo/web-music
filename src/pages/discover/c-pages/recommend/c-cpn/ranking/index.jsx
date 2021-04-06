import React, { memo } from "react";
import ThemeHeaderRcm from "@/components/Theme-header-rcm";

const Ranking = (props) => {
  return (
    <div>
      <ThemeHeaderRcm title="榜单" />
    </div>
  );
};

export default memo(Ranking);
