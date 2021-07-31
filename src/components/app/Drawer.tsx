import {
  Divider,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import MuiDrawer from "@material-ui/core/Drawer";
import HomeIcon from "@material-ui/icons/Home";
import FavoritesIcon from "@material-ui/icons/Star";
import React from "react";
import { useHistory } from "react-router-dom";
import { useRoutesActive } from "react-typesafe-routes";
import { useRecoilState } from "recoil";
import router from "Router";
import drawerOpenState from "store/drawerOpenState";

const Drawer: React.FC = () => {
  const [open, setOpen] = useRecoilState(drawerOpenState);
  const history = useHistory();
  const { home, favorites } = useRoutesActive({
    home: router.home,
    favorites: router.favorites,
  });

  const handleClose = () => setOpen(false);

  const onHomeClick = () => {
    history.push(router.home().$);
    setOpen(false);
  };

  const onFavoritesClick = () => {
    history.push(router.favorites().$);
    setOpen(false);
  };

  return (
    <MuiDrawer anchor="left" open={open} onClose={handleClose}>
      <List>
        <ListItemButton onClick={onHomeClick} selected={home}>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary={"Home"} />
        </ListItemButton>
        <Divider />
        <ListItemButton onClick={onFavoritesClick} selected={favorites}>
          <ListItemIcon>
            <FavoritesIcon />
          </ListItemIcon>
          <ListItemText primary={"Favoriten"} />
        </ListItemButton>
      </List>
    </MuiDrawer>
  );
};

export default Drawer;
