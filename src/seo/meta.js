import SITE from "./site";
import PRODUCTS from "../data/gallery";

const BRAND = SITE.name;
const PHONE = SITE.phone;

export const truncate = (text, max = 158) => {
  const clean = text.replace(/\s+/g, " ").trim();
  if (clean.length <= max) return clean;
  const cut = clean.slice(0, max);
  return `${cut.slice(0, cut.lastIndexOf(" "))}…`;
};

const home = {
  path: "/",
  title: `Aari & Hand Work Blouse Designs in Thrissur | Alka Embroidery`,
  h1: "Aari Work and Hand Work Blouse Designs in Thrissur, Kerala",
  description: truncate(
    `Custom Aari work, hand work and maggam work blouse designs stitched by hand in Thrissur, Kerala. Bridal Aari, bead and thread work for boutiques, tailor shops and personal orders.`
  ),
  keywords: [
    "aari work blouse design",
    "hand work blouse designs",
    "aari work thrissur",
    "hand embroidery kerala",
    "maggam work blouse",
    "bridal blouse hand work",
    "hand work blouse design thrissur",
    "aari work designer kerala",
  ],
  image: SITE.image,
  faqs: SITE.faqs,
  breadcrumb: [{ name: "Home", path: "/" }],
};

const services = {
  path: "/services",
  title: `Hand Work & Embroidery Services in Thrissur, Kerala | ${BRAND}`,
  h1: "Hand Work and Embroidery Services in Thrissur",
  description: truncate(
    `Our hand work services in Thrissur: Aari work, custom hand work blouse designs, hand embroidery and bead work, thread work embroidery and maggam work. Wholesale rates for boutiques and tailor shops.`
  ),
  keywords: [
    "hand work services thrissur",
    "aari work designer thrissur",
    "boutique hand work supplier kerala",
    "maggam work",
    "bead work embroidery",
  ],
  image: SITE.image,
  faqs: SITE.faqs,
  breadcrumb: [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
  ],
};

const designs = {
  path: "/designs",
  title: `Aari Work Blouse Design Gallery | ${BRAND} Thrissur`,
  h1: "Aari Work and Hand Work Blouse Design Gallery",
  description: truncate(
    `Gallery of Aari work, hand work, maggam work and bridal blouse designs from our Thrissur studio. See blouse hand work, bead work and thread work designs and order on WhatsApp.`
  ),
  keywords: [
    "aari work blouse design images",
    "hand work blouse design gallery",
    "maggam work blouse photos",
    "bridal blouse hand work",
  ],
  image: SITE.image,
  itemList: {
    items: PRODUCTS.map((product) => ({
      name: product.title,
      url: `/designs#design-${product.code}`,
      image: `/images/products/${product.file}`,
    })),
  },
  breadcrumb: [
    { name: "Home", path: "/" },
    { name: "Our Works", path: "/designs" },
  ],
};

const about = {
  path: "/about",
  title: `About Alka | Aari & Hand Embroidery Studio in Thrissur | ${BRAND}`,
  h1: "About Handworks & Embroidery by Alka",
  description: truncate(
    `Handworks & Embroidery by Alka is a hand work studio in Thrissur, Kerala, led by Alka. We create Aari work, maggam work, bead work and custom hand embroidered blouses since 2015.`
  ),
  keywords: [
    "aari work designer alka",
    "hand embroidery studio thrissur",
    "hand work artist kerala",
  ],
  image: SITE.image,
  breadcrumb: [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
  ],
};

const contact = {
  path: "/contact",
  title: `Contact ${BRAND} | Aari & Hand Work in Thrissur`,
  h1: "Contact Our Thrissur Hand Work Studio",
  description: truncate(
    `Talk to Handworks & Embroidery by Alka in Thrissur, Kerala. WhatsApp ${PHONE} for Aari work, hand work blouse design, maggam work and bulk boutique orders.`
  ),
  keywords: [
    "aari work contact thrissur",
    "hand work blouse design whatsapp",
    "hand embroidery order kerala",
  ],
  image: SITE.image,
  breadcrumb: [
    { name: "Home", path: "/" },
    { name: "Contact", path: "/contact" },
  ],
};

