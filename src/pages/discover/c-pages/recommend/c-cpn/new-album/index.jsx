import React, { memo } from "react";
import ThemeHeaderRcm from "@/components/Theme-header-rcm";

const NewAlbum = (props) => {
  return (
    <div>
      <ThemeHeaderRcm title="新碟上架" />
    </div>
  );
};

export default memo(NewAlbum);
