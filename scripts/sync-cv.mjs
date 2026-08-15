// Fetches CV content from the maxencelav/cv GitHub repo (source of truth) into
// src/data/ before each build/dev run — nothing is committed, this is the only
// source for that data. If the fetch fails, or the JSON doesn't match the shape
// the homepage expects (e.g. master is on an older CV schema), an empty-but-valid
// fallback is written instead, so the homepage never breaks the build.
import { mkdirSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = path.dirname(fileURLToPath(import.meta.url));
const dataDir = path.join(root, '..', 'src', 'data');
mkdirSync(dataDir, { recursive: true });

const url = 'https://raw.githubusercontent.com/maxencelav/cv/master/metadata_fr.json';
const destPath = path.join(dataDir, 'cv-fr.json');
const emptyFallback = { basics: { name: '' }, experiences: [], education: [] };

const validate = (data) =>
  typeof data.basics?.name === 'string' &&
  Array.isArray(data.experiences) &&
  Array.isArray(data.education);

try {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const data = JSON.parse(await res.text());
  if (!validate(data)) throw new Error('fetched JSON does not match expected schema');
  writeFileSync(destPath, JSON.stringify(data));
  console.log('[sync-cv] synced metadata_fr.json -> src/data/cv-fr.json');
} catch (err) {
  writeFileSync(destPath, JSON.stringify(emptyFallback));
  console.warn(`[sync-cv] ${url}: ${err.message}. Writing empty fallback for src/data/cv-fr.json.`);
}
