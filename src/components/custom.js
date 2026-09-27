import React from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "./navbar";
import Footer from "./Footer";
import Breadcrumbs from "./Breadcrumbs";
import Faq from "./Faq";
import Cards from "./cards";
import Seo from "../seo/Seo";
import { getServiceMeta } from "../seo/meta";
import SITE, { serviceBySlug } from "../seo/site";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Custom() {
  const { work } = useParams();
  const service = serviceBySlug(work);

  if (!service) {
    return (
      <>
        <Seo
          title={`Hand work service not found | ${SITE.name}`}
          description="This hand work service page is not available. See all Aari work, maggam work, bead work and thread work services from our Thrissur studio."
          path={`/custom/${work}`}
          noindex
          breadcrumb={[{ name: "Home", path: "/" }]}
        />
        <Navbar />
        <main className="custum">
          <h1>Service not found</h1>
          <p>
            We could not find that service. Please see all our{" "}
            <Link to="/services">hand work and embroidery services</Link> or{" "}
            <Link to="/contact">contact us</Link>.
          </p>
        </main>
        <Footer />
      </>
    );
  }

  const meta = getServiceMeta(service);
  const whatsappText = encodeURIComponent(
    `Hello ${SITE.name}, I would like to order ${service.name} in Thrissur, Kerala. My design reference and blouse measurements are attached.`
  );

  return (
    <>
      <Seo
        title={meta.title}
        description={meta.description}
        keywords={meta.keywords}
        path={meta.path}
        faqs={service.faqs}
        service={service}
        breadcrumb={meta.breadcrumb}
      />
      <Navbar />
      <main>
        <Breadcrumbs trail={meta.breadcrumb} />
        <div className="titlepage">
          <h2>{meta.h1}</h2>
          <p className="lead">{service.tagline}</p>
        </div>

        <section className="content service-detail">
          <h2>What is {service.name}?</h2>
          <p>{service.summary}</p>
          <h2>What is included</h2>
          <ul style={{ paddingLeft: "20px", marginBottom: "24px" }}>
            {service.details.map((detail) => (
              <li key={detail} style={{ color: "var(--text-main)", marginBottom: "8px" }}>{detail}</li>
            ))}
          </ul>
          <h2>Price and delivery time</h2>
          <p>
            {service.name} in our Thrissur studio is <strong>{service.price}</strong>, and a
            typical order is finished in <strong>{service.turnaround}</strong>. Bulk orders from
            boutiques and tailor shops get a better rate per blouse, so send us
            your design list on WhatsApp for a quotation.
          </p>
          <h2>Where we work</h2>
          <p>
            We take {service.name} orders in Thrissur, Kerala and supply
            boutiques and tailor shops in {SITE.areaServed.join(", ")}. Orders
            are taken in person at our studio or over WhatsApp, and finished
            work is delivered anywhere in India.
          </p>
          <div className="buys">
            <a
              className="button"
              href={`${SITE.whatsappUrl}?text=${whatsappText}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faWhatsapp} /> Order {service.shortName} on WhatsApp
            </a>
            <a
              href={`mailto:${SITE.email}?subject=${encodeURIComponent(service.name)}`}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                color: "var(--primary)",
                fontWeight: "600",
                padding: "12px 20px",
                borderRadius: "var(--radius-full)",
                background: "var(--primary-light)",
                border: "1px solid rgba(125, 17, 40, 0.2)"
              }}
            >
              <FontAwesomeIcon icon={faEnvelope} /> Email About {service.shortName}
            </a>
          </div>
        </section>

        <section className="related">
          <h2>{service.shortName} Blouse Designs</h2>
          <Cards limit={4} />
        </section>

        <Faq items={service.faqs} heading={`${service.shortName} Questions`} />
      </main>
      <Footer />
    </>
  );
}
