#!/usr/bin/env node
/*
 * Simple sitemap generator for Angular apps.
 * Reads paths from scripts/sitemap.config.json and writes src/assets/sitemap.xml
 * Usage:
 *   SITEMAP_BASE_URL=https://provoltelectricalservices.com node scripts/generate-sitemap.js
 */
const fs = require("fs");
const path = require("path");

const BASE_URL =
  process.env.SITEMAP_BASE_URL || "https://provoltelectricalservices.com";
const nowDate = new Date().toISOString().split("T")[0]; // YYYY-MM-DD

const configPath = path.resolve(__dirname, "sitemap.config.json");
if (!fs.existsSync(configPath)) {
  console.error(`Missing sitemap config: ${configPath}`);
  process.exit(1);
}

/** @type {{ paths: string[] }} */
const config = JSON.parse(fs.readFileSync(configPath, "utf-8"));

function normalizePath(p) {
  if (!p) return "";
  let out = p.trim();
  if (!out.startsWith("/")) out = "/" + out;
  out = out.replace(/\/$/, ""); // remove trailing slash (except root)
  if (out === "") out = "/";
  return out;
}

function priorityFor(pathname) {
  if (pathname === "/") return 1.0;
  if (pathname === "/home") return 0.9;
  if (pathname.startsWith("/electrical-services")) return 0.8;
  if (pathname.startsWith("/service-areas")) return 0.7;
  return 0.6;
}

const uniquePaths = Array.from(
  new Set(
    (config.paths || [])
      .map(normalizePath)
      .filter((p) => p && p !== "/**" && p !== "/*" && p !== "**")
  )
);

const urls = uniquePaths.map((p) => {
  const loc = `${BASE_URL}${p === "/" ? "" : p}`;
  const priority = priorityFor(p).toFixed(1);
  return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${nowDate}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>${priority}</priority>\n  </url>`;
});

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join(
  "\n"
)}\n</urlset>\n`;

const outDir = path.resolve(process.cwd(), "src/assets");
const outFile = path.join(outDir, "sitemap.xml");

fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(outFile, xml, "utf-8");
console.log(`Sitemap written: ${outFile}`);
console.log(`Base URL: ${BASE_URL}`);

// Optionally ensure robots.txt exists and points to sitemap
const robotsPath = path.join(outDir, "robots.txt");
if (!fs.existsSync(robotsPath)) {
  const robots = `User-agent: *\nAllow: /\nSitemap: ${BASE_URL}/sitemap.xml\n`;
  fs.writeFileSync(robotsPath, robots, "utf-8");
  console.log(`Robots created: ${robotsPath}`);
} else {
  console.log(`Robots exists: ${robotsPath}`);
}
