import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faPinterest,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import {
  faMapMarkerAlt,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import SITE from "../seo/site";

const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer id="contact" className="site-footer">
      <div className="container">
        <div className="footer-nap">
          <div>
            <h2 className="footer-heading">{SITE.name}</h2>
            <p>
              Leading hand embroidery &amp; Aari work studio based in Thrissur, Kerala. 
              Crafting bridal blouse designs, maggam work, zardoshi, and bespoke hand 
              stitching for brides and boutiques across Kerala &amp; India.
            </p>
          </div>
          <div>
            <h2 className="footer-heading">Studio Address &amp; Contact</h2>
            <ul className="footer-list">
              <li>
                <FontAwesomeIcon icon={faMapMarkerAlt} style={{ color: "var(--gold)" }} />
                <span>{SITE.address.street}, {SITE.address.city}, {SITE.address.region}</span>
              </li>
              <li>
                <FontAwesomeIcon icon={faWhatsapp} style={{ color: "#25d366" }} />
                <a href={SITE.whatsappUrl} target="_blank" rel="noopener noreferrer">WhatsApp: {SITE.phone}</a>
              </li>
              {SITE.secondaryPhone ? (
                <li>
                  <FontAwesomeIcon icon={faPhone} style={{ color: "var(--gold)" }} />
                  <a href={SITE.secondaryPhoneHref}>Phone: {SITE.secondaryPhone}</a>
                </li>
              ) : null}
              <li>
                <FontAwesomeIcon icon={faEnvelope} style={{ color: "var(--gold)" }} />
                <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="footer-heading">Service Areas</h2>
            <p className="footer-areas">
              {SITE.areaServed.filter((a) => a !== "Thrissur District").join(", ")}. 
              Doorstep courier delivery across India.
            </p>
          </div>
        </div>

        <div className="footer-nav">
          <ul className="footer-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/services">Services &amp; Pricing</Link>
            </li>
            <li>
              <Link to="/designs">Our Works</Link>
            </li>
            <li>
              <Link to="/about">About Studio</Link>
            </li>
            <li>
              <Link to="/contact">Contact &amp; Custom Quote</Link>
            </li>
          </ul>
        </div>

        <div className="social-media-icons">
          <a
            href={SITE.instagram}
            aria-label="Instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} className="instagram-icon" />
          </a>
          <a
            href={SITE.pinterest}
            aria-label="Pinterest"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faPinterest} className="pinterest-icon" />
          </a>
          <a
            href={SITE.whatsappUrl}
            aria-label="WhatsApp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faWhatsapp} className="whatsapp-icon" />
          </a>
        </div>
      </div>

      <div className="copyright">
        <p>
          &copy; {year} {SITE.name}. All rights reserved. Handcrafted with passion in Thrissur, Kerala.
        </p>
      </div>
    </footer>
  );
}
