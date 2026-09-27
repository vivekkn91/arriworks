const fs = require("fs");
const path = require("path");

const target = process.argv[2] || "build/designs/index.html";
const html = fs.readFileSync(target, "utf8");
const body = html.split('id="root"')[1] || html;
const text = body
  .replace(/<script[\s\S]*?<\/script>/g, " ")
  .replace(/<[^>]+>/g, " ")
  .replace(/\s+/g, " ")
  .trim();

console.log(`VISIBLE TEXT (${target}) - ${text.length} chars\n`);
console.log(text.slice(0, 1600));

const srcs = [...new Set([...html.matchAll(/<img[^>]+src="([^"]+)"/g)].map((m) => m[1]))];
console.log("\nIMAGE SRCS:");
for (const src of srcs) {
  const local = src.replace(/^https?:\/\/[^/]+/, "");
  const exists = fs.existsSync(path.join("build", local.replace(/^\//, "")));
  console.log(`  ${exists ? "ok  " : "MISS"} ${src}`);
}

const alts = [...html.matchAll(/<img[^>]+alt="([^"]*)"/g)].map((m) => m[1]);
console.log(`\nALT TEXTS (${alts.length}):`);
alts.forEach((a) => console.log(`  - ${a}`));

const links = [...new Set([...html.matchAll(/href="(\/[^"#]*)"/g)].map((m) => m[1]))];
console.log(`\nINTERNAL LINKS (${links.length}): ${links.join(" ")}`);
