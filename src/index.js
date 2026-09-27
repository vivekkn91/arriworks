import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Naviagtion from "./naviagation";
import "./accests/css/content.css";

document.body.className = "main-layout";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Naviagtion />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
