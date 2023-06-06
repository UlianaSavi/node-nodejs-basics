import {
    promises as fs
} from 'fs';

const folderPath = './src/fs/files';

const list = async () => {
    try {
        const listOfFiles = await fs.readdir(folderPath)
        listOfFiles.map((file, idx) => {
            console.log(`${idx+1} -------> ${file}`);
        });
    } catch (err) {
        throw new Error(err);
    }
};

await list();