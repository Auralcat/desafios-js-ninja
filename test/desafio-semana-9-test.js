// Apontar o teste pro arquivo que você quer
let desafio09 = require('../desafio-semana-9.js');
// Usando o assert do Node.js
let assert = require("assert");

// Funções
let calculator = desafio09.calculator;

// Variáveis
let sum = desafio09.sum;

describe("Teste desafio 09", function() {
    it("calculator() retorna uma função que recebe um argumento", function() {
        assert.equal(typeof(calculator()), "function");
        assert.equal(calculator().length, 1);
    });

    it("calculator() recebe dois argumentos", function() {
        // A propriedade length de uma função retorna sua aridade
        assert.equal(calculator.length, 2);
    });

    it("variável sum contém uma função", function() {
        assert.equal(typeof(sum), "function");
    });
});
