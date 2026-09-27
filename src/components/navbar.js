import React, { useState } from "react";
import logo from "../accests/icon/logo.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header>
      <div className="header">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-5 col-lg-5 col-md-9 col-sm-9">
              <nav className="navigation navbar navbar-expand-md navbar-dark">
                <button
                  className="navbar-toggler"
                  type="button"
                  onClick={handleNavToggle}
                  aria-expanded={isNavOpen}
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className={`collapse navbar-collapse ${
                    isNavOpen ? "show" : ""
                  }`}
                >
                  <ul className="navbar-nav mr-auto">
                    <Link to="/">
                      <li className="nav-item active nav-link"> Home </li>
                    </Link>{" "}
                    <Link to="/about">
                      <li className="nav-item nav-link">About</li>{" "}
                    </Link>
                    {/* <li className="nav-item">
                      <a className="nav-link" href="#service">
                        Service
                      </a>
                    </li> */}
                    <Link to="/designs">
                      <li className="nav-item  nav-link">Our Works</li>
                    </Link>
                    {/* <li className="nav-item">
                      <a className="nav-link" href="#contact">
                        Contact Us
                      </a>
                    </li> */}
                  </ul>
                </div>
              </nav>
            </div>
            <div className="col-xl-2 col-lg-2 col-md-3 col-sm-3 col logo_section">
              <div className="full">
                <div className="center-desk">
                  <div className="logo">
                    <img src={logo} alt="handwork designs by alka" />
                    <ul className="email3">
                      <li>
                        <a href="https://wa.me/916238573109">
                          whatsapp: (+91) 6238573109
                        </a>
                      </li>
                      <li>
                        <a href="mailto:alkasukumaran2015@gmail.com">
                          Email: alkasukumaran2015@gmail.com
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-5 col-md-5 col-sm-5">
              <ul className="email">
                <li>
                  <a href="https://wa.me/916238573109">
                    whatsapp: (+91) 6238573109
                  </a>
                </li>
                <li>
                  <a href="mailto:alkasukumaran2015@gmail.com">
                    Email: alkasukumaran2015@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
