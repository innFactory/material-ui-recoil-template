import React from "react";
import ReactDOM from "react-dom";
import { RecoilRoot } from "recoil";
import Root from "./Root";
import ThemeWrapper from "./Theme";

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <ThemeWrapper>
        <Root />
      </ThemeWrapper>
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById("root")
);
