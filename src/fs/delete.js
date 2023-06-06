import {
    promises as fs
} from 'fs';

const path = './src/fs/files/fileToRemove.txt';

const remove = async () => {
    fs.rm(path).catch((err) => {
        throw new Error(err);
    });
    console.log('File deleted!')
};

await remove();