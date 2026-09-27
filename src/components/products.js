import React from "react";
import Navbar from "./navbar";
import Footer from "./Footer";
import Breadcrumbs from "./Breadcrumbs";
import Cards from "./cards";
import Seo from "../seo/Seo";
import { designs } from "../seo/meta";
import SITE from "../seo/site";

export default function Designs() {
  return (
    <>
      <Seo
        title={designs.title}
        description={designs.description}
        keywords={designs.keywords}
        path="/designs"
        itemList={designs.itemList}
        breadcrumb={designs.breadcrumb}
      />
      <Navbar />
      <main>
        <Breadcrumbs trail={designs.breadcrumb} />
        <h1 className="h1x">{designs.h1}</h1>
        <p className="text-center designs-intro">
          Every design below is hand stitched in our Thrissur studio, Kerala. Tap
          a design to see details and to order on WhatsApp at {SITE.phone}. We
          take Aari work, maggam work, hand work, bead work and thread work
          orders for boutiques, tailor shops and personal blouses.
        </p>
        <Cards />
      </main>
      <Footer />
    </>
  );
}
