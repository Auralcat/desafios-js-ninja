// Apontar o teste pro arquivo que você quer
let desafio03 = require('../desafio-semana-3.js');
// Usando o assert do Node.js
let assert = require("assert");

// Importar funções que vamos testar
let criarPessoa = desafio03.criarPessoa;

describe("Teste criarPessoa", function() {
    it("should return an object", function() {
        let testObj = criarPessoa("Foo", "Bar", "feminino");
        assert.equal(typeof(testObj), "object");
    });
});