const staticRoutes = {
  "/": home,
  "/services": services,
  "/designs": designs,
  "/about": about,
  "/contact": contact,
};

export const getServiceMeta = (service) => ({
  path: `/custom/${service.slug}`,
  title: `${service.name} in Thrissur, Kerala | Alka Embroidery`,
  h1: `${service.name} in Thrissur, Kerala`,
  description: truncate(
    `${service.summary} Order from our Thrissur, Kerala studio on WhatsApp ${PHONE}. ${service.price}, delivered in ${service.turnaround}.`
  ),
  keywords: [...service.keywords, "thrissur", "kerala", "hand work studio"],
  image: SITE.image,
  faqs: service.faqs,
  service,
  breadcrumb: [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: service.shortName, path: `/custom/${service.slug}` },
  ],
});

export const getProductMeta = (product) => ({
  path: `/designs/${product.code}`,
  title: `${product.title} (${product.code}) | ${BRAND} Thrissur`,
  h1: `${product.title} — Code ${product.code}`,
  description: truncate(
    `${product.title} hand stitched by our Thrissur, Kerala studio. Aari work, maggam work and hand embroidered blouse design priced from ₹850 per blouse. Order on WhatsApp ${PHONE}.`
  ),
  keywords: [
    `${product.title.toLowerCase()} thrissur`,
    "aari work blouse design",
    "hand embroidered blouse",
    "custom hand work design",
  ],
  image: `/images/products/${product.file}`,
  product,
  breadcrumb: [
    { name: "Home", path: "/" },
    { name: "Our Works", path: "/designs" },
    { name: product.title, path: `/designs/${product.code}` },
  ],
});

export const getRouteMeta = (path) => {
  const clean = path.replace(/\/+$/, "") || "/";
  if (staticRoutes[clean]) return staticRoutes[clean];
  const slug = clean.startsWith("/custom/") ? clean.slice("/custom/".length) : "";
  const service = SITE.services.find(
    (item) => item.slug.toLowerCase() === slug.toLowerCase()
  );
  if (service) return getServiceMeta(service);
  const code = clean.startsWith("/designs/") ? clean.slice("/designs/".length) : "";
  const product = PRODUCTS.find((item) => item.code === code);
  if (product) return getProductMeta(product);
  return {
    path: clean,
    title: `${BRAND} | Aari & Hand Work Blouse Designs in Thrissur, Kerala`,
    h1: "Handworks & Embroidery by Alka",
    description: SITE.description,
    keywords: [],
    image: SITE.image,
    noindex: true,
    breadcrumb: [{ name: "Home", path: "/" }],
  };
};

export const allPaths = () => [
  ...Object.keys(staticRoutes),
  ...SITE.services.map((service) => `/custom/${service.slug}`),
  ...PRODUCTS.map((product) => `/designs/${product.code}`),
];

export const toFile = (path) =>
  path === "/" ? "index.html" : `${path.replace(/^\//, "")}/index.html`;

const SITEMAP_META = {
  "/": { changefreq: "weekly", priority: "1.0" },
  "/services": { changefreq: "monthly", priority: "0.9" },
  "/designs": { changefreq: "weekly", priority: "0.9" },
  "/contact": { changefreq: "monthly", priority: "0.8" },
  "/about": { changefreq: "monthly", priority: "0.6" },
};

export const getAllRouteMeta = () => {
  const lastmod = new Date().toISOString().slice(0, 10);
  return allPaths().map((path) => {
    const meta = getRouteMeta(path);
    const defaults = path.startsWith("/custom/")
      ? { changefreq: "monthly", priority: "0.8" }
      : path.startsWith("/designs/")
      ? { changefreq: "monthly", priority: "0.6" }
      : SITEMAP_META[path] || { changefreq: "monthly", priority: "0.5" };
    return { ...meta, ...defaults, file: toFile(path), lastmod };
  });
};

export { home, services, designs, about, contact };
