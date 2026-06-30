import sharp from "sharp"
import { fileURLToPath } from "node:url"
import path from "node:path"

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..")
const heroPath = path.join(root, "src/assets/hero-brand-lab.png")
const outputPath = path.join(root, "public/og-image.jpg")

const width = 1200
const height = 630

const textOverlay = Buffer.from(`
<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="fade" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#1C1C1C" stop-opacity="0.94"/>
      <stop offset="48%" stop-color="#1C1C1C" stop-opacity="0.82"/>
      <stop offset="72%" stop-color="#1C1C1C" stop-opacity="0.35"/>
      <stop offset="100%" stop-color="#1C1C1C" stop-opacity="0"/>
    </linearGradient>
  </defs>
  <rect width="${width}" height="${height}" fill="url(#fade)"/>
  <text x="72" y="118" fill="#1A9BAA" font-family="Georgia, serif" font-size="34" font-weight="600" letter-spacing="6">THE BRAND LAB</text>
  <text x="72" y="248" fill="#F8F5F0" font-family="Georgia, serif" font-size="58" font-weight="400">Building personal brands</text>
  <text x="72" y="322" fill="#F8F5F0" font-family="Georgia, serif" font-size="58" font-style="italic">people remember.</text>
  <rect x="72" y="358" width="64" height="3" fill="#1A9BAA"/>
  <text x="72" y="412" fill="#1A9BAA" font-family="Arial, Helvetica, sans-serif" font-size="30" font-weight="600">For founders &amp; CEOs</text>
  <text x="72" y="458" fill="#C8C4BC" font-family="Arial, Helvetica, sans-serif" font-size="24">Strategy · Content · Positioning</text>
  <text x="72" y="562" fill="#8BA3A7" font-family="Arial, Helvetica, sans-serif" font-size="22" letter-spacing="1">itsthebrandlab.com</text>
</svg>
`)

const hero = await sharp(heroPath)
  .resize(width, height, { fit: "cover", position: "right" })
  .toBuffer()

await sharp(hero)
  .composite([{ input: textOverlay, top: 0, left: 0 }])
  .jpeg({ quality: 90, mozjpeg: true })
  .toFile(outputPath)

console.log(`Generated ${outputPath}`)
