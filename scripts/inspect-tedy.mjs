// Phase 1 Reconnaissance: tedy.app design extraction via getComputedStyle
import { chromium } from 'playwright';
import fs from 'node:fs';

const URL = 'https://www.tedy.app/ca/en/';
const OUT = 'docs/research';
fs.mkdirSync(`${OUT}/components`, { recursive: true });
fs.mkdirSync('docs/design-references', { recursive: true });

const browser = await chromium.launch();

async function capture(width, height, label) {
  const page = await browser.newPage({ viewport: { width, height } });
  await page.goto(URL, { waitUntil: 'networkidle', timeout: 60000 });
  await page.waitForTimeout(3000);
  // trigger lazy-loaded content by scrolling through the page
  await page.evaluate(async () => {
    await new Promise((resolve) => {
      let y = 0;
      const step = () => {
        y += 600;
        window.scrollTo(0, y);
        if (y < document.body.scrollHeight) setTimeout(step, 120);
        else { window.scrollTo(0, 0); setTimeout(resolve, 800); }
      };
      step();
    });
  });
  await page.waitForTimeout(1500);
  await page.screenshot({ path: `docs/design-references/tedy-${label}-full.png`, fullPage: true });
  return page;
}

const page = await capture(1440, 900, 'desktop');

// ---- Global token extraction ----
const globals = await page.evaluate(() => {
  const rootCS = getComputedStyle(document.documentElement);
  const bodyCS = getComputedStyle(document.body);

  // CSS custom properties on :root
  const rootVars = {};
  for (const sheet of document.styleSheets) {
    let rules; try { rules = sheet.cssRules; } catch { continue; }
    for (const rule of rules) {
      if (rule.selectorText === ':root' || rule.selectorText === 'html') {
        for (const prop of rule.style) {
          if (prop.startsWith('--')) rootVars[prop] = rule.style.getPropertyValue(prop).trim();
        }
      }
    }
  }

  // color census across elements
  const colorCount = {};
  const fontCount = {};
  document.querySelectorAll('*').forEach((el) => {
    const cs = getComputedStyle(el);
    if (el.getClientRects().length === 0) return;
    [cs.color, cs.backgroundColor, cs.borderTopColor].forEach((c) => {
      if (c && c !== 'rgba(0, 0, 0, 0)') colorCount[c] = (colorCount[c] || 0) + 1;
    });
    const f = cs.fontFamily;
    if (f) fontCount[f] = (fontCount[f] || 0) + 1;
  });
  const topColors = Object.entries(colorCount).sort((a, b) => b[1] - a[1]).slice(0, 30);
  const fonts = Object.entries(fontCount).sort((a, b) => b[1] - a[1]).slice(0, 10);

  // font links
  const fontLinks = [...document.querySelectorAll('link[rel="stylesheet"], link[rel="preload"][as="font"], link[href*="font"]')].map(l => l.href);

  // typography samples
  const typo = {};
  const samples = { h1: 'h1', h2: 'h2', h3: 'h3', body: 'p', button: 'a[class*="button"], button, .btn, a[class*="btn"]', nav: 'nav a, header a' };
  for (const [k, sel] of Object.entries(samples)) {
    const el = document.querySelector(sel);
    if (!el) continue;
    const cs = getComputedStyle(el);
    typo[k] = {
      text: el.textContent.trim().slice(0, 60),
      fontFamily: cs.fontFamily.split(',')[0], fontSize: cs.fontSize, fontWeight: cs.fontWeight,
      lineHeight: cs.lineHeight, letterSpacing: cs.letterSpacing, color: cs.color,
      textTransform: cs.textTransform, borderRadius: cs.borderRadius, backgroundColor: cs.backgroundColor, padding: cs.padding,
    };
  }

  return {
    bodyFont: bodyCS.fontFamily, bodyColor: bodyCS.color, bodyBg: bodyCS.backgroundColor,
    bodyFontSize: bodyCS.fontSize, bodyLineHeight: bodyCS.lineHeight,
    rootFontSize: rootCS.fontSize, rootVars, topColors, fonts, fontLinks, typo,
    smoothScroll: !!document.querySelector('.lenis, [data-lenis], .locomotive-scroll') || getComputedStyle(document.documentElement).scrollBehavior,
    title: document.title,
  };
});
fs.writeFileSync(`${OUT}/GLOBAL_TOKENS.json`, JSON.stringify(globals, null, 2));

// ---- Page topology: top-level sections ----
const topology = await page.evaluate(() => {
  const main = document.querySelector('main') || document.body;
  const sections = [];
  const candidates = main.querySelectorAll(':scope > *, :scope > div > section, section, header, footer');
  const seen = new Set();
  [...document.querySelectorAll('header, main > *, main section, footer, nav')].forEach((el) => {
    if (seen.has(el)) return;
    const r = el.getBoundingClientRect();
    const abs = r.top + window.scrollY;
    if (r.height < 40) return;
    seen.add(el);
    const cs = getComputedStyle(el);
    sections.push({
      tag: el.tagName.toLowerCase(),
      id: el.id || null,
      classes: (el.className?.toString() || '').slice(0, 120),
      top: Math.round(abs), height: Math.round(r.height),
      position: cs.position, zIndex: cs.zIndex, backgroundColor: cs.backgroundColor,
      firstText: el.textContent.trim().replace(/\s+/g, ' ').slice(0, 120),
      imgCount: el.querySelectorAll('img').length,
      svgCount: el.querySelectorAll('svg').length,
      videoCount: el.querySelectorAll('video').length,
    });
  });
  sections.sort((a, b) => a.top - b.top);
  return { pageHeight: document.body.scrollHeight, sections: sections.slice(0, 60) };
});
fs.writeFileSync(`${OUT}/PAGE_TOPOLOGY.json`, JSON.stringify(topology, null, 2));

// ---- Assets ----
const assets = await page.evaluate(() => ({
  images: [...document.querySelectorAll('img')].map(img => ({
    src: img.currentSrc || img.src, alt: img.alt, w: img.naturalWidth, h: img.naturalHeight,
    position: getComputedStyle(img).position, borderRadius: getComputedStyle(img).borderRadius,
  })).slice(0, 80),
  videos: [...document.querySelectorAll('video')].map(v => ({ src: v.src || v.querySelector('source')?.src, autoplay: v.autoplay, loop: v.loop })),
  bgImages: [...document.querySelectorAll('*')].filter(el => {
    const bg = getComputedStyle(el).backgroundImage;
    return bg && bg !== 'none' && el.getClientRects().length;
  }).map(el => ({ el: el.tagName + '.' + (el.className?.toString().split(' ')[0] || ''), bg: getComputedStyle(el).backgroundImage.slice(0, 200) })).slice(0, 40),
  svgCount: document.querySelectorAll('svg').length,
  favicons: [...document.querySelectorAll('link[rel*="icon"]')].map(l => l.href),
}));
fs.writeFileSync(`${OUT}/ASSETS.json`, JSON.stringify(assets, null, 2));

await page.close();

// mobile screenshot
const mpage = await capture(390, 844, 'mobile');
await mpage.close();

await browser.close();
console.log('DONE. pageHeight=' + topology.pageHeight + ', sections=' + topology.sections.length);
