import {
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import MuiDrawer from "@material-ui/core/Drawer";
import HomeIcon from "@material-ui/icons/Home";
import FavoritesIcon from "@material-ui/icons/Star";
import React from "react";
import { useRecoilState } from "recoil";
import drawerOpenState from "store/drawerOpenState";

const Drawer: React.FC = () => {
  const [open, setOpen] = useRecoilState(drawerOpenState);

  const handleClose = () => setOpen(false);

  return (
    <MuiDrawer anchor="left" open={open} onClose={handleClose}>
      <List>
        <ListItem button>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary={"Home"} />
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemIcon>
            <FavoritesIcon />
          </ListItemIcon>
          <ListItemText primary={"Favoriten"} />
        </ListItem>
      </List>
    </MuiDrawer>
  );
};

export default Drawer;
