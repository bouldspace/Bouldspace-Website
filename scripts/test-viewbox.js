const fs = require('fs');
const sharp = require('sharp');

async function testViewBox() {
  const svg = fs.readFileSync('public/logos/logo-wordmark-nobg.svg', 'utf8');
  const modifiedSvg = svg
    .replace('viewBox="0 0 1542 304"', 'viewBox="115 75 1315 150"')
    .replace('width="1542" height="304"', 'width="1315" height="150"');

  const meta = await sharp(Buffer.from(modifiedSvg)).metadata();
  console.log('Modified metadata:', meta);

  const { data, info } = await sharp(Buffer.from(modifiedSvg)).raw().toBuffer({ resolveWithObject: true });
  let minX = info.width, minY = info.height, maxX = 0, maxY = 0;
  for (let y = 0; y < info.height; y++) {
    for (let x = 0; x < info.width; x++) {
      const idx = (y * info.width + x) * info.channels;
      if (data[idx + 3] > 10) {
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
    }
  }
  console.log('New Bounding box:', { minX, minY, maxX, maxY });
  console.log('Padding top:', minY, 'Padding bottom:', info.height - maxY);
  console.log('Padding left:', minX, 'Padding right:', info.width - maxX);
}

testViewBox().catch(console.error);
