import { OptionsRouter } from "react-typesafe-routes";
import FavoritesPage from "./pages/FavoritesPage";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";

const routeOptions = {
  showAppBar: true,
  showDrawer: true,
};

const router = OptionsRouter(routeOptions, (route) => ({
  home: route("", {
    component: HomePage,
  }),
  favorites: route("favorites", {
    component: FavoritesPage,
  }),
  fallback: route("*", {
    component: NotFoundPage,
    options: {
      showAppBar: false,
      showDrawer: false,
    },
  }),
}));

export default router;
