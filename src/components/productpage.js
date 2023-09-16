import React from "react";
import pic from "../accests/products/1.jpeg";
import Navbar from "./navbar";
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
export default function ProductPage() {
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get("id");
  const title = urlParams.get("title");
  const src = urlParams.get("src");

  const handleBuyOnWhatsApp = () => {
    window.location.href = `https://api.whatsapp.com/send?phone=${+916238573109}&text=I%20want%20to%20buy%20${title}`;
  };

  return (
    <>
      <Helmet>
        <title>{title} | Aari Work Design in kochi |</title>
      </Helmet>
      <Navbar />
      <div className="product-page">
        <div className="product-image">
          <img src={src} alt={title} className="product-image-size" />
        </div>
        <div className="product-details">
          <h2>
            {title}(10{id})
          </h2>
          <p>Price: ₹ 1000 + shipping</p>

          <p>
            If customers would like any changes in colors or designs, they can
            simply place an order with you. After placing the order, your
            designer will contact them to confirm the design details. During
            this discussion, customers can specify any color changes or specific
            design alterations they would like. Once the design and cost are
            finalized, you can schedule a pickup.
          </p>
          <div className="buys">
            {" "}
            <button onClick={handleBuyOnWhatsApp}>Buy on WhatsApp</button>
            <a href="https://www.instagram.com/handworkbyalka/">
              Buy on On Instagram
            </a>
          </div>
        </div>
      </div>{" "}
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
                    <a href="https://billingkopos.com/"> billinko</a>
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
