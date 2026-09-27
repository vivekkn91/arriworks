import React from "react";
import { Helmet } from "react-helmet";
import SITE, { absoluteUrl, asset } from "./site";
import { getRouteMeta } from "./meta";

const ORGANIZATION_ID = `${SITE.url}/#organization`;
const WEBSITE_ID = `${SITE.url}/#website`;

const postalAddress = () => ({
  "@type": "PostalAddress",
  streetAddress: SITE.address.street,
  addressLocality: SITE.address.city,
  addressRegion: SITE.address.region,
  postalCode: SITE.address.postalCode,
  addressCountry: SITE.address.country,
});

const areaServed = () => [
  ...SITE.areaServed.map((name) => ({
    "@type": name === "Thrissur District" ? "AdministrativeArea" : "City",
    name,
  })),
  { "@type": "State", name: "Kerala" },
  { "@type": "Country", name: SITE.address.countryName },
];

const organizationNode = () => ({
  "@type": ["LocalBusiness", "BeautySalon", "ClothingStore"],
  "@id": ORGANIZATION_ID,
  name: SITE.name,
  legalName: SITE.legalName,
  alternateName: SITE.shortName,
  url: SITE.url,
  logo: {
    "@type": "ImageObject",
    url: absoluteUrl(SITE.logo),
    width: 512,
    height: 512,
  },
  image: absoluteUrl(SITE.image),
  description: SITE.description,
  foundingDate: String(SITE.foundedYear),
  founder: {
    "@type": "Person",
    name: SITE.founder,
  },
  priceRange: SITE.priceRange,
  currenciesAccepted: SITE.currency,
  paymentAccepted: "Cash, UPI, Bank transfer",
  address: postalAddress(),
  geo: {
    "@type": "GeoCoordinates",
    latitude: SITE.geo.latitude,
    longitude: SITE.geo.longitude,
  },
  hasMap: `https://www.google.com/maps/search/?api=1&query=${SITE.geo.latitude},${SITE.geo.longitude}`,
  areaServed: areaServed(),
  telephone: SITE.phone,
  email: SITE.email,
  sameAs: [SITE.instagram, SITE.pinterest],
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: SITE.phone,
      contactType: "sales",
      email: SITE.email,
      areaServed: "IN",
      availableLanguage: ["English", "Malayalam"],
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Hand work and embroidery services",
    itemListElement: SITE.services.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.name,
        description: service.summary,
        serviceType: service.name,
        url: absoluteUrl(`/custom/${service.slug}`),
        provider: { "@id": ORGANIZATION_ID },
        areaServed: areaServed(),
        offers: {
          "@type": "Offer",
          priceCurrency: SITE.currency,
          price: service.price.replace(/[^0-9. ₹₹]/g, "").match(/[0-9]+/)?.[0] || "450",
          availability: "https://schema.org/InStock",
          areaServed: "IN",
        },
      },
    })),
  },
});

const websiteNode = () => ({
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  url: SITE.url,
  name: SITE.name,
  inLanguage: SITE.lang,
  publisher: { "@id": ORGANIZATION_ID },
});

const breadcrumbNode = (trail = []) => {
  if (!trail.length) return null;
  return {
    "@type": "BreadcrumbList",
    "@id": `${absoluteUrl(trail[trail.length - 1].path || "/")}#breadcrumb`,
    itemListElement: trail.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path || "/"),
    })),
  };
};

const faqNode = (faqs = [], path = "/") => {
  if (!faqs.length) return null;
  return {
    "@type": "FAQPage",
    "@id": `${absoluteUrl(path)}#faq`,
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };
};

const serviceNode = (service) =>
  service && {
    "@type": "Service",
    "@id": `${absoluteUrl(`/custom/${service.slug}`)}#service`,
    name: service.name,
    serviceType: service.name,
    description: service.summary,
    url: absoluteUrl(`/custom/${service.slug}`),
    image: absoluteUrl(SITE.image),
    provider: { "@id": ORGANIZATION_ID },
    areaServed: areaServed(),
    audience: {
      "@type": "Audience",
    audienceType: "Boutiques, tailor shops and personal customers in Kerala",
    },
    offers: {
      "@type": "Offer",
      priceCurrency: SITE.currency,
      price: service.price.match(/[0-9]+/)?.[0] || "450",
      availability: "https://schema.org/InStock",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${service.name} includes`,
      itemListElement: service.details.map((detail) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: detail },
      })),
    },
  };

const productNode = (product) =>
  product && {
    "@type": "Product",
    "@id": `${absoluteUrl(`/designs/${product.code}`)}#product`,
    name: `${product.title} (Code ${product.code})`,
    description: product.alt,
    sku: product.code,
    image: absoluteUrl(`/images/products/${product.file}`),
    url: absoluteUrl(`/designs/${product.code}`),
    category: "Hand embroidered blouse design",
    material: "Silk, georgette, chanderi, cotton",
    brand: { "@type": "Brand", name: SITE.name },
    manufacturer: { "@id": ORGANIZATION_ID },
    offers: {
      "@type": "Offer",
      url: absoluteUrl(`/designs/${product.code}`),
      priceCurrency: SITE.currency,
      price: "850",
      availability: "https://schema.org/InStock",
      seller: { "@id": ORGANIZATION_ID },
      areaServed: "IN",
    },
  };

export function buildJsonLd({
  path = "/",
  faqs = [],
  breadcrumb = [],
  service = null,
  product = null,
  itemList = null,
} = {}) {
  const graph = [
    organizationNode(),
    websiteNode(),
    serviceNode(service),
    productNode(product),
    faqNode(faqs, path),
    breadcrumbNode(breadcrumb),
    itemList && {
      "@type": "ItemList",
      "@id": `${absoluteUrl(path)}#itemlist`,
      name: itemList.name || "Hand work designs",
      numberOfItems: itemList.items.length,
      itemListElement: itemList.items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        url: absoluteUrl(item.url),
        image: item.image ? absoluteUrl(item.image) : undefined,
      })),
    },
  ].filter(Boolean);

  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
}

export default function Seo({
  title,
  description = SITE.description,
  keywords = [],
  path = "/",
  image = SITE.image,
  type = "website",
  faqs = [],
  breadcrumb = [],
  service = null,
  product = null,
  itemList = null,
  noindex = false,
  children,
}) {
  const url = absoluteUrl(path);
  const fullTitle = title || getRouteMeta(path).title;
  const imageUrl = absoluteUrl(image);
  const jsonLd = buildJsonLd({ path, faqs, breadcrumb, service, product, itemList });

  return (
    <Helmet>
      <html lang={SITE.lang} />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords.length > 0 && <meta name="keywords" content={keywords.join(", ")} />}
      <link rel="canonical" href={url} />
      <meta
        name="robots"
        content={
          noindex
            ? "noindex, nofollow"
            : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        }
      />

      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={SITE.name} />
      <meta property="og:locale" content={SITE.locale} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={`${fullTitle} — ${SITE.name} Thrissur`} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      <meta name="twitter:site" content="@handworkbyalka" />

      <meta name="author" content={SITE.name} />
      <meta name="geo.region" content="IN-KL" />
      <meta name="geo.placename" content="Thrissur, Kerala" />
      <meta name="geo.position" content={`${SITE.geo.latitude};${SITE.geo.longitude}`} />
      <meta name="ICBM" content={`${SITE.geo.latitude}, ${SITE.geo.longitude}`} />
      <meta name="theme-color" content={SITE.themeColor} />

      <link rel="alternate" href={url} hrefLang={SITE.lang} />

      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      {children}
    </Helmet>
  );
}

export { asset };
