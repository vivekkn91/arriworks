import React from "react";
import { useSearchParams } from "react-router-dom";
import Navbar from "./navbar";
import Footer from "./Footer";
import Breadcrumbs from "./Breadcrumbs";
import Seo from "../seo/Seo";
import { contact as meta } from "../seo/meta";
import SITE from "../seo/site";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faPhone, faEnvelope, faMapMarkerAlt, faBuilding, faTruck } from "@fortawesome/free-solid-svg-icons";

export default function Contact() {
  const [params] = useSearchParams();
  const sent = params.get("sent") === "1";
  return (
    <>
      <Seo
        title={meta.title}
        description={meta.description}
        keywords={meta.keywords}
        path="/contact"
        breadcrumb={meta.breadcrumb}
      />
      <Navbar />
      <main className="contactus">
        <Breadcrumbs trail={meta.breadcrumb} />
        <h1>{meta.h1}</h1>
        <p className="lead">
          The fastest way to reach us is WhatsApp. Send your blouse
          measurements, fabric and a design photo and we will reply with a rate
          and a delivery date, usually the same day.
        </p>

        <div className="contact-details">
          <h2>Studio details</h2>
          <ul>
            <li>
              <FontAwesomeIcon icon={faBuilding} style={{ color: "var(--gold-dark)", marginRight: "8px" }} />
              <strong>Business:</strong> {SITE.name}
            </li>
            <li>
              <FontAwesomeIcon icon={faMapMarkerAlt} style={{ color: "var(--gold-dark)", marginRight: "8px" }} />
              <strong>Location:</strong> {SITE.address.street},{" "}
              {SITE.address.city}, {SITE.address.region}, {SITE.address.countryName}
            </li>
            <li>
              <FontAwesomeIcon icon={faWhatsapp} style={{ color: "#25d366", marginRight: "8px" }} />
              <strong>WhatsApp (Primary):</strong>{" "}
              <a href={SITE.whatsappUrl} target="_blank" rel="noopener noreferrer">{SITE.phone}</a>
            </li>
            {SITE.secondaryPhone ? (
              <li>
                <FontAwesomeIcon icon={faPhone} style={{ color: "var(--primary)", marginRight: "8px" }} />
                <strong>Secondary Phone:</strong> <a href={SITE.secondaryPhoneHref}>{SITE.secondaryPhone}</a>
              </li>
            ) : null}
            <li>
              <FontAwesomeIcon icon={faEnvelope} style={{ color: "var(--primary)", marginRight: "8px" }} />
              <strong>Email:</strong>{" "}
              <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
            </li>
            <li>
              <FontAwesomeIcon icon={faInstagram} style={{ color: "#e4405f", marginRight: "8px" }} />
              <strong>Instagram:</strong>{" "}
              <a href={SITE.instagram} target="_blank" rel="noopener noreferrer">@handworkbyalka</a>
            </li>
            <li>
              <FontAwesomeIcon icon={faTruck} style={{ color: "var(--gold-dark)", marginRight: "8px" }} />
              <strong>Orders for:</strong> {SITE.areaServed.join(", ")}
            </li>
          </ul>
          <p style={{ marginTop: "20px" }}>
            <a
              className="button"
              href={SITE.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faWhatsapp} /> Chat on WhatsApp Now
            </a>
          </p>
        </div>

        <div className="contact-form-wrap">
          <h2>Send an enquiry</h2>
          <p>
            Fill this form and we will get back to you on WhatsApp or by email.
            For faster quoting, mention the type of work, the fabric and the
            number of blouses you need.
          </p>
          {sent ? (
            <p className="form-success">
              ✓ Thank you. Your enquiry has been sent and we will reply shortly.
            </p>
          ) : null}
          <form
            name="handwork-enquiry"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            action="/contact?sent=1"
            id="enquiry"
            className="main_form"
          >
            <input type="hidden" name="form-name" value="handwork-enquiry" />
            <p className="hidden">
              <label>
                Do not fill this out: <input name="bot-field" />
              </label>
            </p>
            <label htmlFor="enq-name">Your Full Name</label>
            <input id="enq-name" className="contactus" type="text" name="Name" placeholder="e.g. Priya Nair" required />
            <label htmlFor="enq-phone">Phone / WhatsApp number</label>
            <input
              id="enq-phone"
              className="contactus"
              type="tel"
              name="Phone"
              placeholder="+91 98765 43210"
              required
            />
            <label htmlFor="enq-email">Email Address</label>
            <input id="enq-email" className="contactus" type="email" name="Email" placeholder="you@example.com" />
            <label htmlFor="enq-service">What type of embroidery do you need?</label>
            <select id="enq-service" className="contactus" name="Service">
              {SITE.services.map((service) => (
                <option key={service.slug} value={service.name}>
                  {service.name}
                </option>
              ))}
              <option value="Something else">Something else / Custom request</option>
            </select>
            <label htmlFor="enq-message">Message &amp; Requirements</label>
            <textarea
              id="enq-message"
              className="textarea"
              name="Message"
              rows="5"
              placeholder="Tell us about the design, fabric type, number of blouses, and required delivery date..."
            />
            <button className="send_btn" type="submit">
              Send Enquiry
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
}
