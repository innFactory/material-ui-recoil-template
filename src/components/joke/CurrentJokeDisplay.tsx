import { Box, CircularProgress, Paper, Typography } from "@material-ui/core";
import * as React from "react";
import { useRecoilValue } from "recoil";
import { currentJokeState } from "store/currentJoke";

interface Props {}

export function CurrentJokeDisplay(props: Props) {
  const {} = props;
  const currentJoke = useRecoilValue(currentJokeState);

  return (
    <Paper
      sx={{
        width: 700,
      }}
    >
      <React.Suspense
        fallback={
          <Box
            width="100%"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <CircularProgress />
          </Box>
        }
      >
        <Box padding={2}>
          <Typography>{currentJoke.value}</Typography>
        </Box>
      </React.Suspense>
    </Paper>
  );
}
