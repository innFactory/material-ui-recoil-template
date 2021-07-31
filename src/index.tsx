import React from "react";
import ReactDOM from "react-dom";
import { RecoilRoot } from "recoil";
import App from "./App";
import ThemeWrapper from "./Theme";

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <ThemeWrapper>
        <App />
      </ThemeWrapper>
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById("root")
);
