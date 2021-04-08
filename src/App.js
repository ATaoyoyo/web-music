import React, { memo } from "react";
import { renderRoutes } from "react-router-config";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";

import routes from "./router";
import store from "./store";

import ATHeader from "./components/Header";
import ATFooter from "./components/Footer";
import PlayerBar from "./pages/player/player-bar";

const App = memo(function () {
  return (
    <Provider store={store}>
      <HashRouter>
        <ATHeader />
        {renderRoutes(routes)}
        <ATFooter />
        <PlayerBar />
      </HashRouter>
    </Provider>
  );
});

export default App;
