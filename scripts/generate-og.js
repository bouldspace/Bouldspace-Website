const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function createOgImage() {
  const width = 1200;
  const height = 630;

  // Prepare high-res logo from SVG
  const logoBuffer = await sharp('public/logos/logo-maskable-nobg.svg')
    .resize(200, 200, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();

  const logoBase64 = logoBuffer.toString('base64');

  // SVG composite overlay
  const svgOverlay = `
    <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="og-grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#C87A54" stroke-width="0.5" opacity="0.08" />
        </pattern>
        <radialGradient id="og-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#C87A54" stop-opacity="0.12" />
          <stop offset="100%" stop-color="#C87A54" stop-opacity="0" />
        </radialGradient>
      </defs>

      <!-- Grid Background -->
      <rect width="100%" height="100%" fill="#090B11" />
      <rect width="100%" height="100%" fill="url(#og-grid)" />
      <circle cx="600" cy="315" r="500" fill="url(#og-glow)" />

      <!-- Outer Border Framing -->
      <rect x="30" y="30" width="1140" height="570" fill="none" stroke="#C87A54" stroke-width="1.5" opacity="0.3" />
      <rect x="40" y="40" width="1120" height="550" fill="none" stroke="#C87A54" stroke-width="0.5" opacity="0.15" />

      <!-- Corner Brackets -->
      <path d="M 20 50 L 20 20 L 50 20" fill="none" stroke="#C87A54" stroke-width="3" />
      <path d="M 1180 50 L 1180 20 L 1150 20" fill="none" stroke="#C87A54" stroke-width="3" />
      <path d="M 20 580 L 20 610 L 50 610" fill="none" stroke="#C87A54" stroke-width="3" />
      <path d="M 1180 580 L 1180 610 L 1150 610" fill="none" stroke="#C87A54" stroke-width="3" />

      <!-- Category Pill -->
      <g transform="translate(500, 95)">
        <rect x="-160" y="0" width="320" height="32" rx="16" fill="#C87A54" fill-opacity="0.1" stroke="#C87A54" stroke-width="1" stroke-opacity="0.4" />
        <text x="0" y="21" font-family="sans-serif" font-size="11" font-weight="bold" fill="#C87A54" letter-spacing="4" text-anchor="middle">ARCHITECTURAL STUDIO</text>
      </g>

      <!-- Embedded Logo -->
      <image href="data:image/png;base64,${logoBase64}" x="500" y="150" width="200" height="200" />

      <!-- Main Brand Name -->
      <text x="600" y="410" font-family="serif" font-size="64" font-weight="normal" fill="#F7EBE1" letter-spacing="6" text-anchor="middle">BOULDSPACE</text>

      <!-- Headline -->
      <text x="600" y="460" font-family="serif" font-size="24" font-weight="normal" fill="#CDC5C0" letter-spacing="1" text-anchor="middle">Visionary Design. Precision Execution.</text>

      <!-- Subtitle Capabilities -->
      <text x="600" y="515" font-family="sans-serif" font-size="13" font-weight="600" fill="#C87A54" letter-spacing="2" text-anchor="middle">ARCHITECTURE • INTERIOR CURATION • TURNKEY BUILD • PMC</text>

      <!-- Domain Indicator -->
      <text x="600" y="555" font-family="sans-serif" font-size="11" font-weight="bold" fill="#CDC5C0" opacity="0.6" letter-spacing="3" text-anchor="middle">BOULDSPACE.COM</text>
    </svg>
  `;

  const ogBuffer = await sharp(Buffer.from(svgOverlay))
    .png({ quality: 95 })
    .toBuffer();

  // Save to target locations
  fs.writeFileSync(path.join('app', 'opengraph-image.png'), ogBuffer);
  fs.writeFileSync(path.join('app', 'twitter-image.png'), ogBuffer);
  fs.writeFileSync(path.join('public', 'og-image.png'), ogBuffer);
  console.log('OG image created successfully: 1200x630, size:', ogBuffer.length);
}

createOgImage().catch(console.error);
