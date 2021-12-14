import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app";
import { BrowserRouter } from "react-router-dom";
import "@fortawesome/fontawesome-free/js/all.js";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Fragment>
        <App />
      </Fragment>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
