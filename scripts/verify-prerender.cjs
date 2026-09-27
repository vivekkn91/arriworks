const fs = require("fs");
const path = require("path");

const out = path.join(__dirname, "..", "build");
const files = [
  "index.html",
  "services/index.html",
  "designs/index.html",
  "designs/101/index.html",
  "about/index.html",
  "contact/index.html",
  "custom/aari-work-design/index.html",
  "custom/maggam-design-works/index.html",
];

let problems = 0;
for (const file of files) {
  const html = fs.readFileSync(path.join(out, file), "utf8");
  const title = (html.match(/<title>([^<]*)<\/title>/) || [])[1];
  const canonical = (html.match(/rel="canonical" href="([^"]*)"/) || [])[1];
  const desc = (html.match(/name="description" content="([^"]*)"/) || [])[1] || "";
  const roots = (html.match(/id="root"/g) || []).length;
  const h1 = (html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/g) || []).length;
  const text = html
    .replace(/<script[\s\S]*?<\/script>/g, " ")
    .replace(/<style[\s\S]*?<\/style>/g, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  const jsonLdMatch = html.match(
    /<script type="application\/ld\+json">([\s\S]*?)<\/script>/
  );
  let ldNodes = 0;
  let ldError = "";
  try {
    ldNodes = JSON.parse(jsonLdMatch[1])["@graph"].length;
  } catch (e) {
    ldError = e.message;
  }
  const bad = [];
  if (roots !== 1) bad.push(`root divs=${roots}`);
  if (!title) bad.push("no title");
  if (!canonical) bad.push("no canonical");
  if (desc.length < 70 || desc.length > 175) bad.push(`desc len=${desc.length}`);
  if (h1 !== 1) bad.push(`h1 count=${h1}`);
  if (text.length < 800) bad.push(`text len=${text.length}`);
  if (ldError) bad.push(`jsonld: ${ldError}`);
  if (ldNodes < 3) bad.push(`jsonld nodes=${ldNodes}`);
  if (/�/.test(html)) bad.push("replacement char found");
  if (bad.length) problems += 1;
  console.log(
    `${bad.length ? "FAIL" : " ok "} ${file.padEnd(38)} text=${String(
      text.length
    ).padStart(6)} desc=${String(desc.length).padStart(3)} h1=${h1} ld=${ldNodes}`
  );
  if (bad.length) console.log(`      -> ${bad.join("; ")}`);
}

const sitemap = fs.readFileSync(path.join(out, "sitemap.xml"), "utf8");
console.log(
  `\nsitemap urls: ${(sitemap.match(/<loc>/g) || []).length}, robots: ${
    fs.existsSync(path.join(out, "robots.txt")) ? "yes" : "NO"
  }, llms.txt: ${fs.existsSync(path.join(out, "llms.txt")) ? "yes" : "NO"}, _redirects: ${
    fs.existsSync(path.join(out, "_redirects")) ? "yes" : "NO"
  }`
);
console.log(problems ? `\n${problems} file(s) failed checks` : "\nall checks passed");
