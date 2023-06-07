const prefix = /RSS_/;

const parseEnv = () => {
    const variables = { ...process.env };
    const listOfNames = Object.keys(variables).filter((variable) => variable.match(prefix));
    const listOfValues = listOfNames.map((item) => variables[item]);
    const result = [];
    for (let i = 0; i < listOfNames.length; i++) {
        result.push(`${listOfNames[i]}=${listOfValues[i]}`);
    }
    result.map((item) => console.log(`${item}\n-----------`))
    return result;
};

parseEnv();