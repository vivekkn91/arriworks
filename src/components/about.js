import React from "react";
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
  return (
    <>
      <Helmet>
        <title>
          About us | Aari Work Blouse Designs In Kerala | Handwork Designs By
          Alka
        </title>
      </Helmet>
      <Navbar />
      <div className="aboutus">
        <h1>Welcome to Handwork Designs By Alka!</h1>
        <h2>
          {" "}
          Aari Work Designs: Elevate Your Style with Maggam Work Blouses and
          Simple Aari Work Designs{" "}
        </h2>
        <p>
          At Handwork Designs By Alka, we specialize in creating and selling
          exquisite custom Aari work designs, hand embroidery, and beadwork also
          simple aari work blouse design. With a passion for craftsmanship and
          attention to detail, we bring to life unique and personalized
          creations that reflect the individuality and style of our customers.
        </p>
        <p>
          Our founder, Alka, is a talented designer with years of experience in
          the art of Aari work, hand embroidery, and beadwork. Her artistic
          vision and dedication to her craft have made Handwork Designs By Alka
          a go-to destination for those seeking one-of-a-kind pieces that stand
          out from the crowd.
        </p>
        <p>
          Each design at Handwork Designs By Alka is meticulously crafted by
          skilled artisans who share our commitment to excellence. We take pride
          in combining traditional techniques with contemporary aesthetics,
          resulting in stunning creations that seamlessly blend tradition and
          innovation.
        </p>
        <p>
          Whether you are looking for a beautiful hand-embroidered saree, an
          intricately designed blouse, or custom beadwork for a special
          occasion, our team is here to turn your vision into reality. We
          understand that every customer is unique, and we strive to create
          designs that capture your personality and style.
        </p>
        <p>
          At Handwork Designs By Alka, we value the art of storytelling through
          our creations. We believe that every design should have a story behind
          it, and we take pleasure in weaving tales of beauty, culture, and
          individual expression into each piece. When you wear one of our
          designs, you not only adorn yourself with artistry but also carry a
          piece of our passion and dedication.
        </p>
        <p>
          We invite you to explore our collection and embark on a journey of
          discovering exquisite designs that will leave you captivated. Whether
          you are searching for a stunning statement piece or a delicate
          accessory, Handwork Designs By Alka is your ultimate destination for
          handcrafted excellence.
        </p>
        <p>
          Thank you for joining us on this creative adventure. We look forward
          to creating something extraordinary just for you.
        </p>
        <p>
          With warm regards,
          <br />
          Handwork Designs By Alka
        </p>
        <div className="social-media-icons">
          <a
            href="https://www.instagram.com/handworkbyalka"
            aria-label="Instagram"
          >
            <FontAwesomeIcon
              icon={faInstagram}
              className="icon instagram-icon"
            />
          </a>
          <a
            href="https://in.pinterest.com/alkasukumaran"
            className="pinterest"
            aria-label="Pinterest"
          >
            <FontAwesomeIcon
              icon={faPinterest}
              className="icon pinterest-icon"
            />
          </a>
          <a
            href="https://wa.me/916238573109"
            className="whatsapp"
            aria-label="WhatsApp"
          >
            <FontAwesomeIcon icon={faWhatsapp} className="icon whatsapp-icon" />
          </a>
        </div>
      </div>

      <footer id="contact">
        <div className="footer">
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
                    <a href="https://billingkopos.com/">billingko</a>
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
