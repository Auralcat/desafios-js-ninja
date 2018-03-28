// Apontar o teste pro arquivo que você quer
let desafio11 = require('../desafio-semana-11.js');
// Usando o assert do Node.js
let assert = require("assert");

// A importação das variáveis e funções vai ser um pouco diferente
// nesse caso...
let iifeInternals = desafio11.iife;
let person = iifeInternals.person;

describe("Teste desafio 11", function() {
    it("person tem 4 propriedades + função moreThan", function() {
        assert.equal(Object.keys(person).length, 5);
    });

    it("moreThan é uma propriedade de person", function() {
        assert(person.hasOwnProperty("moreThan"));
    });

    it("moreThan retorna um booleano", function() {
        assert(typeof(person.moreThan(13)), "boolean");
    });
});
