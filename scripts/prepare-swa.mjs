#!/usr/bin/env node
// Assembles swa-dist/ for Azure Static Web Apps:
//   swa-dist/            public workshop site (swa/site) + favicon
//   swa-dist/deck/       the gated deck (allow-listed files from dist/)
//   swa-dist/staticwebapp.config.json
// Run after `npm run build`.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const distDir = path.join(root, 'dist');
const outDir = path.join(root, 'swa-dist');
const deckOutDir = path.join(outDir, 'deck');

// Only these build outputs are deployed. Anything else in dist/ (sitemap,
// robots.txt, llms*.txt, stray files) is deliberately left out.
const DECK_ALLOW_LIST = ['index.html', 'assets', 'favicon.svg', 'og-image.png'];

if (!fs.existsSync(path.join(distDir, 'index.html'))) {
  console.error('dist/index.html not found. Run `npm run build` first.');
  process.exit(1);
}

fs.rmSync(outDir, { recursive: true, force: true });
fs.cpSync(path.join(root, 'swa/site'), outDir, { recursive: true });
fs.mkdirSync(deckOutDir, { recursive: true });

for (const entry of DECK_ALLOW_LIST) {
  const from = path.join(distDir, entry);
  if (!fs.existsSync(from)) {
    console.error(`Expected build output missing: dist/${entry}`);
    process.exit(1);
  }
  fs.cpSync(from, path.join(deckOutDir, entry), { recursive: true });
}

// Azure serves /deck (no trailing slash) without redirecting, so the deck's relative
// asset URLs (base './') would resolve against /. Pin them to /deck/ in the SWA copy only.
const deckIndex = path.join(deckOutDir, 'index.html');
const html = fs.readFileSync(deckIndex, 'utf8');
if (!/<head[^>]*>/i.test(html)) {
  console.error('dist/index.html has no <head>; cannot inject <base>.');
  process.exit(1);
}
fs.writeFileSync(deckIndex, html.replace(/<head([^>]*)>/i, '<head$1>\n    <base href="/deck/" />'));

// The deck's index.html links /favicon.svg (absolute), so serve it from the root too.
fs.copyFileSync(path.join(distDir, 'favicon.svg'), path.join(outDir, 'favicon.svg'));

fs.copyFileSync(
  path.join(root, 'swa/staticwebapp.config.json'),
  path.join(outDir, 'staticwebapp.config.json'),
);

// Guard: never ship source maps.
const stack = [outDir];
while (stack.length) {
  const dir = stack.pop();
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) stack.push(p);
    else if (e.name.endsWith('.map')) {
      console.error(`Refusing to deploy source map: ${path.relative(root, p)}`);
      process.exit(1);
    }
  }
}

console.log('swa-dist ready');
