import {
    promises as fs
} from 'fs';

const filePath = './src/fs/files/fileToRead.txt';

const read = async () => {
    try {
        const content = await fs.readFile(filePath);
        console.log(`File content: \n ${content}`);
        return content
    } catch (err) {
        throw new Error(err);
    }
};

await read();