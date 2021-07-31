import MuiAppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import styled from "@material-ui/core/styles/styled";
import Toolbar from "@material-ui/core/Toolbar";
import MenuIcon from "@material-ui/icons/Menu";
import { useRecoilState } from "recoil";
import drawerOpenState from "store/drawerOpenState";

const StyledAppBar = styled(MuiAppBar)`
  background-color: ${(props) => props.theme.palette.background.paper};
  border-bottom: 1px solid ${(props) => props.theme.palette.divider};
`;

const StyledToolbar = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
`;

const AppBar = () => {
  const [isDrawerOpen, setDrawerOpen] = useRecoilState(drawerOpenState);

  const handleMenuToggle = () => setDrawerOpen(!isDrawerOpen);

  return (
    <StyledAppBar position="fixed" elevation={0}>
      <StyledToolbar>
        <IconButton
          color="primary"
          aria-label="open menu"
          onClick={handleMenuToggle}
        >
          <MenuIcon />
        </IconButton>
      </StyledToolbar>
    </StyledAppBar>
  );
};
export default AppBar;
