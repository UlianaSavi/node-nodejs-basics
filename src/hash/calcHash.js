import path from 'path';
import sha256 from 'sha256';
import { promises as fs } from 'fs';
import { createHash } from 'crypto';

const __dirname = new URL('.', import.meta.url).pathname.slice(1);
const filename = path.join(__dirname, 'files/fileToCalculateHashFor.txt');

const data = await fs.readFile(filename, 'utf-8');

const calculateHash = () => {
    sha256(data);
    const encoding = createHash('sha256').update(data).digest('hex');
    console.log(encoding);
};
calculateHash();