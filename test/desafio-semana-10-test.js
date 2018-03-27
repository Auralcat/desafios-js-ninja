// Apontar o teste pro arquivo que você quer
let desafio10 = require('../desafio-semana-10.js');
// Usando o assert do Node.js
let assert = require("assert");

// A importação das variáveis e funções vai ser um pouco diferente
// nesse caso...
let iifeInternals = desafio10.iife;

let operation = iifeInternals.operation;
let isOperatorValid = iifeInternals.isOperatorValid;
let calculator = iifeInternals.calculator;
let showOperationMessage = iifeInternals.showOperationMessage;
let showErrorMessage = iifeInternals.showErrorMessage;
let validOperators = iifeInternals.validOperators;

describe("Teste desafio 10", function() {

    it("operation deve ter as propriedades '+', '-', '*', '/', '%'",
        function() {
        for (let op in validOperators) {
            assert(Object.keys(operation).includes(validOperators[op]));
        }
    });

    it("Propriedades de operation contém funções", function() {
        for (let op in validOperators) {
            assert.equal(typeof(operation[validOperators[op]]), "function");
        }
    });

    it("Funções dentro de operation recebem dois parâmetros", function() {
        for (let op in validOperators) {
            assert.equal(operation[validOperators[op]].length, 2);
        }
    });

    it("Funções dentro de operation retornam o resultado da operação",
        function() {
        for (let op in validOperators) {
            assert.equal(typeof(operation[validOperators[op]](32, 8)),
                         "number");
        }
    });

    it("isOperatorValid recebe um operador como parâmetro", function() {
        assert.equal(isOperatorValid.length, 1);
    });

    it("isOperatorValid retorna um booleano", function() {
        assert.equal(typeof(isOperatorValid("foo")), "boolean");
    });

    it("calculator recebe um operador como parâmetro", function() {
        assert.equal(calculator.length, 1);
    });

    it("calculator retorna false para operadores não-válidos", function() {
        assert.equal(calculator("foo"), false);
    });

    it("calculator retorna uma segunda função para operadores válidos " +
        "que recebe dois parâmetros",
        function() {
            assert.equal(typeof(calculator("+")), "function");
            assert.equal(calculator("+").length, 2);
        });

    it("Função de retorno de calculator retorna false se não receber dois" +
        " números",
        function() {
            assert.equal(calculator("+")(2, "bar"), false);
        });

    it("Função de retorno de calculator retorna o resultado de operation" +
        " com os parâmetros passados anteriormente na sequência",
        function() {
            assert.equal(typeof(calculator("+")(20, 30)), "number");
        });

    it("showOperationMessage recebe três parâmetros", function() {
        assert.equal(showOperationMessage.length, 3);
    });

    it("showOperationMessage retorna a frase " +
        "'A operação [NUMBER1] [OPERATOR] [NUMBER2] ='",
        function() {
            let pattern = /^A operação \d+ [-+*%/] \d+ \=$/;
            assert(pattern.test(showOperationMessage("+", 1, 2)));

        });

    it("showErrorMessage recebe um parâmetro", function() {
        assert.equal(showErrorMessage.length, 1);
    });

    it("showErrorMessage retorna a frase " +
        "'Operação [OPERATOR] não permitida!'",
        function() {
            let pattern = /^Operação [-+*%/] não permitida!$/;
            assert(pattern.test(showErrorMessage("-")));
        });
});
