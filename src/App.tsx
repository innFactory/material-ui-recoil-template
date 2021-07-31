import { CircularProgress } from "@material-ui/core";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { RouterSwitch } from "react-typesafe-routes";
import router from "./Router";

function App() {
  return (
    <BrowserRouter>
      <React.Suspense fallback={<CircularProgress />}>
        <RouterSwitch router={router} />
      </React.Suspense>
    </BrowserRouter>
  );
}

export default App;
