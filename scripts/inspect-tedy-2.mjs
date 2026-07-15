// Phase 1b: live-scroll captures + per-component computed styles
import { chromium } from 'playwright';
import fs from 'node:fs';

const URL = 'https://www.tedy.app/ca/en/';
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.goto(URL, { waitUntil: 'networkidle', timeout: 60000 });
await page.waitForTimeout(2000);
// dismiss cookie banner
try { await page.click('text=Reject optional cookies', { timeout: 4000 }); } catch {}
await page.waitForTimeout(500);

// scroll-capture the regions that were blank in the full-page shot
const spots = [
  [2400, 'sec-video'], [3000, 'sec-3000'], [3600, 'sec-3600'], [4200, 'sec-4200'],
  [7200, 'sec-7200'], [7800, 'sec-7800'], [8400, 'sec-8400'], [9000, 'sec-9000'], [9600, 'sec-9600'],
];
for (const [y, label] of spots) {
  await page.evaluate((yy) => window.scrollTo({ top: yy, behavior: 'instant' }), y);
  await page.waitForTimeout(1600);
  await page.screenshot({ path: `docs/design-references/live-${label}.png` });
}

// header behavior: top vs scrolled
await page.evaluate(() => window.scrollTo({ top: 0, behavior: 'instant' }));
await page.waitForTimeout(800);
const headerSel = 'header, nav, [class*="nav"]';
function extractScript() {
  return (sel) => {
    const el = document.querySelector(sel);
    if (!el) return { error: 'not found: ' + sel };
    const props = ['fontSize','fontWeight','fontFamily','lineHeight','letterSpacing','color','textTransform',
      'backgroundColor','background','backgroundImage','padding','margin','width','height','maxWidth',
      'display','flexDirection','justifyContent','alignItems','gap','gridTemplateColumns',
      'borderRadius','border','boxShadow','position','top','zIndex','opacity','transform','transition','backdropFilter'];
    const cs = getComputedStyle(el);
    const out = { sel, tag: el.tagName, classes: (el.className?.toString() || '').slice(0, 100), text: el.textContent.trim().slice(0, 80) };
    props.forEach((p) => { const v = cs[p]; if (v && v !== 'none' && v !== 'normal' && v !== 'auto' && v !== 'rgba(0, 0, 0, 0)' && v !== '0px') out[p] = v; });
    const r = el.getBoundingClientRect();
    out.rect = { w: Math.round(r.width), h: Math.round(r.height) };
    return out;
  };
}

const headerTop = await page.evaluate(extractScript(), 'header');
await page.evaluate(() => window.scrollTo({ top: 800, behavior: 'instant' }));
await page.waitForTimeout(1200);
const headerScrolled = await page.evaluate(extractScript(), 'header');
await page.screenshot({ path: 'docs/design-references/live-header-scrolled.png' });

// component styles at top
await page.evaluate(() => window.scrollTo({ top: 0, behavior: 'instant' }));
await page.waitForTimeout(800);

const selectors = {
  heroCard: 'main section, main > div',
  h1: 'h1',
  heroSub: 'h1 ~ p, h1 + p',
  ctaPrimary: 'a[href*="demo"], a[class*="primary"]',
  navLink: 'header nav a, header a',
  logoRow: '[class*="logo"], [class*="trusted"], [class*="marquee"]',
};
const comps = {};
for (const [k, sel] of Object.entries(selectors)) {
  comps[k] = await page.evaluate(extractScript(), sel);
}

// hero: find the yellow card + big image containers precisely
const hero = await page.evaluate(() => {
  const els = [...document.querySelectorAll('div, section')].filter((el) => {
    const cs = getComputedStyle(el);
    const r = el.getBoundingClientRect();
    return r.width > 400 && r.height > 300 && cs.borderRadius !== '0px' && cs.backgroundColor !== 'rgba(0, 0, 0, 0)';
  }).slice(0, 6).map((el) => {
    const cs = getComputedStyle(el);
    const r = el.getBoundingClientRect();
    return { classes: (el.className?.toString() || '').slice(0, 80), bg: cs.backgroundColor, radius: cs.borderRadius, pad: cs.padding, w: Math.round(r.width), h: Math.round(r.height), x: Math.round(r.left), y: Math.round(r.top + scrollY) };
  });
  return els;
});

// buttons census
const buttons = await page.evaluate(() => {
  const seen = {};
  [...document.querySelectorAll('a, button')].forEach((el) => {
    const cs = getComputedStyle(el);
    if (cs.borderRadius === '0px' || el.getClientRects().length === 0) return;
    const key = cs.backgroundColor + '|' + cs.borderRadius + '|' + cs.padding;
    if (!seen[key]) seen[key] = { text: el.textContent.trim().slice(0, 30), bg: cs.backgroundColor, color: cs.color, radius: cs.borderRadius, padding: cs.padding, fontSize: cs.fontSize, fontWeight: cs.fontWeight, border: cs.border, boxShadow: cs.boxShadow === 'none' ? undefined : cs.boxShadow, count: 0 };
    seen[key].count++;
  });
  return Object.values(seen).filter((b) => b.count >= 1).slice(0, 15);
});

// section rhythm: paddings of main sections
const rhythm = await page.evaluate(() => {
  return [...document.querySelectorAll('section')].map((s) => {
    const cs = getComputedStyle(s);
    const r = s.getBoundingClientRect();
    return { classes: (s.className?.toString() || '').slice(0, 60), h: Math.round(r.height), pt: cs.paddingTop, pb: cs.paddingBottom, px: cs.paddingLeft, maxW: cs.maxWidth, bg: cs.backgroundColor, radius: cs.borderRadius, y: Math.round(r.top + scrollY) };
  }).filter((s) => s.h > 60);
});

fs.writeFileSync('docs/research/COMPONENT_STYLES.json', JSON.stringify({ headerTop, headerScrolled, comps, hero, buttons, rhythm }, null, 2));
await browser.close();
console.log('DONE');
