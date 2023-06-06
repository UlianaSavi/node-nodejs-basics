import {
    promises as fs
} from 'fs';

const folderPath = './src/fs/files';
const folderToCopyPath = './src/fs/files_copy';

const readFolder = async () => {
    try {
        const res = await fs.readdir(folderPath);
        return res;
    } catch (err) {
        throw new Error(err);
    }
}

const createCopyFolder = async () => {
    try {
        fs.mkdir(folderToCopyPath, {
            recursive: false
        })
        return true;
    } catch (err) {
        return false;
    }
};

const copy = async () => {
    const filesList = await readFolder();
    const copyFolderExist = await createCopyFolder();
    if (copyFolderExist) {
        filesList.map((file) => {
            fs.copyFile(`${folderPath}/${file}`, `${folderToCopyPath}/${file}`);
        });
    } else {
        throw new Error('folder copy already exist! FS operation failed.');
    }
};

await copy();