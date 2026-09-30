#!/usr/bin/env node
// Drift guard for the deck knowledge base (src/knowledge/**/*.md).
//
// It derives the section order and per-section slide counts straight from
// src/slides/deck.ts + src/sections/*.tsx, then checks that every knowledge
// file's front-matter resolves to a real slide. This is the build-time,
// fail-loud counterpart to the dev-only console.warn in src/utils/knowledgeBase.ts:
// if a slide is reordered/removed and a knowledge file's ordinal goes stale,
// `npm run build` fails instead of silently mis-mapping.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const sectionsDir = path.join(root, 'src/sections');
const knowledgeDir = path.join(root, 'src/knowledge');
const deckPath = path.join(root, 'src/slides/deck.ts');

const fail = (msg) => {
  problems.push(msg);
};
const problems = [];

// 1. Ordered [{ name, varName }] from deck.ts `sections` array.
const deck = fs.readFileSync(deckPath, 'utf8');
const sectionsBlock = deck.slice(deck.indexOf('sections: Section[] = ['));
const order = [...sectionsBlock.matchAll(/\{\s*name:\s*'([^']*)'[^}]*?slides:\s*([A-Za-z0-9_]+|\[\])/g)]
  .map((m) => ({ name: m[1], varName: m[2] }));

if (order.length === 0) {
  console.error('check-knowledge: could not parse sections from deck.ts');
  process.exit(1);
}

// 2. varName -> section file, by locating `export const <var>`.
const sectionFiles = fs.readdirSync(sectionsDir).filter((f) => f.endsWith('.tsx'));
const fileForVar = new Map();
for (const f of sectionFiles) {
  const src = fs.readFileSync(path.join(sectionsDir, f), 'utf8');
  for (const m of src.matchAll(/export const (\w+Slides)\b/g)) {
    fileForVar.set(m[1], f);
  }
}

// 3. Per-section slide count (count slide objects via anchored `title:`),
//    cumulative start index in deck order.
const countTitles = (src) => (src.match(/^\s*title:/gm) || []).length;
const sectionInfo = new Map(); // name -> { count, start }
let cursor = 0;
for (const { name, varName } of order) {
  let count = 0;
  if (varName !== '[]') {
    const file = fileForVar.get(varName);
    if (!file) {
      fail(`deck.ts references ${varName} but no section file exports it`);
    } else {
      count = countTitles(fs.readFileSync(path.join(sectionsDir, file), 'utf8'));
    }
  }
  sectionInfo.set(name, { count, start: cursor });
  cursor += count;
}

// 4. Front-matter parser mirroring src/utils/knowledgeBase.ts.
const stripQuotes = (v) =>
  v.length >= 2 && (v[0] === '"' || v[0] === "'") && v[v.length - 1] === v[0] ? v.slice(1, -1) : v;

const parseFrontMatter = (raw) => {
  const n = raw.replace(/\r\n/g, '\n');
  if (!n.startsWith('---\n')) return { meta: {}, body: n.trim() };
  const lines = n.split('\n');
  const meta = {};
  let i = 1;
  for (; i < lines.length; i += 1) {
    if (lines[i].trim() === '---') {
      i += 1;
      break;
    }
    const c = lines[i].indexOf(':');
    if (c === -1) continue;
    const k = lines[i].slice(0, c).trim();
    const v = stripQuotes(lines[i].slice(c + 1).trim());
    if (k) meta[k] = v;
  }
  return { meta, body: lines.slice(i).join('\n').trim() };
};

const walk = (dir) => {
  const out = [];
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...walk(p));
    else if (e.name.endsWith('.md') && e.name !== 'README.md') out.push(p);
  }
  return out;
};

// 5. Validate each knowledge file.
const files = fs.existsSync(knowledgeDir) ? walk(knowledgeDir) : [];
let resolved = 0;
for (const p of files) {
  const rel = path.relative(root, p).replace(/\\/g, '/');
  const { meta, body } = parseFrontMatter(fs.readFileSync(p, 'utf8'));
  if (!meta.section) {
    fail(`${rel}: missing "section"`);
    continue;
  }
  if (!sectionInfo.has(meta.section)) {
    fail(`${rel}: unknown section "${meta.section}"`);
    continue;
  }
  if (!body || body.length < 40) fail(`${rel}: body is empty or too short`);
  const scope = meta.scope === 'section' ? 'section' : 'slide';
  if (scope === 'slide') {
    const { count } = sectionInfo.get(meta.section);
    const slide = parseInt(meta.slide, 10);
    if (!Number.isInteger(slide) || slide < 1 || slide > count) {
      fail(`${rel}: slide ${meta.slide} out of range for "${meta.section}" (1-${count})`);
      continue;
    }
  }
  resolved += 1;
}

if (problems.length > 0) {
  console.error(`check-knowledge: ${problems.length} problem(s):`);
  for (const p of problems) console.error(`  - ${p}`);
  process.exit(1);
}
console.log(`check-knowledge: OK (${resolved} knowledge files resolve across ${order.length} sections)`);
