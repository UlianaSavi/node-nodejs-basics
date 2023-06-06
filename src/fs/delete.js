import {
    promises as fs
} from 'fs';

const path = './src/fs/files/fileToRemove.txt';

const remove = async () => {
    try {
        fs.rm(path);
        console.log('File deleted!')
    } catch (err) {
        throw new Error(err);
    }
};

await remove();