import path from 'path';
import { spawn } from 'child_process';

const __dirname = new URL('.', import.meta.url).pathname.slice(1);
const filename = path.join(__dirname, 'files/script.js');

const args = ['CLOSE', '2', '3', '4', '5', '6'];

const spawnChildProcess = async (args) => {
    const child = spawn('node', [filename]);
    process.stdin.on('data', (chunk) => {
        child.stdin.write(chunk);
    });
    child.stdout.on('data', (data) => {
        console.log(data.toString());
    });

    child.on('close', (code) => {
        console.log(`child process exited with code ${code}`);
        process.exit(0);
    });
    child.on('error', (error) => {
        console.log(`child process exited with error ${error}`);
    });
    process.stdin.on('close', (code) => {
        console.log(`main process exited with code ${code}`);
    });
};

// Put your arguments in function call to test this functionality
spawnChildProcess(args);
