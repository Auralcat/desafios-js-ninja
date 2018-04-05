// Apontar o teste pro arquivo que você quer
let desafio22 = require('../desafio-semana-22.js');
// Usando o assert do Node.js
let assert = require("assert");

// Funções
let getFullName = desafio22.getFullName;
let sum = desafio22.sum;
let justNumbers = desafio22.justNumbers;

describe("Teste desafio 22", function() {
    // Test setup
    let samplePerson = { name: "Juliette", lastName: "Nielsen"};
    samplePerson.getFullName = getFullName;

    it("getFullName deve retornar um string no formato 'NOME SOBRENOME'", function() {
        let pattern = /^\w+ \w+/;
        assert(pattern.test(samplePerson.getFullName()));
    });

    it("sum deve receber uma quantidade de parâmetros variável", function() {

    });

    it("sum deve retornar a soma dos números passados a ela", function() {
        assert.equal(sum(12, 14, 18, 25, 32), 12 + 14 + 18 + 25 + 32);
    });

    it("justNumbers deve retornar um array apenas com números", function() {
        let testArray = justNumbers("123456789abcdef");
        assert(justNumbers(testArray).every(
            x => typeof(Number(x)) === "number"));
    });
});
