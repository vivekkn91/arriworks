import React from "react";
import Navbar from "./navbar";
import logo from "../accests/icon/logo-color.png";
import one from "../accests/products/1.jpeg";
import two from "../accests/products/2.jpeg";
import three from "../accests/products/3.jpeg";
import four from "../accests/products/4.jpeg";

import five from "../accests/products/5.jpeg";
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

export default function Gallery() {
  const images = [
    { id: 1, src: one, alt: "Aari work" },
    { id: 2, src: two, alt: "Handwork Designs" },
    { id: 3, src: three, alt: "Aari work blouse" },
    { id: 4, src: four, alt: "Handwork designs" },
    { id: 5, src: five, alt: " Custom Handwork Designs" },
  ];

  return (
    <>
      <Helmet>
        <title>
          Aari Work Blouse Hand Designs| Custom Handwork Designs For Blouses |
          Handwork Designs By Alka
        </title>
        <meta
          name="description"
          content="At our studio, we specialize in creating custom handwork designs for blouses that are as unique as you are. Our skilled artisans bring your vision to life with exquisite embroidery, delicate beadwork, and personalized details. Elevate your style with our one-of-a-kind creations."
        />
        <link rel="icon" type="image/png" href={logo} />
        {/* Other meta tags or links */}
      </Helmet>
      <Navbar />
      <h1 className="h1x">
        Discover the Finest Handcrafted Blouse Designs and Aari Works, Available
        for Online Ordering!
      </h1>
      <div className="gallery">
        {images.map((image) => (
          <img
            key={image.id}
            src={image.src}
            alt={image.alt}
            className="imagex"
          />
        ))}
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
                  <p>
                    © 2023 All Rights Reserved.{" "}
                    <a href="https://billingkopos.com/"> billingko</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
