import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./navbar";
import Footer from "./Footer";
import Seo from "../seo/Seo";
import SITE from "../seo/site";

export default function NotFound() {
  return (
    <>
      <Seo
        title={`Page not found | ${SITE.name}`}
        description="The page you are looking for is not available. Browse Aari work, hand work and maggam work blouse designs from our Thrissur, Kerala studio."
        noindex
        breadcrumb={[{ name: "Home", path: "/" }]}
      />
      <Navbar />
      <main className="custum">
        <h1>Page not found</h1>
        <p>
          The page you are looking for does not exist. You can browse our{" "}
          <Link to="/designs">Aari work and hand work designs</Link>, see our{" "}
          <Link to="/services">services and prices</Link>, or{" "}
          <Link to="/contact">contact our Thrissur studio</Link> on WhatsApp at{" "}
          {SITE.phone}.
        </p>
      </main>
      <Footer />
    </>
  );
}
