const fs = require('fs');
const path = require('path');

const dbFile = path.join(__dirname, 'src/data/database.ts');
let content = fs.readFileSync(dbFile, 'utf8');

// Update database.ts to export chapter11 as well
if (!content.includes('chapter11')) {
  content = content.replace(/import \{ chapter10 \} from '\.\/chapters\/chapter10';/, "import { chapter10 } from './chapters/chapter10';\nimport { chapter11 } from './chapters/chapter11';");
  content = content.replace(/chapter10\n\];/, "chapter10,\n  chapter11\n];");
  fs.writeFileSync(dbFile, content);
  console.log("Database index updated to include chapter 11.");
} else {
  console.log("Database index already includes chapter 11.");
}
