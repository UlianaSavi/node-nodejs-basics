import fs from 'fs';
import path from 'path';
import { createGzip } from 'zlib';

const __dirname = new URL('.', import.meta.url).pathname.slice(1);
const fileToCompress = path.join(__dirname, 'files/fileToCompress.txt');
const filExtension = 'gz';

const compress = async () => {
    const readableStream = fs.createReadStream(fileToCompress);
    readableStream
        .pipe(createGzip())
        .pipe(fs.createWriteStream(`${__dirname}files/archive.${ filExtension }`))
        .on('finish', () => {
            fs.truncate(fileToCompress, 0, () => {console.log('!!!\nP.s.\nFile for compressing cleared for test decompress.js')})
            console.log(`Compression process done: ${ fileToCompress }`)
        });
};

await compress();