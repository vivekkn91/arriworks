import React from "react";
import { Link } from "react-router-dom";
import PRODUCTS, { productCode, productImage } from "../data/gallery";
import SITE from "../seo/site";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export default function Cards({ limit }) {
  const products = limit ? PRODUCTS.slice(0, limit) : PRODUCTS;

  return (
    <div className="gallery-containerx">
      <div className="gallery-rowx">
        {products.map((product) => (
          <div className="cardx" key={product.id}>
            <Link to={`/designs/${product.code}`} className="card-link">
              <div style={{ overflow: "hidden", borderRadius: "8px" }}>
                <img
                  src={productImage(product)}
                  alt={product.alt}
                  className="card-imagex"
                  loading="lazy"
                  width="600"
                  height="800"
                />
              </div>
              <div className="card-titlex">
                {product.title}
              </div>
              <div style={{ fontSize: "0.82rem", color: "var(--gold-dark)", fontWeight: "600", marginBottom: "8px" }}>
                Design Code: {productCode(product)}
              </div>
            </Link>
            <a
              className="card-enquire"
              href={`${SITE.whatsappUrl}?text=${encodeURIComponent(
                `Hello ${SITE.name}, I am interested in design code (${productCode(
                  product
                )}) - ${product.title}: ${SITE.url}/designs/${product.code}`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Enquire about ${product.title} on WhatsApp`}
            >
              <FontAwesomeIcon icon={faWhatsapp} /> Enquire on WhatsApp
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
