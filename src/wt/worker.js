import { parentPort } from 'worker_threads';

const nthFibonacci = (n = 1) => {
    return n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);
};

const sendResult = () => {
    parentPort.on('message', (data) => {
        const res = nthFibonacci(data);
        parentPort.postMessage(res);
        process.exit();
    });
};

sendResult();