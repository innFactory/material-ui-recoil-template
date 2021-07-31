// prettier-ignore
import { Box, Button, Tooltip } from '@material-ui/core';
import ReloadIcon from "@material-ui/icons/Refresh";
import StarIcon from "@material-ui/icons/Star";
import * as React from "react";
import { useRefreshCurrentJoke } from "store/currentJoke";

interface Props {}

export function CurrentJokeControls(props: Props) {
  const {} = props;
  const refreshJoke = useRefreshCurrentJoke();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row-reverse",
      }}
    >
      <Button
        variant="contained"
        startIcon={<ReloadIcon />}
        onClick={refreshJoke}
      >
        New Joke
      </Button>

      <Box marginRight={2}>
        <Tooltip title="Here you can add this joke to your favorites. This feature will come later.">
          <Button variant="outlined" startIcon={<StarIcon />}>
            Favorite
          </Button>
        </Tooltip>
      </Box>
    </Box>
  );
}
