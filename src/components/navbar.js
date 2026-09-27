import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import SITE from "../seo/site";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faMapMarkerAlt, faPhone, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const logoSrc = `${process.env.PUBLIC_URL || ""}/images/logo.png`;

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const location = useLocation();

  const handleNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  return (
    <header className="site-header">
      {/* Top utility contact bar */}
      <div className="top-bar">
        <div className="top-bar-inner">
          <div className="top-bar-location">
            <FontAwesomeIcon icon={faMapMarkerAlt} />
            <span>Thriprayar, Thrissur &bull; Handcrafted Aari &amp; Bridal Embroidery</span>
          </div>
          <div className="top-bar-contacts">
            <a href={SITE.whatsappUrl} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faWhatsapp} />
              <span>WhatsApp: {SITE.phone}</span>
            </a>
            {SITE.secondaryPhone ? (
              <a href={`tel:${SITE.secondaryPhoneHref}`}>
                <FontAwesomeIcon icon={faPhone} />
                <span>Alt: {SITE.secondaryPhone}</span>
              </a>
            ) : null}
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="nav-container">
        <div className="brand-logo-wrap">
          <Link to="/" className="brand-logo" onClick={closeNav}>
            <img src={logoSrc} alt={`${SITE.name} — Hand work studio in Thrissur`} />
            <div className="brand-text">
              <span className="brand-title">Handwork Designs</span>
              <span className="brand-subtitle">By Alka &bull; Thrissur</span>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <nav aria-label="Main Navigation">
          <ul className="desktop-nav">
            <li>
              <Link to="/" className={location.pathname === "/" ? "active" : ""}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/services" className={location.pathname.startsWith("/services") ? "active" : ""}>
                Services
              </Link>
            </li>
            <li>
              <Link to="/designs" className={location.pathname.startsWith("/designs") ? "active" : ""}>
                Our Works
              </Link>
            </li>
            <li>
              <Link to="/about" className={location.pathname === "/about" ? "active" : ""}>
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className={location.pathname === "/contact" ? "active" : ""}>
                Contact
              </Link>
            </li>
            <li>
              <a
                href={SITE.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="nav-cta-btn"
              >
                <FontAwesomeIcon icon={faWhatsapp} />
                <span>Enquire Now</span>
              </a>
            </li>
          </ul>
        </nav>

        {/* Mobile menu toggle */}
        <button
          className="mobile-toggle"
          onClick={handleNavToggle}
          aria-label="Toggle navigation menu"
        >
          <FontAwesomeIcon icon={isNavOpen ? faTimes : faBars} />
        </button>
      </div>

      {/* Mobile Drawer */}
      <div className={`mobile-menu-drawer ${isNavOpen ? "open" : ""}`}>
        <Link to="/" onClick={closeNav}>
          Home
        </Link>
        <Link to="/services" onClick={closeNav}>
          Services
        </Link>
        <Link to="/designs" onClick={closeNav}>
          Our Works
        </Link>
        <Link to="/about" onClick={closeNav}>
          About
        </Link>
        <Link to="/contact" onClick={closeNav}>
          Contact
        </Link>
        <a
          href={SITE.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="nav-cta-btn"
          style={{ marginTop: "12px", justifyContent: "center" }}
          onClick={closeNav}
        >
          <FontAwesomeIcon icon={faWhatsapp} />
          <span>Enquire on WhatsApp</span>
        </a>
      </div>
    </header>
  );
}
