// prettier-ignore
import { Box } from '@material-ui/core';
import * as React from "react";
import { CurrentJokeControls } from "./CurrentJokeControls";
import { CurrentJokeDisplay } from "./CurrentJokeDisplay";

interface Props {}

export function CurrentJokeContainer(props: Props) {
  const {} = props;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CurrentJokeDisplay />
      <Box marginTop={1}>
        <CurrentJokeControls />
      </Box>
    </Box>
  );
}
