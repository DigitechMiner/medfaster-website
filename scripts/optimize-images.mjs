// Converts images referenced in the code to sized WebP files (next to the originals).
// Run: node scripts/optimize-images.mjs   (then point the code at the .webp files)
import sharp from "sharp";
import fs from "node:fs";
import path from "node:path";
import { execSync } from "node:child_process";

const root = process.cwd();
const code = execSync("grep -rhoE \"/(images|img|icon)/[A-Za-z0-9_./-]+\\.(png|jpe?g|svg)\" app components lib utils", { encoding: "utf8" })
  .split("\n").filter(Boolean);
const refs = [...new Set(code)];

// Max output width (≈2x the largest rendered size) by path
function maxWidth(p) {
  if (/\/team\//.test(p)) return 800;
  if (/testimonials\//.test(p)) return 256;
  if (/qr-|badge-/.test(p)) return null; // keep crisp as-is
  if (/\/patterns\//.test(p)) return 1600;
  if (/dashboard-hero|card-photo|hero-image-2|confidence|medical-team/.test(p)) return 2000;
  if (/\/dashboard\//.test(p)) return 1400;
  if (/verified-card|mobile-screen/.test(p)) return 1200;
  if (/\/features\/|mobile-address/.test(p)) return 900;
  return 1200;
}
const isScreen = (p) => /dashboard|features|verified-card|mobile-|confidence/.test(p);

const results = [];
for (const ref of refs) {
  const file = path.join(root, "public", ref);
  if (!fs.existsSync(file)) continue;
  const isSvg = file.endsWith(".svg");
  if (isSvg && !fs.readFileSync(file, "utf8").includes("data:image")) continue; // real vector SVG
  const width = maxWidth(ref);
  if (width === null) continue;
  const out = file.replace(/\.(png|jpe?g|svg)$/i, ".webp");
  let img;
  if (isSvg) {
    const meta = await sharp(file).metadata();
    const density = Math.min(600, Math.max(72, Math.ceil((72 * width) / meta.width)));
    img = sharp(file, { density });
  } else {
    img = sharp(file);
  }
  const meta = await img.metadata();
  const pipeline = img.resize({ width: Math.min(width, meta.width), withoutEnlargement: true })
    .webp({ quality: isScreen(ref) ? 85 : 80, effort: 6, alphaQuality: 90 });
  const info = await pipeline.toFile(out);
  const before = fs.statSync(file).size;
  results.push({ ref, before, after: info.size, w: info.width, h: info.height });
}
let tb = 0, ta = 0;
for (const r of results) { tb += r.before; ta += r.after; console.log(`${(r.before/1024).toFixed(0).padStart(7)} KB -> ${(r.after/1024).toFixed(0).padStart(5)} KB  ${r.w}x${r.h}  ${r.ref}`); }
console.log(`TOTAL ${(tb/1048576).toFixed(1)} MB -> ${(ta/1048576).toFixed(1)} MB (${results.length} files)`);
