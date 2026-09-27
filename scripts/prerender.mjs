import { build } from "esbuild";
import { createRequire } from "node:module";
import fs from "node:fs";
import fsp from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const require = createRequire(import.meta.url);
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const outDir = path.join(root, "build");
const cacheDir = path.join(root, "node_modules", ".cache", "prerender");
const entry = path.join(root, "src", "entry-server.jsx");
const bundlePath = path.join(cacheDir, "entry-server.cjs");

const log = (message) => console.log(`[prerender] ${message}`);

const readTemplate = async () => fsp.readFile(path.join(outDir, "index.html"), "utf8");

const stripHead = (html) =>
  html
    .replace(/<title>[\s\S]*?<\/title>/gi, "")
    .replace(/<meta[^>]+name=["']description["'][^>]*>/gi, "")
    .replace(/<meta[^>]+name=["']keywords["'][^>]*>/gi, "")
    .replace(/<meta[^>]+name=["']robots["'][^>]*>/gi, "")
    .replace(/<meta[^>]+property=["']og:[^"']*["'][^>]*>/gi, "")
    .replace(/<meta[^>]+name=["']twitter:[^"']*["'][^>]*>/gi, "")
    .replace(/<link[^>]+rel=["']canonical["'][^>]*>/gi, "")
    .replace(/<link[^>]+rel=["']alternate["'][^>]*>/gi, "")
    .replace(/<script[^>]+type=["']application\/ld\+json["'][^>]*>[\s\S]*?<\/script>/gi, "")
    .replace(/<!-- SEO_HEAD_START -->[\s\S]*?<!-- SEO_HEAD_END -->/g, "");

const esc = (value) =>
  String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

const attr = (value) => esc(value).replace(/'/g, "&#39;");

const buildHead = (meta, site, abs) => {
  const url = abs(meta.path);
  const image = abs(meta.image);
  const keywords = (meta.keywords || []).join(", ");
  const robots = meta.noindex
    ? "noindex, nofollow"
    : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1";

  const lines = [
    "<!-- SEO_HEAD_START -->",
    `<title>${esc(meta.title)}</title>`,
    `<meta name="description" content="${attr(meta.description)}" />`,
    keywords ? `<meta name="keywords" content="${attr(keywords)}" />` : "",
    `<meta name="robots" content="${attr(robots)}" />`,
    `<meta name="author" content="${attr(site.name)}" />`,
    `<link rel="canonical" href="${attr(url)}" />`,
    `<link rel="alternate" hreflang="${attr(site.lang)}" href="${attr(url)}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="${attr(site.name)}" />`,
    `<meta property="og:locale" content="${attr(site.locale)}" />`,
    `<meta property="og:url" content="${attr(url)}" />`,
    `<meta property="og:title" content="${attr(meta.title)}" />`,
    `<meta property="og:description" content="${attr(meta.description)}" />`,
    `<meta property="og:image" content="${attr(image)}" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    `<meta property="og:image:alt" content="${attr(`${meta.title} — ${site.name} Thrissur`)}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${attr(meta.title)}" />`,
    `<meta name="twitter:description" content="${attr(meta.description)}" />`,
    `<meta name="twitter:image" content="${attr(image)}" />`,
    `<meta name="twitter:site" content="@handworkbyalka" />`,
    `<meta name="geo.region" content="IN-KL" />`,
    `<meta name="geo.placename" content="Thrissur, Kerala" />`,
    `<meta name="geo.position" content="${site.geo.latitude};${site.geo.longitude}" />`,
    `<meta name="ICBM" content="${site.geo.latitude}, ${site.geo.longitude}" />`,
    `<script type="application/ld+json">${JSON.stringify(meta.jsonLd).replace(
      /<\//g,
      "<\\/"
    )}</script>`,
    "<!-- SEO_HEAD_END -->",
  ];
  return lines.filter(Boolean).join("\n    ");
};

const syncPublicFiles = async (site) => {
  const patch = (name) => {
    const file = path.join(outDir, name);
    if (!fs.existsSync(file)) return;
    const current = fs.readFileSync(file, "utf8");
    const next = current
      .replace(/https:\/\/[a-z0-9-]+\.netlify\.app/gi, site.url)
      .replace(/^Sitemap: .*$/gim, "")
      .replace(/\n{3,}/g, "\n\n")
      .trimEnd();
    fsp.writeFile(file, `${next}\n`, "utf8");
    log(`${name} domain synced to ${site.url}`);
  };
  ["robots.txt", "llms.txt"].forEach(patch);
};

const writeSitemap = async (routes, site, abs) => {
  const body = routes
    .map(
      (route) => `  <url>
    <loc>${esc(abs(route.path))}</loc>
    <lastmod>${route.lastmod}</lastmod>
    <changefreq>${route.changefreq || "monthly"}</changefreq>
    <priority>${route.priority || "0.7"}</priority>
  </url>`
    )
    .join("\n");
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${body}
</urlset>
`;
  await fsp.writeFile(path.join(outDir, "sitemap.xml"), xml, "utf8");
  log(`sitemap.xml written (${routes.length} urls)`);
};

const writeSitemapImages = async (site, abs) => {
  const { PRODUCTS } = require(path.join(cacheDir, "data", "gallery.cjs"));
  const urls = PRODUCTS.map(
    (product) => `  <url>
    <loc>${esc(abs(`/designs/${product.code}`))}</loc>
    <image:image>
      <image:loc>${esc(abs(`/images/products/${product.file}`))}</image:loc>
      <image:title>${esc(product.title)}</image:title>
      <image:caption>${esc(product.alt)}</image:caption>
    </image:image>
  </url>`
  ).join("\n");
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urls}
</urlset>
`;
  await fsp.writeFile(path.join(outDir, "sitemap-image.xml"), xml, "utf8");
  log("sitemap-image.xml written");
};

const main = async () => {
  if (!fs.existsSync(path.join(outDir, "index.html"))) {
    throw new Error("build/index.html not found. Run `react-scripts build` first.");
  }
  await fsp.mkdir(cacheDir, { recursive: true });

  log("bundling server entry with esbuild");
  await build({
    entryPoints: [
      entry,
      path.join(root, "src", "seo", "Seo.js"),
      path.join(root, "src", "seo", "meta.js"),
      path.join(root, "src", "data", "gallery.js"),
    ],
    outdir: cacheDir,
    outbase: path.join(root, "src"),
    bundle: true,
    platform: "node",
    format: "cjs",
    target: "node18",
    jsx: "automatic",
    logLevel: "error",
    define: {
      "process.env.NODE_ENV": '"production"',
      "process.env.PUBLIC_URL": '""',
    },
    loader: {
      ".js": "jsx",
      ".jsx": "jsx",
      ".css": "empty",
      ".png": "empty",
      ".jpg": "empty",
      ".jpeg": "empty",
      ".gif": "empty",
      ".svg": "empty",
    },
    outExtension: { ".js": ".cjs" },
  });

  const { render } = require(bundlePath);
  const { buildJsonLd } = require(path.join(cacheDir, "seo", "Seo.cjs"));
  const site = JSON.parse(
    fs.readFileSync(path.join(root, "src", "seo", "site.json"), "utf8")
  );
  const { getAllRouteMeta } = require(path.join(cacheDir, "seo", "meta.cjs"));

  const abs = (p) => (p === "/" ? `${site.url}/` : `${site.url}${p}`);
  const routes = getAllRouteMeta();
  const template = await readTemplate();

  let written = 0;
  for (const route of routes) {
    const appHtml = render(route.path);
    route.jsonLd = buildJsonLd({
      path: route.path,
      faqs: route.faqs || [],
      breadcrumb: route.breadcrumb || [],
      service: route.service || null,
      product: route.product || null,
      itemList: route.itemList || null,
    });
    const head = buildHead(route, site, abs);
    const html = stripHead(template)
      .replace(/<head>/i, () => `<head>\n    ${head}\n`)
      .replace(
        /<div id="root"><\/div>/i,
        () => `<div id="root">${appHtml}</div>`
      );

    const target = path.join(outDir, route.file);
    await fsp.mkdir(path.dirname(target), { recursive: true });
    await fsp.writeFile(target, html, "utf8");
    written += 1;
  }

  log(`pre-rendered ${written} pages`);
  await syncPublicFiles(site);
  await writeSitemap(routes, site, abs);
  await writeSitemapImages(site, abs);
  const robotsPath = path.join(outDir, "robots.txt");
  const robots = fs.readFileSync(robotsPath, "utf8").trimEnd();
  fs.writeFileSync(
    robotsPath,
    `${robots}\nSitemap: ${abs("/sitemap.xml")}\nSitemap: ${abs("/sitemap-image.xml")}\n`,
    "utf8"
  );
  log("robots.txt sitemap lines added");

  const redirects = [
    "/custom/Maggam-design-works   /custom/maggam-design-works   301",
    "/custom/Hand-thread-work-embroidery   /custom/hand-thread-work-embroidery   301",
    "/product   /designs   301",
    ...routes
      .filter((route) => route.path !== "/")
      .map((route) => `${route.path}   /${route.file}   200`),
    "/*   /index.html   200",
  ].join("\n");
  await fsp.writeFile(path.join(outDir, "_redirects"), `${redirects}\n`, "utf8");
  await fsp.writeFile(path.join(root, "_redirects"), `${redirects}\n`, "utf8");
  log("_redirects regenerated (build/ and repo root)");
};

main().catch((error) => {
  console.error("[prerender] failed:", error);
  process.exit(1);
});
