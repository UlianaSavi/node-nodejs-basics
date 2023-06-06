import {
    promises as fs
} from 'fs';

const folderPath = './src/fs/files';

const list = async () => {
    const listOfFiles = await fs.readdir(folderPath)
        .catch(() => {
            throw new Error(`Can't find folder! FS operation failed.`);
        });
    listOfFiles.map((file, idx) => {
        console.log(`${idx+1} -------> ${file}`);
    })
    return listOfFiles;
};

await list();