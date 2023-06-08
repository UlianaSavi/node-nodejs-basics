import path from 'path';
import os from 'os';
import { Worker, MessageChannel } from 'worker_threads';

const __dirname = new URL('.', import.meta.url).pathname.slice(1);
const pathToWorker = path.join(__dirname, './worker.js');

const coresNum = os.cpus(); // 16
const { port1, port2 } = new MessageChannel();

const performCalculations = async () => {
    const worker = new Worker(pathToWorker);
    worker.postMessage({ port: port2 }, [port2]);

    port1.on('message', (message) => {
        console.log('message from worker:', message);
    });

    // parentPort.on('message', () => {
    //     const numberOfElements = 100;
    //     const sharedBuffer = new SharedArrayBuffer(Int32Array.BYTES_PER_ELEMENT * numberOfElements);
    //     const arr = new Int32Array(sharedBuffer);

    //     for (let i = 0; i < numberOfElements; i += 1) {
    //         arr[i] = Math.round(Math.random() * 30);
    //     }

    //     parentPort.postMessage({
    //         arr
    //     });
    // });
};

await performCalculations();