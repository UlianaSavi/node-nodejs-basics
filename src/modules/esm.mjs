import path from 'path';
import { readFileSync } from 'node:fs';
import { release, version } from 'os';
import { createServer as createServerHttp } from 'http';
import { URL } from 'url';
import './files/c.js';

const __filename = new URL('', import.meta.url).pathname;
const __dirname = new URL('.', import.meta.url).pathname;

const random = Math.random();

const unknownObject = readFileSync(new URL(random > 0.5 ? './files/a.json' : '', import.meta.url), 'utf-8'); 

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

const myServer = createServerHttp((_, res) => {
    res.end('Request accepted');
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    console.log('To terminate it, use Ctrl+C combination');
});

export default {
    unknownObject,
    myServer,
};

