/*
Vamos desenvolver mais um projeto. A ideia é fazer uma mini-calculadora.
As regras são:

- Deve ter somente 1 input, mas não deve ser possível entrar dados nesse input
diretamente;
- O input deve iniciar com valor zero;
- Deve haver 10 botões para os números de 0 a 9. Cada botão deve ser um número;
- Deve haver 4 botões para as operações principais: soma (+), subtração(-),
multiplicação(x) e divisão(÷);
- Deve haver um botão de "igual" (=) que irá calcular os valores e um botão "CE"
que irá limpar o input, deixando-o com valor 0;

- A cada número pressionado, o input deve atualizar concatenando cada valor
digitado, como em uma calculadora real;
- Ao pressionar um botão com uma das 4 operações, deve aparecer o símbolo da
operação no input. Se o último caractere no input já for um símbolo de alguma
operação, esse caractere deve ser substituído pelo último pressionado.
Exemplo:
- Se o input tem os valores: "1+2+", e for pressionado o botão de
multiplicação (x), então no input deve aparecer "1+2x".
- Ao pressionar o botão de igual, o resultado do cálculo deve ser mostrado no
input;
- Ao pressionar o botão "CE", o input deve ficar zerado.
*/

// Constante de testes
let digits = [ "0", "1", "2", "3", "4", "5", "6", "7", "8", "9" ];

// Selecionar elementos
// Primeiro vou fazer um array de objetos do DOM
let rawDigitSelectors = digits.map(n => {
    return document.getElementById("digit-" + n);
});

// Agora vou usar o spread operator pra passar essas variáveis pra outra forma
let [ $digit0, $digit1, $digit2, $digit3, $digit4,
      $digit5, $digit6, $digit7, $digit8, $digit9 ] = [...rawDigitSelectors];

// Operações
let rawOperatorSelectors =
        ["plus", "minus", "multiply", "divide", "result"].map(op => {
    return document.getElementById("op-" + op);
});

let [ $opPlus, $opMinus, $opMultiply, $opDivide, $opResult ] =
        [...rawOperatorSelectors];

// Visor, CE
let rawMiscSelectors = [ "visor", "ce" ].map(f => {
    return document.getElementById(f);
});

let [ $visor, $funcCE ] = [...rawMiscSelectors];

// Funções

// Constantes
let opRegex = "[\\+\\-x\\÷]";

const endsWithOperationSign = str => {
    // Retorna um booleano avaliando se o string termina com um sinal
    // de operação e não termina com um dígito
    let hasOpSigns =  new RegExp(opRegex).test(str.slice(-1));
    let hasDigits = /[0-9]/.test(str.slice(-1));
    return hasOpSigns && !hasDigits;
};

function addCharToVisor() {
    // Adiciona o caractere ao visor, independente de tipo
    if ($visor.value == "0") {
        $visor.value = this.innerHTML;
    } else if (endsWithOperationSign($visor.value) &&
               !(/[0-9]/.test(this.innerHTML))) {
        console.log(new RegExp(opRegex).test(this.innerHTML));
        $visor.value = $visor.value.replace(/.$/, this.innerHTML);
    } else {
        $visor.value = $visor.value + this.innerHTML;
    }
}

const executeCE = () => {
    $visor.value = "0";
};

// Funções relacionadas ao processamento do string do visor
const getSigns = mainString => {
    // Retorna um array com os sinais das operações em ordem
    return Array.from(new Set(mainString.match(/[\+\-\x\÷]/g)));
};

const extractOperations = (signArray, opString) => {
    // Retorna um array com as ocorrências de operações dentro do string
    let out = [];

    signArray.forEach(s => {
        let pattern = new RegExp("\\d+[" + s + "]\\d+", 'g');
        let matches = opString.match(pattern);
        if (matches != null ) out = out.concat(matches);
    });

    return out;
};

const pickOperation = (matchesArray) => {
    // Retorna o string com a operação com maior prioridade
    const hasFirstPriorityOps = str => str.includes("x") || str.includes("÷");
    const hasSecPriorityOps = str => str.includes("+") || str.includes("-");

    if (matchesArray.some(x => hasFirstPriorityOps(x))) {
        return matchesArray.filter(x => hasFirstPriorityOps(x)).shift();
    } else if (matchesArray.some(x => hasSecPriorityOps(x))) {
        return matchesArray.filter(x => hasSecPriorityOps(x)).shift();
    }
    return null;
};

const compute = opString => {
    // Retorna o resultado da operação
    let signal = opString.match(new RegExp(opRegex)).pop();
    switch (signal) {
    case '+':
        return opString.split(signal).reduce((x, y) => Number(x) + Number(y));
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

const calculate = opString => {
    // Executa as operações dentro do visor na ordem:
    // - Multiplicação e divisão
    // - Adição e subtração
    // Também segue as operações da esquerda pra direita.

    const calculateStep = buf => {
        // Primeiro busque as operações dentro do string
        let matchedSigns = getSigns(buf);

        // Caso de saída (se não achar nenhum operador)
        if (matchedSigns.length == 0) return buf;

        // Se o primeiro número do string for negativo, retorne "E"
        if (buf.startsWith('-')) return "Error!";

        // Extraia as operações
        let opMatches = extractOperations(matchedSigns, buf);

        // Pegue a função com maior prioridade
        let calculateThis = pickOperation(opMatches);

        // Calcule o resultado desta operação
        let opResult = compute(calculateThis);

        // Coloque o resultado da operação no lugar da operação bruta em
        // uma nova variável
        let newStepString = buf.replace(calculateThis, opResult);

        // Repita o processo
        return calculateStep(newStepString);
    };

    return calculateStep(opString);
};

const showCalculationResult = () => {
    // Substitui o string de operações pelo string de resultado
    $visor.value = calculate($visor.value);
};

// Adicionando os listeners aos elementos selecionados
$funcCE.addEventListener('click', executeCE);
$opResult.addEventListener('click', showCalculationResult);

// Todos os botões de caracteres (operações e dígitos)
[ $opPlus, $opMinus, $opMultiply, $opDivide,
  $digit0, $digit1, $digit2, $digit3, $digit4, $digit5,
  $digit6, $digit7, $digit8, $digit9].forEach(op => {
    op.addEventListener('click', addCharToVisor);
});
