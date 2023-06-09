import path from 'path';
import { spawn } from 'child_process';

const __dirname = new URL('.', import.meta.url).pathname.slice(1);
const filename = path.join(__dirname, 'files/script.js');

const args = ['here', 'my', 'args'];

const spawnChildProcess = async (args) => {
    const child = spawn('node', [filename, args]);

    process.stdin.on('data', (chunk) => {
        child.stdin.write(chunk);
    });
    child.stdout.on('data', (chunk) => {
        console.log('Child message in master: ', chunk.toString());
    });

    child.on('close', (code) => {
        console.log(`child process exited with code ${code}`);
        process.exit(0);
    });
    child.on('error', (error) => {
        console.log(`child process exited with error ${error}`);
    });
};

spawnChildProcess(args);
