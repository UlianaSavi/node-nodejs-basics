import {
    promises as fs
} from 'fs';

const path = './src/fs/files';
const badName = 'wrongFilename.txt'
const goodName = 'properFilename.md'

const rename = async () => {
    try {
        await fs.rename(`${path}/${badName}`, `${path}/${goodName}`)
        console.log('File renamed!');
    } catch (err) {
        throw new Error(err);
    }
};

await rename();