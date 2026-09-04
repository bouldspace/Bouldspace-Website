const fs = require('fs');
const path = require('path');

// 1. Optimize logo-wordmark-nobg.svg
// Original: viewBox="0 0 1542 304" width="1542" height="304"
// Content: minX: 121, minY: 80, maxX: 1422, maxY: 219 (width: 1301, height: 139)
// New viewBox: "115 75 1315 150" width="1315" height="150"
function optimizeWordmark(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  content = content
    .replace(/viewBox="0 0 1542 304"/, 'viewBox="115 75 1315 150"')
    .replace(/width="1542" height="304"/, 'width="1315" height="150"');
  fs.writeFileSync(filePath, content);
  console.log('Optimized wordmark viewBox in', filePath);
}

// 2. Optimize logo-nobg.svg
// Original: viewBox="0 0 1600 1600" width="1600" height="1600"
// Content: minX: 146, minY: 240, maxX: 1447, maxY: 1401 (width: 1301, height: 1161)
// Centered square viewBox: "140 165 1315 1315"
function optimizeNobg(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  content = content
    .replace(/viewBox="0 0 1600 1600"/, 'viewBox="140 165 1315 1315"')
    .replace(/width="1600" height="1600"/, 'width="1315" height="1315"');
  fs.writeFileSync(filePath, content);
  console.log('Optimized logo-nobg viewBox in', filePath);
}

// 3. Optimize logo-maskable-nobg.svg for direct web UI display
// Original: viewBox="0 0 1600 1600"
// Content: minX: 461, minY: 374, maxX: 1141, maxY: 1226 (width: 680, height: 852)
// Square centered: "450 365 700 870"
function optimizeMaskableNobg(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  content = content
    .replace(/viewBox="0 0 1600 1600"/, 'viewBox="450 365 700 870"')
    .replace(/width="1600" height="1600"/, 'width="700" height="870"');
  fs.writeFileSync(filePath, content);
  console.log('Optimized logo-maskable-nobg viewBox in', filePath);
}

const paths = [
  'public/logos',
  'public/logo'
];

for (const dir of paths) {
  optimizeWordmark(path.join(dir, 'logo-wordmark-nobg.svg'));
  optimizeNobg(path.join(dir, 'logo-nobg.svg'));
  optimizeMaskableNobg(path.join(dir, 'logo-maskable-nobg.svg'));
}
