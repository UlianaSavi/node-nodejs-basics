import fs from 'fs';
import path from 'path';

const __dirname = new URL('.', import.meta.url).pathname.slice(1);
const fileToWrite = path.join(__dirname, 'files/fileToWrite.txt');

const write = async () => {
    const writebleStream = fs.createWriteStream(fileToWrite);

	process.stdin.on('readable', () => {
		writebleStream._write(process.stdin.read(), 'utf8', (error) => {
            if (error) {
                console.log(error.message)
            } else {
                return;
            }
        });
	});
};

await write();