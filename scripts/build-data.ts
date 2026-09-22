import { LoremIpsum } from 'lorem-ipsum';
import { v4 } from 'uuid';

import * as fs from 'node:fs/promises';
import * as path from 'node:path';
import * as url from 'node:url';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4,
  },
  wordsPerSentence: {
    max: 16,
    min: 4,
  },
});

const ITERATIONS = 100000;

const go = async () => {
  const data: any = [];
  let i;
  for (i = 0; i < ITERATIONS; i += 1) {
    data.push({
      id: v4(),
      title: lorem.generateWords(10),
    });
  }
  await fs.writeFile(
    path.join(__dirname, '..', 'src', 'data', 'records.json'),
    JSON.stringify(data),
  );
};

go().catch((e) => {
  console.error(e);
  process.exit(1);
});
