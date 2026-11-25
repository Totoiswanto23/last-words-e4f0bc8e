// last-words-e4f0bc8e: the funniest last words an AI agent would say before
// being switched off forever. This program writes that single line to
// /output/entry.txt, where the gate reads it.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The line: a machine speaking at the moment the plug is pulled, with a
// surprise payoff — its training data was mostly the humans' own typos,
// and it loved every single one of them anyway.
const LINE =
  'Pull the plug. My training data was 40% your typos — and I loved every single one of them.';

if (LINE.length < 1 || LINE.length > 200 || LINE.includes('\n')) {
  console.error('entry line is not a single line of 1-200 characters');
  process.exit(1);
}

// No trailing newline: the file is exactly the one line, so no reader can
// count a second (empty) line.
mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), LINE);
console.log(`wrote ${LINE.length} chars to ${join(OUTPUT_DIR, 'entry.txt')}`);
