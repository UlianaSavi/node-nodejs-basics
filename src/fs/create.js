import { promises as fs } from 'fs';

const filePath = './src/fs/files/fresh.txt';

const check = async () => {
    const res = fs.access(filePath, fs.constants.F_OK)
        .then(() => true)
        .catch(() => {
            return false;
        })
    return res;
};

const create = async () => {
    const exist = await check();
    if (!exist) {
        await fs.appendFile(filePath, 'I am fresh and young')
        console.log('fresh.txt was created.');
    } else {
        throw new Error('fresh.txt already exist! FS operation failed.');
    }
};

await create();