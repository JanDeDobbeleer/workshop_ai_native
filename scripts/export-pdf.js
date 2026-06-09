#!/usr/bin/env node
// Builds the export entry and exports all slides to a PDF.
// Usage: npm run export
//        npm run export -- --output path/to/output.pdf
//        npm run export -- --settle-ms 300

import { execFileSync, execSync } from 'child_process';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const input = path.join(root, 'dist-export', 'index-export.html');
const exportScript = path.join(__dirname, 'export-slides.cjs');

// Allow --output override via CLI args
const args = process.argv.slice(2);
const outputIdx = args.indexOf('--output');

if (outputIdx !== -1) {
  const outputArg = args[outputIdx + 1];

  if (!outputArg || outputArg.startsWith('--')) {
    console.error('Error: --output requires a file path.');
    process.exit(1);
  }
}

const output = outputIdx !== -1 ? path.resolve(args[outputIdx + 1]) : path.join(root, 'workshop.pdf');

// Forward any extra flags to the export script (e.g. --settle-ms, --chrome)
const extraPassthroughArgs = args.filter((_, i) => {
  if (args[i - 1] === '--output') return false;
  if (args[i] === '--output') return false;
  return true;
});

console.log('Building export version...');
execSync('npm run build:export', { cwd: root, stdio: 'inherit' });

console.log('\nExporting slides to PDF...');
execFileSync(
  process.execPath,
  [exportScript, '--input', input, '--output', output, ...extraPassthroughArgs],
  { cwd: root, stdio: 'inherit' },
);

console.log(`\n✓ PDF saved to: ${output}`);
