import React from "react";
import { Routes, Route } from "react-router-dom";
import App from "./App";
import Designs from "./components/products";
import Custom from "./components/custom";
import Product from "./components/productpage";
import About from "./components/about";

function Navigator() {
  return (
    <Routes>
      <Route path="/" element={<App />} />{" "}
      <Route path="/designs" element={<Designs />} />
      <Route path="/custom/:work" element={<Custom />} />
      <Route path="/product" element={<Product />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default Navigator;
