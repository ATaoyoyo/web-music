import ATDiscover from "../pages/discover";
import ATMine from "../pages/mine";
import ATFriend from "../pages/friend";

const routes = [
  {
    path: "/",
    exact: true,
    component: ATDiscover,
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
