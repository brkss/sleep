import { IRoute } from "../types/Route";
import { Home, SleepTime } from "../../pages";

export const routes: IRoute[] = [
  {
    name: "Home",
    path: "/",
    exact: true,
    component: Home,
  },
  {
    name: "Sleep",
    path: "/sleep",
    exact: true,
    component: SleepTime,
  },
];
