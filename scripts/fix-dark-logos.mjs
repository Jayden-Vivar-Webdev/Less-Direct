import sharp from "sharp";
import path from "node:path";

const ROOT = process.cwd();
const OUT_DIR = path.join(ROOT, "public", "images", "brands");

// These logos ship as white/red artwork on a SOLID BLACK background.
// We key out near-black pixels to transparent and keep the original colors,
// which reads cleanly on the dark hero.
const jobs = [
  {
    src: path.join(ROOT, "public", "images", "dahua-logo.png"),
    out: path.join(OUT_DIR, "dahua-white.png"),
  },
  {
    src: path.join(ROOT, "public", "images", "wizsense-logo.png"),
    out: path.join(OUT_DIR, "wizsense-white.png"),
  },
];

// Pixels darker than this (max channel) become fully transparent.
const BLACK_CUTOFF = 60;
// Pixels brighter than this (max channel) stay fully opaque.
const KEEP_ABOVE = 110;

async function processLogo({ src, out }) {
  const img = sharp(src).ensureAlpha();
  const { data, info } = await img
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width, height, channels } = info;
  const px = Buffer.from(data);

  for (let i = 0; i < px.length; i += channels) {
    const r = px[i];
    const g = px[i + 1];
    const b = px[i + 2];
    const maxC = Math.max(r, g, b);

    let alpha;
    if (maxC <= BLACK_CUTOFF) {
      alpha = 0;
    } else if (maxC >= KEEP_ABOVE) {
      alpha = 255;
    } else {
      // Smooth ramp through the transition zone for anti-aliased edges.
      alpha = Math.round(
        ((maxC - BLACK_CUTOFF) / (KEEP_ABOVE - BLACK_CUTOFF)) * 255,
      );
    }
    px[i + 3] = alpha;
  }

  await sharp(px, { raw: { width, height, channels } })
    .png()
    .trim()
    .toFile(out);

  console.log(`[v0] processed ${path.basename(out)} (${width}x${height})`);
}

for (const job of jobs) {
  await processLogo(job);
}
console.log("[v0] done");
