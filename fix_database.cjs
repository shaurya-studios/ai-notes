const fs = require('fs');
const path = require('path');

const dbFile = path.join(__dirname, 'src/data/database.ts');

const newContent = `import { NativeChapter } from '../types/content';
import { chapter_ai_models } from './chapters/chapter_ai_models';
import { chapter_cv } from './chapters/chapter_cv';
import { chapter_ent } from './chapters/chapter_ent';
import { chapter_nlp } from './chapters/chapter_nlp';
import { chapter_ai_cycle } from './chapters/chapter_ai_cycle';
import { chapter_comm } from './chapters/chapter_comm';
import { chapter_green } from './chapters/chapter_green';
import { chapter_ict } from './chapters/chapter_ict';
import { chapter_self } from './chapters/chapter_self';

export const CHAPTER_DATABASE: NativeChapter[] = [
  chapter_ai_models,
  chapter_cv,
  chapter_ent,
  chapter_nlp,
  chapter_ai_cycle,
  chapter_comm,
  chapter_green,
  chapter_ict,
  chapter_self
];
`;

fs.writeFileSync(dbFile, newContent);
console.log("Database index updated.");
