import React, { memo } from "react";
import { renderRoutes } from "react-router-config";
import { HashRouter } from "react-router-dom";

import routes from "./router";

import ATHeader from "./components/Header";
import ATFooter from "./components/Footer";

const App = memo(function () {
  return (
    <HashRouter>
      <ATHeader />
      {renderRoutes(routes)}
      <ATFooter />
    </HashRouter>
  );
});

export default App;
