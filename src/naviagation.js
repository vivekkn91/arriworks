import React from "react";
import { Routes, Route } from "react-router-dom";
import App from "./App";
import Designs from "./components/products";
import Custom from "./components/custom";
import Product from "./components/productpage";
import About from "./components/about";
import Services from "./components/services";
import Contact from "./components/contact";
import NotFound from "./components/NotFound";

function Navigator() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/services" element={<Services />} />
      <Route path="/services/:work" element={<Custom />} />
      <Route path="/custom/:work" element={<Custom />} />
      <Route path="/designs" element={<Designs />} />
      <Route path="/designs/:code" element={<Product />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default Navigator;
