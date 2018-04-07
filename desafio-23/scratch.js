let testString = "25-158x19x90+45";

// Passar as regex uma operação por vez
let out = [];
let operatorRegexString = "[\\+\\-x\\÷]";
console.log(new RegExp(operatorRegexString, 'g'));

const getOperators = mainString => {
   // Retorna um array com as operações em ordem
    let globalOperatorRegex = new RegExp(operatorRegexString, 'g');
    console.log(mainString.match(globalOperatorRegex));
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

const compute = opString => {
    // Retorna o resultado da operação
    let signal = opString.match(new RegExp(operatorRegexString)).pop();
    switch (signal) {
    case '+':
        return opString.split(signal).reduce((x, y) => x + y);
    case '-':
        return opString.split(signal).reduce((x, y) => x - y);
    case 'x':
        return opString.split(signal).reduce((x, y) => x * y);
    case '÷':
        return opString.split(signal).reduce((x, y) => x / y);
    default:
        return null;
    }
};

let opResult = compute(computeThis);
let newStr = testString.replace(computeThis, opResult);
console.log(newStr);
