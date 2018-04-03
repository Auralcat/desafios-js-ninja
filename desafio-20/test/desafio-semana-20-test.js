// Apontar o teste pro arquivo que você quer
let desafio20 = require('../desafio-semana-20.js');
// Usando o assert do Node.js
let assert = require("assert");

// A importação das variáveis e funções vai ser um pouco diferente
// nesse caso...
let iifeInternals = desafio20.iife;
let isValidEmail = iifeInternals.isValidEmail;

describe("Teste desafio 20", function() {
    it("isValidEmail deve retornar um booleano", function() {
        assert.equal(typeof(isValidEmail("foo")), "boolean");
    });
});
