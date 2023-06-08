import { Transform } from 'stream';

const nthFibonacci = (n = 1) => {
    const res = n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);
    return res;
};

const reverse = new Transform({
    transform(chunk, encoding, callback) {
        if (+chunk) {
            callback(null, nthFibonacci(chunk).toString());
        } else {
            console.log(`You need to write number! Now you wrote ${typeof chunk}`);
        }
    },
});

const sendResult = () => {
    process.stdin.pipe(reverse).pipe(process.stdout);
};

sendResult();