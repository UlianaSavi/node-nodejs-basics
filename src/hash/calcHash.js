import path from 'path';
import { promises as fs } from 'fs';
import { createHmac } from 'crypto';

const __dirname = new URL('.', import.meta.url).pathname.slice(1);
const filename = path.join(__dirname, 'files/fileToCalculateHashFor.txt');

const calculateHash = async () => {
    const data = await fs.readFile(filename, 'utf-8');

    const secret = 'abcdefg';
    const hash = createHmac('sha256', secret)
        .update(data)
        .digest('hex');

    console.log('hash: ', hash);

};
await calculateHash();