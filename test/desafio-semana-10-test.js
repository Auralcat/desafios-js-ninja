// Apontar o teste pro arquivo que você quer
let desafio10 = require('../desafio-semana-10.js');
// Usando o assert do Node.js
let assert = require("assert");

// A importação das variáveis e funções vai ser um pouco diferente
// nesse caso...
let iifeInternals = desafio10.iife;

let operation = iife.operation;
let isOperatorValid = iife.isOperatorValid;
let calculator = iife.calculator;
let showOperationMessage = iife.showOperationMessage;
let showErrorMessage = iife.showErrorMessage;

describe("Teste desafio 10", function() {
    let opArray = ["+", "-", "*", "/", "%"];

    it("operation deve ter as propriedades" +
        " '+', '-', '*', '/', '%'",
        function() {
            for (let op in opArray) {
                assert.equal(Object.keys(operation).includes(opArray[op]));
            }
        });

    it("Propriedades de operation contém funções", function() {

    });

    it("Funções dentro de operation recebem dois parâmetros", function() {

    });

    it("Funções dentro de operation retornam " +
        "o resultado da operação",
        function() {

        });

    it("isOperatorValid recebe um operador como parâmetro", function() {
        assert.equal(isOperatorValid.length, 1);
    });

    it("isOperatorValid retorna um booleano", function() {
        assert.equal(typeof(isOperatorValid), "boolean");
    });

    it("calculator recebe um operador como parâmetro", function() {
        assert.equal(calculator.length, 1);
    });

    it("calculator retorna false para operadores não-válidos", function() {

    });

    it("calculator retorna uma segunda função para operadores válidos " +
        "que recebe dois parâmetros",
        function() {
            assert.equal(typeof(calculator("+"), "function"));
            assert.equal(calculator("+").length, 2);
        });

    it("Função de retorno de calculator retorna false se não receber dois" +
        " números",
        function() {

        });

    it("Função de retorno de calculator retorna o resultado de operation " +
        " com os parâmetros passados anteriormente na sequência",
        function() {

        });

    it("showOperationMessage recebe três parâmetros", function() {
        assert.equal(showOperationMessage.length, 3);
    });

    it("showOperationMessage retorna a frase " +
        "'A operação [NUMBER1] [OPERATOR] [NUMBER2] ='",
        function() {
            let pattern = /^A operação \d+ [-+*%/] \d+ \=$/;
            assert.true(pattern.test(showOperationMessage("+", 1, 2)));

        });

    it("showErrorMessage recebe um parâmetro", function() {
        assert.equal(showErrorMessage.length, 1);
    });

    it("showErrorMessage retorna a frase " +
        "'Operação [OPERATOR] não é permitida!'",
        function() {
            let pattern = /^Operação [-+*%/] não é permitida!$/;
            assert.true(pattern.test(showErrorMessage("-")));
        });
});
