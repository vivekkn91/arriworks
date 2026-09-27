import React from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "./navbar";
import Footer from "./Footer";
import Breadcrumbs from "./Breadcrumbs";
import Seo from "../seo/Seo";
import { getProductMeta } from "../seo/meta";
import PRODUCTS, { productCode, productImage } from "../data/gallery";
import SITE from "../seo/site";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp, faInstagram } from "@fortawesome/free-brands-svg-icons";

const byCode = (code) => PRODUCTS.find((item) => item.code === code);

export default function ProductPage() {
  const { code } = useParams();
  const product = byCode(code);

  if (!product) {
    return (
      <>
        <Seo
          title={`Design not found | ${SITE.name}`}
          description="This hand work design is not available. See all Aari work and hand work blouse designs from our Thrissur studio."
          path={`/designs/${code}`}
          noindex
          breadcrumb={[
            { name: "Home", path: "/" },
            { name: "Our Works", path: "/designs" },
          ]}
        />
        <Navbar />
        <main className="product-page">
          <div className="content" style={{ textAlign: "center", margin: "60px auto" }}>
            <h1>Design Not Found</h1>
            <p>
              This hand work design is no longer listed. Please see all our{" "}
              <Link to="/designs">Aari work and hand work designs</Link> or{" "}
              <a href={SITE.whatsappUrl} target="_blank" rel="noopener noreferrer">contact us on WhatsApp</a> and we will share our latest designs.
            </p>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const meta = getProductMeta(product);
  const whatsappText = encodeURIComponent(
    `Hello ${SITE.name}, I would like to order design code (${productCode(
      product
    )}) - ${product.title} from ${SITE.url}/designs/${product.code}`
  );
  const others = PRODUCTS.filter((item) => item.id !== product.id).slice(0, 4);

  return (
    <>
      <Seo
        title={meta.title}
        description={meta.description}
        keywords={meta.keywords}
        path={meta.path}
        image={`/images/products/${product.file}`}
        product={product}
        breadcrumb={meta.breadcrumb}
      />
      <Navbar />
      <main className="product-page">
        <Breadcrumbs trail={meta.breadcrumb} />
        <div className="product-main">
          <div className="product-image">
            <img
              src={productImage(product)}
              alt={product.alt}
              className="product-image-size"
              width="1200"
              height="900"
            />
          </div>
          <div className="product-details">
            <h1>
              {product.title}
            </h1>
            <div style={{ fontSize: "1rem", color: "var(--gold-dark)", fontWeight: "700", marginBottom: "12px" }}>
              Design Code: {productCode(product)}
            </div>
            <p className="product-meta">
              ✨ Handcrafted in Thrissur, Kerala &bull; Aari, Maggam &amp; Bridal Embroidery. 
              Starting from ₹850.
            </p>
            <h2>About This Handcrafted Piece</h2>
            <p>{product.alt}.</p>
            <p>
              Each design is made to order for your exact fabric and blouse measurements. Send us 
              your reference photo and measurements, and our artisans will tailor the pattern with precision. 
              Simple thread &amp; bead work takes 4 to 7 days, medium Aari work takes 7 to 15 days, and 
              heavy bridal embroidery takes 15 to 25 days.
            </p>
            <div className="buys">
              <a
                className="button"
                href={`${SITE.whatsappUrl}?text=${whatsappText}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faWhatsapp} /> Order on WhatsApp
              </a>
              <a
                href={SITE.instagram}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  color: "#e4405f",
                  fontWeight: "600",
                  padding: "12px 20px",
                  borderRadius: "var(--radius-full)",
                  background: "#fff0f3",
                  border: "1px solid #ffd1dc"
                }}
              >
                <FontAwesomeIcon icon={faInstagram} /> View on Instagram
              </a>
            </div>
          </div>
        </div>
        <section className="related">
          <h2>More Hand Work Designs</h2>
          <div className="related-grid">
            {others.map((item) => (
              <Link
                to={`/designs/${item.code}`}
                key={item.id}
                className="related-item"
              >
                <img
                  src={productImage(item)}
                  alt={item.alt}
                  loading="lazy"
                  width="400"
                  height="300"
                />
                <span>
                  {item.title} ({item.code})
                </span>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
