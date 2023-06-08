import fs from 'fs';
import path from 'path';
import { createUnzip } from 'zlib';

const unzip = createUnzip();

const __dirname = new URL('.', import.meta.url).pathname.slice(1);
const fileArchive = path.join(__dirname, 'files/archive.gz') || '';
const fileToWrite = path.join(__dirname, 'files/fileToCompress.txt');

const decompress = async () => {
    if(fileArchive.length) {
        console.log('No file!');
        return;
    }
    const readableStream = fs.createReadStream(fileArchive);
    const writableStream = fs.createWriteStream(fileToWrite);
    readableStream
        .pipe(unzip)
        .pipe(writableStream)
        .on('finish', () => {
            console.log(`Decompression process done: ${ fileToWrite }`)
        });
};

await decompress();