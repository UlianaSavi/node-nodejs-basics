import {
    promises as fs
} from 'fs';

const path = './src/fs/files';
const badName = 'wrongFilename.txt'
const goodName = 'properFilename.md'

const rename = async () => {
    fs.rename(`${path}/${badName}`, `${path}/${goodName}`).catch((err) => {
        throw new Error(err);
    });
    console.log('File renamed!');
};

await rename();