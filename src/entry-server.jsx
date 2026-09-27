import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import Navigator from "./naviagation";

export function render(url) {
  return renderToString(
    <StaticRouter location={url}>
      <Navigator />
    </StaticRouter>
  );
}
