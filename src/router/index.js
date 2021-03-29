import React from "react";
import { Redirect } from "react-router-dom";
import ATDiscover from "../pages/discover";
import ATMine from "../pages/mine";
import ATFriend from "../pages/friend";
import ATRecommend from "../pages/discover/c-pages/recommend";
import ATRanking from "../pages/discover/c-pages/ranking";
import ATSongs from "../pages/discover/c-pages/songs";
import ARDjRadio from "../pages/discover/c-pages/djradio";
import ATAlbum from "../pages/discover/c-pages/album";
import ATArtist from "../pages/discover/c-pages/artist";

const routes = [
  {
    path: "/",
    exact: true,
    render: () => <Redirect to="/discover" />,
  },
  {
    path: "/discover",
    component: ATDiscover,
    // render: () => <Redirect to="/discover/recommend" />,
    routes: [
      {
        path: "/discover",
        exact: true,
        render: () => <Redirect to="/discover/recommend" />,
      },
      {
        path: "/discover/recommend",
        component: ATRecommend,
      },
      {
        path: "/discover/ranking",
        component: ATRanking,
      },
      {
        path: "/discover/songs",
        component: ATSongs,
      },
      {
        path: "/discover/djradio",
        component: ARDjRadio,
      },
      {
        path: "/discover/album",
        component: ATAlbum,
      },
      {
        path: "/discover/artist",
        component: ATArtist,
      },
    ],
  },
  {
    path: "/mine",
    component: ATMine,
  },
  {
    path: "/friend",
    component: ATFriend,
  },
];

export default routes;
