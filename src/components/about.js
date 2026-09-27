import React from "react";
import Navbar from "./navbar";
import Footer from "./Footer";
import Breadcrumbs from "./Breadcrumbs";
import Seo from "../seo/Seo";
import { about as meta } from "../seo/meta";
import SITE from "../seo/site";

export default function About() {
  return (
    <>
      <Seo
        title={meta.title}
        description={meta.description}
        keywords={meta.keywords}
        path="/about"
        breadcrumb={meta.breadcrumb}
      />
      <Navbar />
      <main className="aboutus">
        <Breadcrumbs trail={meta.breadcrumb} />
        <h1>{meta.h1}</h1>
        <h2>
          Aari work, maggam work and simple Aari work blouse designs made in
          Thrissur
        </h2>
        <p>
          Handworks &amp; Embroidery by Alka is a hand work studio in Thrissur,
          Kerala, led by Alka, who has been doing Aari work, hand embroidery and
          bead work since {SITE.foundedYear}. We create custom Aari work designs,
          hand embroidered blouses, maggam work and bead work for personal
          customers and for boutiques and tailor shops.
        </p>
        <p>
          Our founder, Alka, is a designer and master of the Aari hand stitch,
          which is worked on a wooden frame with a single needle. She designs
          each pattern, scales it to the customer's blouse, and supervises the
          stitching so that the neck, sleeve and front match.
        </p>
        <p>
          Each design is made by hand using silk thread, zari, sequins, beads,
          kundan stones and mirrors. We combine traditional techniques with
          current blouse trends, so a design can be as light as a thread work
          blouse for daily wear or as heavy as a bridal Aari blouse with stone
          work.
        </p>
        <p>
          We are proud to be one of the hand work suppliers that boutiques in
          Thrissur and across Kerala depend on. We supply Aari work, maggam work
          and bead work blouses at wholesale rates, and we also stitch display
          samples for shop counters.
        </p>
        <p>
          Whether you are looking for a hand embroidered saree fall, an
          intricately designed blouse, or custom bead work for a wedding, our
          team turns your reference images into a design made for your fabric and
          your measurements.
        </p>
        <p>
          We value the art of storytelling through embroidery: every design
          should carry a story of its own, and we enjoy weaving Kerala craft
          traditions into pieces that a wearer is proud to own.
        </p>
        <h2>Where we are</h2>
        <p>
          Our studio is in {SITE.address.city}, {SITE.address.region}, India. We
          work with clients in {SITE.areaServed.join(", ")} and deliver anywhere in
          India. Visit us at the studio, or send your design on WhatsApp at{" "}
          <a href={SITE.whatsappUrl}>{SITE.phone}</a>.
        </p>
        <p>With warm regards,</p>
        <p>
          {SITE.founder}
          <br />
          {SITE.name}
        </p>
      </main>
      <Footer />
    </>
  );
}
