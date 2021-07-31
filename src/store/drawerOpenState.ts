import { atom } from "recoil";

const drawerOpenState = atom({
  key: "drawerOpenState",
  default: false,
});

export default drawerOpenState;
