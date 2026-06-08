#!/usr/bin/env node
// Builds the export entry and exports all slides to a PDF.
// Usage: npm run export
//        npm run export -- --output path/to/output.pdf
//        npm run export -- --settle-ms 300

import { execSync } from 'child_process';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const input = path.join(root, 'dist-export', 'index-export.html');
const exportScript = path.join(__dirname, 'export-slides.cjs');

// Allow --output override via CLI args
const args = process.argv.slice(2);
const outputIdx = args.indexOf('--output');
const output = outputIdx !== -1 ? path.resolve(args[outputIdx + 1]) : path.join(root, 'workshop.pdf');

// Forward any extra flags to the export script (e.g. --settle-ms, --chrome)
const extraArgs = args.filter((_, i) => {
  if (args[i - 1] === '--output') return false;
  if (args[i] === '--output') return false;
  return true;
}).join(' ');

console.log('Building export version...');
execSync('npm run build:export', { cwd: root, stdio: 'inherit' });

console.log('\nExporting slides to PDF...');
const result = execSync(
  `node "${exportScript}" --input "${input}" --output "${output}" ${extraArgs}`,
  { cwd: root },
).toString().trim();

console.log(`\n✓ PDF saved to: ${result}`);
