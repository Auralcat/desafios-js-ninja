let testString = "25-158-19x90";

// Passar as regex uma operação por vez
let out = [];

const getOperators = mainString => {
   // Retorna um array com as operações em ordem
    console.log(mainString.match(/[\+\-\x\÷]/g));
    return Array.from(new Set(mainString.match(/[\+\-\x\÷]/g)));
};

let matchedSignals = getOperators(testString);

matchedSignals.forEach(s => {
    let pattern = new RegExp("\\d+[" + s + "]\\d+", 'g');
    console.log("Testing for " + pattern);
    let matches = testString.match(pattern);
    if (matches != null ) out = out.concat(matches);
    console.log(out);
});

// Pegar a op com mais prioridade
const pickOperation = (matchesArray) => {
    const hasFirstPriorityOps = str => str.includes("x") || str.includes("÷");
    const hasSecPriorityOps = str => str.includes("+") || str.includes("-");

    if (matchesArray.some(x => hasFirstPriorityOps(x))) {
        return matchesArray.filter(x => hasFirstPriorityOps(x)).shift();
    } else if (matchesArray.some(x => hasSecPriorityOps(x))) {
        return matchesArray.filter(x => hasSecPriorityOps(x)).shift();
    }
    return null;
};

let computeThis = pickOperation(out);
console.log(computeThis);

const calculate = opString => {
    // Retorna o resultado da operação
};
