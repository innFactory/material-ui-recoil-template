import { Box, Typography } from "@material-ui/core";
import AppFrame from "components/app/AppFrame";
import { CurrentJokeContainer } from "components/joke/CurrentJokeContainer";

function HomePage() {
  return (
    <AppFrame>
      <Typography variant="h1">Home</Typography>
      <Box
        sx={{
          width: "100%",
          height: "30vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CurrentJokeContainer />
      </Box>
    </AppFrame>
  );
}

export default HomePage;
