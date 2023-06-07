const prefix = /--/;

const parseArgs = () => {
    const args = [...process.argv];
    const listOfNames = args.filter((arg) => arg.match(prefix));
    const listOfValues = [];
    for (let i = 0; i < args.length; i++) {
        args[i].match(prefix) ? listOfValues.push(args[i+1]) : 0;
    }
    console.log(listOfValues);
    const result = [];
    for (let i = 0; i < listOfNames.length; i++) {
        result.push(`${listOfNames[i]} is ${listOfValues[i]}`);
    }
    result.map((item) => console.log(`${item}\n`))
    return result;
};

parseArgs();