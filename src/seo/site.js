import site from "./site.json";

const PUBLIC_URL = process.env.PUBLIC_URL || "";

export const SITE = site;

export const asset = (path) => `${PUBLIC_URL}${path}`;

export const absoluteUrl = (path = "/") => {
  if (/^https?:\/\//i.test(path)) return path;
  const base = SITE.url.replace(/\/$/, "");
  const suffix = path.startsWith("/") ? path : `/${path}`;
  return suffix === "/" ? `${base}/` : `${base}${suffix}`;
};

export const serviceBySlug = (slug) =>
  site.services.find((service) => service.slug.toLowerCase() === slug?.toLowerCase());

export const routeTitle = (title) =>
  `${title} | ${site.name} — Aari & Hand Work in Thrissur`;

export const LOCALES = [
  "Thriprayar",
  "Thrissur",
  "Guruvayur",
  "Chalakudy",
  "Irinjalakuda",
  "Mannarkkad",
  "Kodungallur",
  "Kochi",
  "Perinthalmanna",
  "Palakkad",
  "Malappuram",
  "Ernakulam",
  "Kottayam",
];

export default site;
