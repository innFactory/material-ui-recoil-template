import { CircularProgress } from "@material-ui/core";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { RouterSwitch } from "react-typesafe-routes";
import FullSizeContainer from "./components/layout/FullSizeContainer";
import router from "./Router";

function Root() {
  return (
    <BrowserRouter>
      <FullSizeContainer>
        <React.Suspense fallback={<CircularProgress />}>
          <RouterSwitch router={router} />
        </React.Suspense>
      </FullSizeContainer>
    </BrowserRouter>
  );
}

export default Root;
