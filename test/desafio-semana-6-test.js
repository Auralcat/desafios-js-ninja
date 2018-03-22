// Apontar o teste pro arquivo que você quer
let desafio06 = require('../desafio-semana-6.js');
// Usando o assert do Node.js
let assert = require("assert");

// Importar funções e variáveis que vamos testar
// Funções

// Variáveis
let championship = desafio06.championship;
let teams = desafio06.teams;

describe("Teste desafio 06", function() {
    describe("Variáveils", function() {
        it("championship deve conter um String", function() {
            assert.equal(typeof(championship), "string");
        });

        it("teams deve conter 5 Strings", function() {
            assert.equal(teams.length, 5);
            assert.equal(teams.some(x => typeof(x) != "string"), false);
        });

    });
});
