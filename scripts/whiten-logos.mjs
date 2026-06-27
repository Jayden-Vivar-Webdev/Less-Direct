import sharp from "sharp";
import path from "node:path";

const dir = "public/images/brands";

// source -> output (always .png so we keep alpha)
const jobs = [
  { in: "clipsal.png", out: "clipsal-white.png" },
  { in: "schneider.png", out: "schneider-white.png" },
  { in: "hpm.png", out: "hpm-white.png" },
  { in: "martec.png", out: "martec-white.png" },
  { in: "matelec.jpeg", out: "matelec-white.png" },
  { in: "havit.webp", out: "havit-white.png" },
  { in: "eglo.png", out: "eglo-white.png" },
  { in: "cla.webp", out: "cla-white.png" },
  { in: "beacon.png", out: "beacon-white.png" },
  { in: "sungrow.png", out: "sungrow-white.png" },
  { in: "../dahua-logo.png", out: "dahua-white.png" },
  { in: "../wizsense-logo.png", out: "wizsense-white.png" },
];

// Pixels near white become transparent; everything else becomes solid white.
// A small ramp near white preserves anti-aliased edges.
const HARD = 200; // <= this min-channel value => fully opaque
const SOFT = 238; // >= this min-channel value => fully transparent

for (const job of jobs) {
  const src = path.join(dir, job.in);
  const dst = path.join(dir, job.out);

  const img = sharp(src).ensureAlpha();
  const { data, info } = await img
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

    const minC = Math.min(r, g, b);
    let maskA;
    if (minC <= HARD) maskA = 255;
    else if (minC >= SOFT) maskA = 0;
    else maskA = Math.round((1 - (minC - HARD) / (SOFT - HARD)) * 255);

    const a = Math.round((maskA * origA) / 255);
    const d = i * 4;
    out[d] = 255;
    out[d + 1] = 255;
    out[d + 2] = 255;
    out[d + 3] = a;
  }

  await sharp(out, { raw: { width, height, channels: 4 } })
    .png()
    .toFile(dst);

  console.log(`[v0] wrote ${dst}`);
}
