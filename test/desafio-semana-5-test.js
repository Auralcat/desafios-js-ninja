// Apontar o teste pro arquivo que você quer
let desafio03 = require('../desafio-semana-5.js');
// Usando o assert do Node.js
let assert = require("assert");

// Importar funções e variáveis que vamos testar
// Funções
let criarPessoa = desafio05.criarPessoa;
let identidadeArray = desafio05.identidadeArray;
let bar = desafio05.bar;

// Variáveis
let arr = desafio05.arr;

describe("Teste desafio 05", function() {
    describe("Arrays", function(){
        it("deve receber 5 valores", function() {
            assert.equal(arr.length, 5);
        });

    });

    describe("Funções", function(){
        it("identidadeArray deve retornar um array", function(){
            let foo = [1, 2];
            assert.equal(typeof(identidadeArray(foo)), "array");
        });

        it("bar deve retornar valor indicado pelo segundo parâmetro", function(){
            let nyan = ["a", "b"];
            assert.equal(bar(1), "b");
            assert.equal(bar(0), "a");
        });

    });
});
