// Apontar o teste pro arquivo que você quer
let desafio06 = require('../desafio-semana-6.js');
// Usando o assert do Node.js
let assert = require("assert");

// Importar funções e variáveis que vamos testar
// Funções

// Variáveis
let championship = desafio06.championship;

describe("Teste desafio 06", function() {
    describe("Variáveils", function() {
        it("championship deve conter um String", function() {
            assert.equal(typeof(championship), "string");
        });
    });
});
