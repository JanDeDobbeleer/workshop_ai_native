import fs from 'node:fs/promises';
import path from 'node:path';

const ALLOWED_ROOT_FILES = new Set(['README.md']);
const ALLOWED_DIRECTORIES = ['src', 'server', 'docs'];
const ALLOWED_EXTENSIONS = new Set(['.md', '.mdx', '.ts', '.tsx', '.css']);
const DENIED_SEGMENTS = new Set(['node_modules', 'dist', 'dist-export']);
const MAX_CHARS = 20_000;

// The model picks the path, so every check runs on the fully resolved real path.
const resolveAllowed = async (root: string, requested: string): Promise<string> => {
  const realRoot = await fs.realpath(root);
  const real = await fs.realpath(path.resolve(realRoot, requested));
  const relative = path.relative(realRoot, real);
  if (relative.startsWith('..') || path.isAbsolute(relative)) {
    throw new Error('Path is outside the repository.');
  }
  const segments = relative.split(path.sep).filter(Boolean);
  if (segments.some((segment) => segment.startsWith('.') || DENIED_SEGMENTS.has(segment))) {
    throw new Error('Path is not readable.');
  }
  const allowed =
    segments.length === 0 ||
    (segments.length === 1 && ALLOWED_ROOT_FILES.has(segments[0])) ||
    ALLOWED_DIRECTORIES.includes(segments[0]);
  if (!allowed) {
    throw new Error('Path is not readable.');
  }
  return real;
};

export const listRepoFiles = async (root: string, dir = '.'): Promise<string> => {
  const target = await resolveAllowed(root, dir);
  const realRoot = await fs.realpath(root);
  const entries = await fs.readdir(target, { withFileTypes: true });
  const lines: string[] = [];
  for (const entry of entries) {
    const relative = path.relative(realRoot, path.join(target, entry.name)).split(path.sep).join('/');
    try {
      await resolveAllowed(root, relative);
    } catch {
      continue;
    }
    if (entry.isDirectory()) {
      lines.push(`${relative}/`);
    } else if (ALLOWED_EXTENSIONS.has(path.extname(entry.name))) {
      lines.push(relative);
    }
  }
  return lines.length ? lines.sort().join('\n') : 'No readable files here.';
};

export const readRepoFile = async (root: string, requested: string): Promise<string> => {
  const target = await resolveAllowed(root, requested);
  if (!ALLOWED_EXTENSIONS.has(path.extname(target)) || !(await fs.stat(target)).isFile()) {
    throw new Error('Path is not a readable file.');
  }
  const content = await fs.readFile(target, 'utf8');
  return content.length > MAX_CHARS ? `${content.slice(0, MAX_CHARS)}\n[truncated]` : content;
};
