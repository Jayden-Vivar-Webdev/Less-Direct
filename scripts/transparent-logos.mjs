import sharp from "sharp";
import path from "node:path";

const dir = "public/images/brands";

// bg: "white" -> remove near-white background, keep original colors
// bg: "black" -> remove near-black background, keep original colors
const jobs = [
  { in: "clipsal.png", out: "clipsal-color.png", bg: "white" },
  { in: "schneider.png", out: "schneider-color.png", bg: "white" },
  { in: "hpm.png", out: "hpm-color.png", bg: "white" },
  { in: "martec.png", out: "martec-color.png", bg: "white" },
  { in: "matelec.jpeg", out: "matelec-color.png", bg: "white" },
  { in: "havit.webp", out: "havit-color.png", bg: "white" },
  { in: "eglo.png", out: "eglo-color.png", bg: "white" },
  { in: "cla.webp", out: "cla-color.png", bg: "white" },
  { in: "beacon.png", out: "beacon-color.png", bg: "white" },
  { in: "sungrow.png", out: "sungrow-color.png", bg: "white" },
  { in: "../dahua-logo.png", out: "dahua-color.png", bg: "black" },
  { in: "../wizsense-logo.png", out: "wizsense-color.png", bg: "black" },
];

// Ramp thresholds for keying. Keep anti-aliased edges via a soft band.
const WHITE_HARD = 205; // min-channel <= this => fully opaque (keep)
const WHITE_SOFT = 240; // min-channel >= this => fully transparent
const BLACK_HARD = 60; // max-channel >= this => fully opaque (keep)
const BLACK_SOFT = 22; // max-channel <= this => fully transparent

for (const job of jobs) {
  const src = path.join(dir, job.in);
  const dst = path.join(dir, job.out);

  const { data, info } = await sharp(src)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width, height, channels } = info;
  const out = Buffer.alloc(width * height * 4);

  for (let i = 0; i < width * height; i++) {
    const s = i * channels;
    const r = data[s];
    const g = data[s + 1];
    const b = data[s + 2];
    const origA = channels === 4 ? data[s + 3] : 255;

    let maskA;
    if (job.bg === "white") {
      const minC = Math.min(r, g, b);
      if (minC <= WHITE_HARD) maskA = 255;
      else if (minC >= WHITE_SOFT) maskA = 0;
      else
        maskA = Math.round(
          (1 - (minC - WHITE_HARD) / (WHITE_SOFT - WHITE_HARD)) * 255,
        );
    } else {
      const maxC = Math.max(r, g, b);
      if (maxC >= BLACK_HARD) maskA = 255;
      else if (maxC <= BLACK_SOFT) maskA = 0;
      else
        maskA = Math.round(
          ((maxC - BLACK_SOFT) / (BLACK_HARD - BLACK_SOFT)) * 255,
        );
    }

    const a = Math.round((maskA * origA) / 255);
    const d = i * 4;
    out[d] = r;
    out[d + 1] = g;
    out[d + 2] = b;
    out[d + 3] = a;
  }

  await sharp(out, { raw: { width, height, channels: 4 } })
    .png()
    .toFile(dst);

  console.log(`[v0] wrote ${dst}`);
}
