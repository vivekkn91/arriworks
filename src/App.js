import React from "react";
import { Link } from "react-router-dom";

import Navbar from "./components/navbar";
import Cards from "./components/cards";
import Footer from "./components/Footer";
import Faq from "./components/Faq";
import ServiceList from "./components/ServiceList";
import Seo from "./seo/Seo";
import SITE from "./seo/site";
import { home } from "./seo/meta";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

function App() {
  return (
    <>
      <Seo
        title={home.title}
        description={home.description}
        keywords={home.keywords}
        path="/"
        faqs={home.faqs}
        breadcrumb={home.breadcrumb}
      />
      <Navbar />
      <main>
        {/* Hero Banner */}
        <section className="bannersection">
          <span className="banner-badge">✨ Handcrafted in Thriprayar, Thrissur</span>
          <h1 className="bannertext h2">
            Aari Work, Bridal Makeup &amp; Mehandi Studio in Thriprayar
          </h1>
          <p className="bannertext">
            Complete bridal services in Thriprayar, Thrissur: Bespoke Aari &amp; Maggam embroidery, 
            professional HD Bridal Makeup, customized bridal mehandi, zardoshi, and designer blouses 
            for brides, boutiques, and tailor shops across Kerala.
          </p>
          <div className="hero-actions">
            <a
              href={SITE.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-hero-primary"
            >
              <FontAwesomeIcon icon={faWhatsapp} /> Chat on WhatsApp
            </a>
            <Link to="/services" className="btn-hero-secondary">
              Explore All Services
            </Link>
          </div>
        </section>

        {/* Feature Highlights */}
        <section className="works" aria-label="Work Categories">
          <div>
            <h2>Bridal Aari Work</h2>
            <p style={{ margin: "4px 0 0", fontSize: "0.88rem", color: "var(--text-muted)" }}>
              Rich Zari, Cutbeads &amp; Kundan
            </p>
          </div>
          <div>
            <h2>Bridal Makeup</h2>
            <p style={{ margin: "4px 0 0", fontSize: "0.88rem", color: "var(--text-muted)" }}>
              HD Makeover, Draping &amp; Hair
            </p>
          </div>
          <div>
            <h2>Bridal Mehandi</h2>
            <p style={{ margin: "4px 0 0", fontSize: "0.88rem", color: "var(--text-muted)" }}>
              Organic Henna &amp; Arabic Motifs
            </p>
          </div>
          <div>
            <h2>Custom Maggam Work</h2>
            <p style={{ margin: "4px 0 0", fontSize: "0.88rem", color: "var(--text-muted)" }}>
              Bespoke Designs for Boutiques
            </p>
          </div>
        </section>

        {/* Gallery Title & Cards */}
        <div className="titlepage">
          <h2>Featured Hand Work Designs</h2>
          <p>
            Have your own blouse design or Pinterest reference? Share your image with us on WhatsApp 
            and our artisans will customize the pattern exactly to your fabric and measurements.
          </p>
        </div>
        <Cards />

        {/* Studio Story Section */}
        <section className="content" id="about-studio">
          <h2>Why Boutiques &amp; Brides in Thriprayar Choose Our Studio</h2>
          <p>
            <strong>
              Handworks &amp; Embroidery by Alka is a premier bridal studio and hand embroidery atelier in
              Thriprayar, Thrissur, Kerala.
            </strong>{" "}
            We provide an all-in-one destination for brides: customized Aari work &amp; maggam blouse embroidery, 
            professional HD Bridal Makeup, customized chemical-free bridal mehandi, saree draping, and intricate bead embellishments.
          </p>
          <p>
            Whether you are preparing for your wedding muhurtham, engagement, or reception, we offer complete bridal makeover services 
            at our Thriprayar studio or at your wedding venue anywhere across Thrissur district.
          </p>
          <p>
            We also partner with boutique owners and tailor shops across Thriprayar, Guruvayur, Kodungallur, Kochi, 
            and throughout Kerala for bulk embroidery orders and sample displays.
          </p>
          <div className="buys" style={{ marginTop: "24px" }}>
            <a
              className="button"
              href={SITE.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faWhatsapp} /> Book Bridal Services on WhatsApp
            </a>
            <Link
              to="/custom/bridal-makeup"
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
              Bridal Makeup Details
            </Link>
            <Link
              to="/custom/bridal-mehandi"
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
              Bridal Mehandi Details
            </Link>
          </div>
        </section>

        {/* Services Overview */}
        <ServiceList
          heading="Bridal, Makeup &amp; Embroidery Services"
          intro="Explore our complete range of bridal makeovers, organic henna, and hand stitching crafted in Thriprayar, Thrissur."
        />

        {/* Delivery & Areas */}
        <section className="content service-area">
          <h2>Areas We Serve &amp; Fast Courier Delivery</h2>
          <p>
            Based in Thrissur, we proudly serve clients and boutiques in {SITE.areaServed.join(", ")}. 
            For customers outside Thrissur, we share live video/photo progress updates on WhatsApp and deliver 
            securely across India via insured courier services.
          </p>
        </section>

        {/* FAQs */}
        <Faq items={SITE.faqs} />

        {/* Call to Action Band */}
        <section className="cta-band">
          <h2>Order Your Custom Blouse Embroidery Today</h2>
          <p>
            Get a fast quote for your dream blouse design. Message us on WhatsApp at{" "}
            <a href={SITE.whatsappUrl}>{SITE.phone}</a> or{" "}
            <Link to="/contact">fill our online enquiry form</Link>.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
