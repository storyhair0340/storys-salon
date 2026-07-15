// Visual QA: instant-scroll through the page so IntersectionObserver reveals fire,
// then capture full page + key viewport shots.
import { chromium } from 'playwright';

const BASE = process.env.QA_URL || 'http://localhost:3777';
const browser = await chromium.launch();

async function sweep(page) {
  await page.evaluate(async () => {
    document.documentElement.style.scrollBehavior = 'auto';
    await new Promise((res) => {
      let y = 0;
      const step = () => {
        y += 500;
        window.scrollTo({ top: y, behavior: 'instant' });
        if (y < document.body.scrollHeight) setTimeout(step, 140);
        else { window.scrollTo({ top: 0, behavior: 'instant' }); setTimeout(res, 900); }
      };
      step();
    });
  });
  await page.waitForTimeout(600);
}

const desktop = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await desktop.goto(BASE, { waitUntil: 'networkidle', timeout: 30000 });
await sweep(desktop);
await desktop.screenshot({ path: 'docs/design-references/v2-desktop-full.png', fullPage: true });

// live viewport shots at key sections
for (const [y, label] of [[3900, 'whyband'], [5000, 'director1'], [6000, 'director2'], [7600, 'reviews-stack']]) {
  await desktop.evaluate((yy) => window.scrollTo({ top: yy, behavior: 'instant' }), y);
  await desktop.waitForTimeout(1000);
  await desktop.screenshot({ path: `docs/design-references/v2-live-${label}.png` });
}

const mobile = await browser.newPage({ viewport: { width: 390, height: 844 } });
await mobile.goto(BASE, { waitUntil: 'networkidle', timeout: 30000 });
await sweep(mobile);
await mobile.screenshot({ path: 'docs/design-references/v2-mobile-full.png', fullPage: true });

await browser.close();
console.log('QA shots done');
