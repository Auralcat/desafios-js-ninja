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
    it("operation deve ter as propriedades" +
       " '+', '-', '*', '/', '%'", function() {

    });

    it("Propriedades de operation contém funções", function() {

    });

    it("Funções dentro de operation recebem dois parâmetros", function() {

    });

    it("Funções dentro de operation retornam " +
       "o resultado da operação", function() {

    });

    it("isOperatorValid recebe um operador como parâmetro", function() {

    });

    it("isOperatorValid retorna um booleano", function() {

    });

    it("calculator recebe um operador como parâmetro", function() {

    });

    it("calculator retorna false para operadores não-válidos", function() {

    });

    it("calculator retorna uma segunda função para operadores válidos " +
       "que recebe dois parâmetros", function() {

    });

    it("Função de retorno de calculator retorna false se não receber dois" +
       " números", function() {

    });

    it("Função de retorno de calculator retorna o resultado de operation " +
       " com os parâmetros passados anteriormente na sequência", function() {

    });

    it("showOperationMessage recebe três parâmetros", function() {

    });

    it("showOperationMessage retorna a frase " +
       "'A operação [NUMBER1] [OPERATOR] [NUMBER2] ='", function() {

    });

    it("showErrorMessage recebe um parâmetro", function() {

    });

    it("showErrorMessage retorna a frase " +
       "'Operação [OPERATOR] não é permitida!'", function() {

    });
});
