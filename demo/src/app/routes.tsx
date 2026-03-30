import { createBrowserRouter } from "react-router";
import MainMenu from "./screens/MainMenu";
import CategorySelection from "./screens/CategorySelection";
import GameplayScreen from "./screens/GameplayScreen";
import SortingMode from "./screens/SortingMode";
import ProgressScreen from "./screens/ProgressScreen";
import Settings from "./screens/Settings";
import Leaderboard from "./screens/Leaderboard";
import NotFound from "./screens/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainMenu,
  },
  {
    path: "/categories",
    Component: CategorySelection,
  },
  {
    path: "/play/:category",
    Component: GameplayScreen,
  },
  {
    path: "/sorting/:category",
    Component: SortingMode,
  },
  {
    path: "/progress",
    Component: ProgressScreen,
  },
  {
    path: "/settings",
    Component: Settings,
  },
  {
    path: "/leaderboard",
    Component: Leaderboard,
  },
  {
    path: "*",
    Component: NotFound,
  },
]);