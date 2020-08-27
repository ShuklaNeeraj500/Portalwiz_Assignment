import React from "react";
import ReactDom from "react-dom";
import App from "./App";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import "../node_modules/jquery"
import "../src/index.css"
import "../node_modules/popper.js/dist/popper"


ReactDom.render(
  <App />
  ,document.getElementById("root")
)