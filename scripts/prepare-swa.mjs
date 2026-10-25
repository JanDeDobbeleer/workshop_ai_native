#!/usr/bin/env node
// Assembles swa-dist/ for Azure Static Web Apps:
//   swa-dist/            public workshop site (swa/site)
//   swa-dist/deck/       the gated deck (Vite build output in dist/)
//   swa-dist/staticwebapp.config.json
// Run after `npm run build`.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const distDir = path.join(root, 'dist');
const outDir = path.join(root, 'swa-dist');

if (!fs.existsSync(path.join(distDir, 'index.html'))) {
  console.error('dist/index.html not found. Run `npm run build` first.');
  process.exit(1);
}

fs.rmSync(outDir, { recursive: true, force: true });
fs.cpSync(path.join(root, 'swa/site'), outDir, { recursive: true });
fs.cpSync(distDir, path.join(outDir, 'deck'), { recursive: true });
fs.copyFileSync(
  path.join(root, 'swa/staticwebapp.config.json'),
  path.join(outDir, 'staticwebapp.config.json'),
);

console.log('swa-dist ready');
