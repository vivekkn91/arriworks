import React from "react";
import { useParams } from "react-router-dom";

import Nav from "./navbar";
import Cards from "./cards";
import { Helmet } from "react-helmet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faTwitter,
  faWhatsapp,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";

export default function Custom() {
  const { work } = useParams();

  // Generate SEO-friendly content based on the work
  const getPageTitle = () => {
    switch (work) {
      case "aari-work-design":
        return "Aari Work Design";
      case "handworks-design":
        return "Custom Handworks Designs ";
      case "hand-embroidery-beads-work":
        return "Hand Embroidery Beads Work";
      case "Hand-thread-work-embroidery":
        return "Hand Thread Work Embroidery ";
      case "Maggam-design-works":
        return "Maggam Design Works";
      default:
        return "Custom Design Works ";
    }
  };

  const getPageDescription = () => {
    switch (work) {
      case "aari-work-design":
        return "We specialize in creating Aari work design. Discover unique and personalized handwork designs ";

      case "handworks-design":
        return "We specialize in creating custom handworks designs. Discover unique and personalized handwork designs at Your Handwork Designs by Alka.";
      case "hand-embroidery-beads-work":
        return "Explore our exquisite collection of hand embroidery beads work. Our skilled artisans create beautiful and intricate designs at Your Handwork Designs by Alka.";
      case "Hand-thread-work-embroidery":
        return "Elevate your style with our hand thread work embroidery. Discover a range of handwork blouse designs at Your Handwork Designs by Alka.";
      case "Maggam-design-works":
        return "Experience the beauty of Maggam design works. Our talented team creates stunning maggam blouse designs at Your Handwork Designs by Alka.";
      default:
        return "Discover unique and customized handworks designs at Your Handwork Designs by Alka. We specialize in creating beautiful and personalized works.";
    }
  };

  const pageTitle = getPageTitle();
  const pageDescription = getPageDescription();

  return (
    <>
      <Helmet>
        <title>{pageTitle} | Handwork Designs by Alka</title>
      </Helmet>
      <Nav />
      <div className="text-center custum">
        {" "}
        <h1>{pageTitle}</h1>
        <p>{pageDescription}</p>
      </div>
      <Cards />{" "}
      <div className="text-center custum">
        {" "}
        <h1>
          {" "}
          We do Custom Aari Simple Design & Simple Aari Work Blouse Design
        </h1>
        <p></p>
      </div>
      <footer id="contact">
        <div className="footer">
          {" "}
          <div className="social-media-icons">
            <a href="https://www.instagram.com/handworkbyalka">
              <FontAwesomeIcon
                icon={faInstagram}
                className="icon instagram-icon"
              />
            </a>
            <a
              href="https://in.pinterest.com/alkasukumaran"
              className="pinterest"
            >
              <FontAwesomeIcon
                icon={faPinterest}
                className="icon pinterest-icon"
              />
            </a>
            <a href="https://wa.me/916238573109" className="whatsapp">
              <FontAwesomeIcon
                icon={faWhatsapp}
                className="icon whatsapp-icon"
              />
            </a>
          </div>
          <div className="copyright">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <p>© 2023 All Rights Reserved. handwork designs by alka</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
