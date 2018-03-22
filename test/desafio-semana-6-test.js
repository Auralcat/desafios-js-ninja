// Apontar o teste pro arquivo que você quer
let desafio06 = require('../desafio-semana-6.js');
// Usando o assert do Node.js
let assert = require("assert");

// Importar funções e variáveis que vamos testar
// Funções
let showTeamPosition = desafio06.showTeamPosition;

// Variáveis
let championship = desafio06.championship;
let teams = desafio06.teams;

describe("Teste desafio 06", function() {
    describe("Variáveis", function() {
        it("championship deve conter um String", function() {
            assert.equal(typeof(championship), "string");
        });

        it("teams deve conter 5 Strings", function() {
            assert.equal(teams.length, 5);
            assert.equal(teams.some(x => typeof(x) != "string"), false);
        });
    });

    describe("Funções", function() {
        it("showTeamPosition deve receber um número por parâmetro e"
           + " retornar um String", function() {
            // Nos testes você só consegue ver a saída das funções,
            // não a entrada, mas...
            assert.equal(typeof(showTeamPosition(0)), "string");
            assert.equal(typeof(showTeamPosition("aaa"), null));
        });

        it("showTeamPosition deve retornar a frase 'O time que está em"
           + " [POSIÇÃO]º lugar é o [NOME_DO_TIME].' ", function() {
            let pattern = /O time que está em \d+º lugar é o \w+\./;
            assert.equal(pattern.test(showTeamPosition(0), true));
            assert.equal(pattern.test(showTeamPosition("aaa"), false));
        });

        it("showTeamPosition retorna outra frase para times abaixo da"
           + " 5ª posição", function() {
            // Normalmente você não pode testar parâmetros internos da
            // função, mas nesse caso a variável envolvida está
            // fora dela.
            assert.equal(showTeamPosition(teams.length + 1),
                "Não temos a informação do time que está nessa posição.");
        });
    });
});
