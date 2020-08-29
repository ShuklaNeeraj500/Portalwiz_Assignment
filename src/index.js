import React from "react";
import ReactDom from "react-dom";
import App from "./App";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import "../node_modules/popper.js/dist/popper"
import {BrowserRouter} from "react-router-dom"
import "../node_modules/jquery"
import "../src/index.css"



ReactDom.render(
<>
<BrowserRouter>
<App />
</BrowserRouter>
  
</>
  ,document.getElementById("root")
)