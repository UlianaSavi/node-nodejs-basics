import {
    promises as fs
} from 'fs';

const folderPath = './src/fs/files';
const folderToCopyPath = './src/fs/files_copy';

const readFolder = async () => {
    const res = fs.readdir(folderPath)
        .catch(() => {
            throw new Error(`Cant find folder! FS operation failed.`);
        });
    return res;
}

const createCopyFolder = async () => {
    const res = fs.mkdir(folderToCopyPath, {
            recursive: false
        })
        .then(() => {
            return true
        })
        .catch(() => {
            return false;
        })
    return res;
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