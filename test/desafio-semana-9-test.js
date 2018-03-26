// Apontar o teste pro arquivo que você quer
let desafio09 = require('../desafio-semana-9.js');
// Usando o assert do Node.js
let assert = require("assert");

// A importação das variáveis e funções vai ser um pouco diferente
// nesse caso...
let iifeInternals = desafio09.iife;

let calculator = iifeInternals.calculator;
let sum = iifeInternals.sum;
let subtraction = iifeInternals.subtraction;
let multiplication = iifeInternals.multiplication;
let division = iifeInternals.division;
let mod = iifeInternals.mod;

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

    it("variável subtraction contém uma função", function() {
        assert.equal(typeof(subtraction), "function");
    });

    it("variável multiplication contém uma função", function() {
        assert.equal(typeof(multiplication), "function");
    });

    it("variável division contém uma função", function() {
        assert.equal(typeof(division), "function");
    });

    it("variável mod contém uma função", function() {
        assert.equal(typeof(mod), "function");
    });

});
