const fs = require("fs");
const path = require("path");

const walk = (dir) =>
  fs
    .readdirSync(dir, { withFileTypes: true })
    .flatMap((entry) =>
      entry.isDirectory()
        ? walk(path.join(dir, entry.name))
        : [path.join(dir, entry.name)]
    );

const files = walk("build").filter((file) => file.endsWith(".html"));
const patterns = [
  "undefined",
  "NaN",
  "[object",
  "&amp;amp;",
  "Kochi, Kerala",
  "Sitemap:",
];

let issues = 0;
for (const file of files) {
  const html = fs.readFileSync(file, "utf8");
  const text = html
    .replace(/<script[\s\S]*?<\/script>/g, " ")
    .replace(/<[^>]+>/g, " ");
  for (const pattern of patterns) {
    if (text.includes(pattern)) {
      console.log(`  FOUND "${pattern}" in ${file}`);
      issues += 1;
    }
  }
  const canonical = (html.match(/rel="canonical" href="([^"]*)"/) || [])[1] || "";
  if (!canonical.startsWith("https://handworks-by-alka.netlify.app")) {
    console.log(`  BAD CANONICAL in ${file}: ${canonical}`);
    issues += 1;
  }
  if (!/name="robots" content="index, follow/.test(html) && !/noindex/.test(html)) {
    console.log(`  MISSING ROBOTS in ${file}`);
    issues += 1;
  }
}

console.log(
  `\n${files.length} html files scanned, ${issues} issues:`
);
files.forEach((f) => console.log(`  ${f}`));
