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
let rawMiscSelectors = [ "visor", "func-ce" ].map(f => {
    return document.getElementById(f);
});

let [ $visor, $funcCE ] = [...rawMiscSelectors];

// Funções
const addDigitToVisor = num => {
    $visor.value = $visor.value + String(num);
};

const addOperationToVisor = op => {
    $visor.value = $visor.value + String(op);
}

const executeCE = () => {
    $visor.value = "0";
};

const compute = op => {
    // Retorna o resultado da operação.
};

const calculate = () => {
    // Executa as operações dentro do visor na ordem:
    // - Multiplicação e divisão
    // - Adição e subtração
    // Também segue as operações da esquerda pra direita.
    let opPattern = /\d+[\+-x÷]\d+/g;
    let replacePat = /[\+-x÷]/;

    const calculateStep = buf => {
        // Primeiro busque as operações dentro do string
        let matchedOperations = buf.match(opPattern);

        // Caso de saída
        if (matchedOperations.length == 0) return buf;

        // Pegue a função com maior prioridade
        let computeThis = matchedOperations.filter(
            op => op.includes('x') || op.includes('÷'));

        // Calcule o resultado desta operação
        let opResult = compute(computeThis);

        // Coloque o resultado da operação no lugar da operação bruta em
        // matchedOperations
        matchedOperations.splice(matchedOperations.indexOf(computeThis), 1, opResult);

        // Junte tudo em uma nova variável
        let newStepString = matchedOperations.join('');

        // Retire os operandos antigos
        computeThis.replace(replacePat, '|').split('|').forEach(n => {
            newStepString = matchedOperations.replace(n, '');
        });

        // Repita o processo
        calculateStep(newStepString);
    };

    return calculateStep($visor.value);
};

console.log(calculate("36+41x96÷32"));
