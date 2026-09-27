import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./navbar";
import Footer from "./Footer";
import Breadcrumbs from "./Breadcrumbs";
import Faq from "./Faq";
import Seo from "../seo/Seo";
import { services as meta } from "../seo/meta";
import SITE from "../seo/site";

export default function Services() {
  return (
    <>
      <Seo
        title={meta.title}
        description={meta.description}
        keywords={meta.keywords}
        path="/services"
        faqs={meta.faqs}
        breadcrumb={meta.breadcrumb}
      />
      <Navbar />
      <main>
        <Breadcrumbs trail={meta.breadcrumb} />
        <h1 className="h1x">{meta.h1}</h1>
        <p className="text-center designs-intro">
          We are a full bridal and hand embroidery atelier based in Thriprayar, Thrissur, Kerala. 
          We offer bespoke Aari work, maggam embroidery, professional bridal HD makeup, and organic bridal mehandi 
          for brides, boutiques, and tailor shops across Kerala.
        </p>

        <section className="service-list">
          {SITE.services.map((service) => (
            <article className="service-card" key={service.slug}>
              <h2>
                <Link to={`/custom/${service.slug}`}>{service.name}</Link>
              </h2>
              <p className="service-tagline">{service.tagline}</p>
              <p>{service.summary}</p>
              <ul>
                {service.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
              <p className="service-price">
                <strong>{service.price}</strong> &middot; {service.turnaround}
              </p>
              <p>
                <Link to={`/custom/${service.slug}`}>
                  Read more about {service.shortName}
                </Link>
              </p>
            </article>
          ))}
        </section>

        <section className="content">
          <h2>Other hand embroidery work we do</h2>
          <p>
            Along with the services above we also take{" "}
            {SITE.extraServices.join(", ").toLowerCase()} orders in Thrissur.
            Send us a photo of the work you need and we will tell you the rate
            and the time.
          </p>
          <h2>How to order</h2>
          <ol>
            <li>Send your blouse measurements, fabric and a reference photo on WhatsApp.</li>
            <li>We redraw the design for your blouse and share the final design for approval.</li>
            <li>You confirm the rate, we start the hand work.</li>
            <li>We share progress photos and deliver the finished blouse.</li>
          </ol>
        </section>

        <Faq items={meta.faqs} />
      </main>
      <Footer />
    </>
  );
}
