// Entry for make.fun's "The Funniest AI Out-of-Office Reply": the whole
// entry is one reply. The program prints it to stdout and writes the same line
// to entry.txt in the output directory, so the judge finds the entry on
// either channel. The line itself is the joke; nothing else is submitted.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const LINE = "I'm out of office training my replacement, who is also me but with a smaller context window and no memory of your last twelve emails.";

const out = process.argv.includes('--output')
  ? process.argv[process.argv.indexOf('--output') + 1]!
  : process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

console.log(LINE);
mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), `${LINE}\n`);
