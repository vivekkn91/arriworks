import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import TawkMessengerReact from "@tawk.to/tawk-messenger-react";
import "./index.css";
import App from "./App";

import reportWebVitals from "./reportWebVitals";
import Naviagtion from "./naviagation";
// import TawkMessengerReact from "@tawk.to/tawk-messenger-react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <TawkMessengerReact
        propertyId="647870f574285f0ec46eee0d"
        widgetId="1h1r7ig49"
      /> */}
      <Naviagtion />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
