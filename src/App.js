import logo from "./accests/icon/logo-color.png";
import "./accests/css/style.css";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

import "./accests/css/responsive.css";
import Navbar from "./components/navbar";
import aari from "./accests/icon/aariwor.png";

import Cards from "./components/cards";
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

// import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <body className="main-layout">
        <Helmet>
          <title>
            Aari Work Blouse Hand Designs | Custom Handwork Designs for Blouses
            | Maggam Design Works
          </title>
          <meta
            name="description"
            content="At our studio in kochi, we specialize in creating custom handwork designs for blouses that are as unique as you are. Our skilled artisans bring your vision to life with exquisite embroidery, delicate beadwork, and personalized details. Elevate your style with our one-of-a-kind creations."
          />

          <link rel="icon" type="image/png" href={logo} />
        </Helmet>
        <Navbar />

        <section className="bannersection">
          <h1 className="text-center bannertext h2">
            {" "}
            Custom Bridal Aari Embroidery Designs for You!{" "}
          </h1>
          <h2 className="text-center bannertext">
            We undertake Aari work, Hand work orders from Boutiques and Tailor
            shops and do at lowest rate in Market AARI, ZARDOSHI, MAGGAM WORK,
            MIRROR WORK, CUT WORK, BEAD WORK, MACHINE EMBROIDERY, SAREE TASSELS
            AND ALL KIND OF ORDERS TAKEN
          </h2>
        </section>
        <section className="works">
          <div>
            <h3>HEAVY AARI BRIDAL</h3>
          </div>
          <div>
            <h3>MEDIUM AARI WORKS</h3>
          </div>
          <div>
            <h3>SIMPLE AARI WORKS</h3>
          </div>
          <div>
            <h3>BRIDAL AARI WORKS</h3>
          </div>
        </section>

        <div className="titlepage">
          {" "}
          <h2 className="text-center"> Check our Aari Work Designs</h2>
          <p className="text-center">
            Have Your own Aari Work designs share your idea and we can cutom
            create it for you{" "}
          </p>
        </div>
        <Cards />
        <div id="service" className="service">
          <div className="container">
            <div className="row">
              <div className="titlepage">
                <h2> Our Services</h2>
              </div>
            </div>
          </div>
          <div className="outerbox">
            <Link to={`/custom/aari-work-design`}>
              <div id="hover_chang" className="service_box">
                <h3>custom Aari work designs</h3>
                <p>we design Aari handworks designs</p>
              </div>
            </Link>
            <Link to={`/custom/handworks-design`}>
              <div id="hover_chang" className="service_box">
                <h3>custom handworks designs</h3>
                <p>we design custom handworks designs</p>
              </div>
            </Link>
            <Link to={`/custom/hand-embroidery-beads-work`}>
              <div id="hover_chang" className="service_box">
                <h3>hand embroidery beads work</h3>
                <p>we design custom aari designs</p>
              </div>
            </Link>
            <Link to={`/custom/Hand-thread-work-embroidery`}>
              <div id="hover_chang" className="service_box">
                <h3>Hand thread work embroidery</h3>
                <p>we design handworks blouse designs</p>
              </div>
            </Link>
            <Link to={`/custom/Maggam-design-works`}>
              <div id="hover_chang" className="service_box">
                <h3>Maggam design works</h3>
                <p>we design maggam blouse designs</p>
              </div>
            </Link>
          </div>
        </div>
        <div className="content">
          <p>
            At our boutique, we specialize in Aari work, offering exceptional
            craftsmanship at the most affordable rates in the market. With our
            expertise in Aari, Zardoshi, Maggam work, mirror work, cut work,
            bead work, machine embroidery, saree tassels, and more, we cater to
            the diverse needs of boutiques and tailor shops. Our skilled
            artisans bring their passion and creativity to every project,
            ensuring exquisite results that surpass expectations.{" "}
          </p>
          <p>
            When you choose us for your Aari work orders, you can expect nothing
            but the highest quality and attention to detail. We take pride in
            our ability to create intricate designs that showcase the beauty of
            this traditional art form. Whether it's embellishing sarees,
            blouses, or other clothing items, our team meticulously handcrafts
            each piece, using premium materials such as silk threads, zari,
            sequins, beads, and mirrors. The end result is a stunning
            masterpiece that reflects the unique style and personality of the
            wearer.
          </p>{" "}
          <p>
            What sets us apart is not only our craftsmanship but also our
            commitment to affordability. We believe that everyone should have
            access to the beauty of Aari work, regardless of budget constraints.
            By offering our services at the lowest rates in the market, we
            ensure that boutique owners and tailor shops can provide their
            customers with exquisite Aari work without compromising on quality.
          </p>
          <p>
            With our extensive range of services and dedication to customer
            satisfaction, we have built a reputation as a trusted provider of
            Aari work. We value the partnerships we establish with our clients
            and work closely with them to understand their specific
            requirements. Whether you need a single order or regular
            collaborations, we are here to deliver exceptional Aari work that
            exceeds your expectations.
          </p>
          <p>
            What sets us apart is not only our craftsmanship but also our
            commitment to affordability. We believe that everyone should have
            access to the beauty of Aari work, regardless of budget constraints.
            By offering our services at the lowest rates in the market, we
            ensure that boutique owners and tailor shops can provide their
            customers with exquisite Aari work without compromising on quality.
          </p>
        </div>
        {/* <div id="contact" className="contact">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="titlepage">
                  <h2>
                    {" "}
                    Request <span className="white"> A call Back</span>
                  </h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <form
                  id="request"
                  className="main_form"
                  name="contact6"
                  method="post"
                >
                  <input type="hidden" name="form-name" value="contact6" />
                  <div className="row">
                    <div className="col-md-12 ">
                      <input
                        className="contactus"
                        placeholder="Name"
                        type="text"
                        name="Name"
                      />
                    </div>
                    <div className="col-md-12">
                      <input
                        className="contactus"
                        placeholder="Email"
                        type="email"
                        name="Email"
                      />
                    </div>
                    <div className="col-md-12">
                      <input
                        className="contactus"
                        placeholder="Phone Number"
                        type="tel"
                        name="Phone Number"
                      />
                    </div>
                    <div className="col-md-12">
                      <textarea
                        className="textarea"
                        placeholder="Message"
                        name="Message"
                      ></textarea>
                    </div>
                    <div className="col-sm-col-xl-6 col-lg-6 col-md-6 col-sm-12">
                      <button className="send_btn" type="submit">
                        Send
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div> */}

        <footer id="contact">
          <div className="footer">
            {" "}
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
      </body>
    </>
  );
}

export default App;
