import { Theme } from "@material-ui/core";
import Fab from "@material-ui/core/Fab";
import useTheme from "@material-ui/core/styles/useTheme";
import DarkModeIcon from "@material-ui/icons/DarkMode";
import LightModeIcon from "@material-ui/icons/LightMode";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import { useRecoilState } from "recoil";
import themeState, { ThemeMode } from "../../store/themeState";
import AppBar from "./AppBar";
import Drawer from "./Drawer";

export interface AppFrameProps {
  children: React.ReactNode;
}

const AppFrame: React.FC<AppFrameProps> = ({ children }) => {
  const theme = useTheme();
  const classes = useStyles(theme);

  const [themeMode, setThemeMode] = useRecoilState(themeState);
  const handleThemeChange = () =>
    setThemeMode(
      themeMode === ThemeMode.DARK ? ThemeMode.LIGHT : ThemeMode.DARK
    );

  return (
    <>
      <AppBar />
      <Drawer />
      <div className={classes.root}>
        {children}
        <Fab
          color="primary"
          onClick={handleThemeChange}
          style={{ position: "fixed", right: 32, bottom: 32 }}
        >
          {themeMode === ThemeMode.LIGHT ? <LightModeIcon /> : <DarkModeIcon />}
        </Fab>
      </div>
    </>
  );
};

const useStyles = makeStyles({
  root: (theme: Theme) => ({
    width: "100%",
    marginTop: 56,
    height: "calc(100% - 56px)",
    backgroundColor: theme.palette.background.default,
    overflowY: "scroll",
    [theme.breakpoints.up("sm")]: {
      height: "calc(100% - 64px)",
      marginTop: 64,
    },
  }),
});

export default AppFrame;
