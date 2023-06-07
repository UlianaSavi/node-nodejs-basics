import fs from 'fs';
import path from 'path';

const __dirname = new URL('.', import.meta.url).pathname.slice(1);
const fileToRead = path.join(__dirname, 'files/fileToRead.txt');

const read = async () => {
    const readableStream = fs.createReadStream(fileToRead);

    readableStream.addListener('data', (chunk) => {
        process.stdout._write(`File content:\n " ${chunk} "`);
    });

    readableStream.addListener('error', (error) => {
        console.log(`error: ${error.message}`);
    })

};

await read();