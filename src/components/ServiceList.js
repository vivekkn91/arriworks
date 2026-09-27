import React from "react";
import { Link } from "react-router-dom";
import SITE from "../seo/site";

export default function ServiceList({ heading, intro, id = "service" }) {
  return (
    <div className="service" id={id}>
      <div className="container">
        <div className="row">
          <div className="titlepage">
            <h2>{heading || "Our Services"}</h2>
            {intro ? <p className="text-center">{intro}</p> : null}
          </div>
        </div>
      </div>
      <div className="outerbox">
        {SITE.services.map((service) => (
          <Link to={`/custom/${service.slug}`} key={service.slug}>
            <div className="service_box">
              <h3>{service.name}</h3>
              <p>{service.tagline}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
