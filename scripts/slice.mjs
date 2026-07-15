import { chromium } from 'playwright';
import fs from 'node:fs';

const [,, input, outPrefix, sliceHArg] = process.argv;
const sliceH = Number(sliceHArg) || 1400;
const b64 = fs.readFileSync(input).toString('base64');
const browser = await chromium.launch();
const page = await browser.newPage();
const slices = await page.evaluate(async ({ b64, sliceH }) => {
  const img = new Image();
  img.src = 'data:image/png;base64,' + b64;
  await img.decode();
  const out = [];
  for (let y = 0; y < img.height; y += sliceH) {
    const h = Math.min(sliceH, img.height - y);
    const c = document.createElement('canvas');
    c.width = img.width; c.height = h;
    c.getContext('2d').drawImage(img, 0, y, img.width, h, 0, 0, img.width, h);
    out.push(c.toDataURL('image/png').split(',')[1]);
  }
  return out;
}, { b64, sliceH });
slices.forEach((s, i) => {
  fs.writeFileSync(`${outPrefix}-${String(i).padStart(2, '0')}.png`, Buffer.from(s, 'base64'));
});
await browser.close();
console.log(`wrote ${slices.length} slices`);
