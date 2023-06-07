const prefix = /RSS_/;

const parseEnv = () => {
    const variables = { ...process.env };
    const list = Object.keys(variables).filter((variable) => variable.match(prefix) !== null);
    console.log(list);
    return list;
};

parseEnv();