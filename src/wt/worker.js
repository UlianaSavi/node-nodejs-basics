import { parentPort } from 'worker_threads';

const nthFibonacci = (n = 1) => {
    const res = n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);
    return res;
};

const sendResult = () => {
    parentPort.on('message', (data) => {
        const res = nthFibonacci(data);
        parentPort.postMessage(res);
    });
    console.log(res);
};

sendResult();