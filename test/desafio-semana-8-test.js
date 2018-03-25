// Apontar o teste pro arquivo que você quer
let desafio08 = require('../desafio-semana-8.js');
// Usando o assert do Node.js
let assert = require("assert");

// Importar funções e variáveis que vamos testar
// Funções
let calculateSum = desafio08.calculateSum;
let calculator = desafio08.calculator;
let showName = desafio08.showName;

// Variáveis

describe("Teste desafio 08", function() {
    describe("Variáveis", function() {

    });

    describe("Funções", function() {
        it("calculateSum deve receber dois números", function() {

        });
        it("calculateSum deve retornar a soma dos argumentos", function() {
            assert.equal(calculateSum(2, 4), 6);
        });

        it("showName deve retornar um String", function() {
            assert.equal(typeof(showName()), "string");
        });

        it("calculator deve receber dois números e um operador", function(){

        });

        it("calculator só pode receber como operadores: +, -, *, /, %", function() {

        });

        it("calculator deve retornar o resultado da operação fornecida", function() {
            assert.equal(calculator(2, 10, "+"), (2 + 10));
            assert.equal(calculator(10, 5, "-"), (10 - 5));
            assert.equal(calculator(13, 5, "*"), (13 * 5));
            assert.equal(calculator(40, 8, "/"), (40 / 8));
            assert.equal(calculator(30, 2, "%"), (30 % 2));
        });

    });

});
