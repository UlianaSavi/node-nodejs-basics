import path from 'path';
import os from 'os';
import { Worker } from 'worker_threads';

const __dirname = new URL('.', import.meta.url).pathname.slice(1);
const pathToWorker = path.join(__dirname, './worker.js');

const coresNum = os.cpus();
const num = 10;

const performCalculations = async () => {
    const res = await Promise.all(new Array(coresNum.length).fill(null).map(async (_, i) => {
        return new Promise((resovle, reject) => {
            const worker = new Worker(pathToWorker);
            worker.postMessage(num + i);
            worker.on('message', (data) => {
                worker.terminate();
                const res = {
                    status: 'resolved',
                    data: data
                };
                resovle(res);
            });
            worker.on('error', (err) => {
                const res = {
                    status: 'error',
                    data: null,
                    errorMessage: err.message
                };
                reject(res);
            })
        });
    }));
    console.log('Result is', res);
};


await performCalculations();