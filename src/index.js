import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { CommonRoot } from "Routes";

ReactDOM.render(
  <CommonRoot>
    <App />
  </CommonRoot>,
  document.getElementById("root")
);

reportWebVitals();
