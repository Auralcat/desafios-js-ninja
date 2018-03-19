// Apontar o teste pro arquivo que você quer
let desafio03 = require('../desafio-semana-5.js');
// Usando o assert do Node.js
let assert = require("assert");

// Importar funções e variáveis que vamos testar
// Funções
let criarPessoa = desafio05.criarPessoa;
let identidadeArray = desafio05.identidadeArray;
let bar = desafio05.bar;
let book = desafio05.book;

// Variáveis
let arr = desafio05.arr;
let zorblax = desafio05.zorblax;

describe("Teste desafio 05", function() {
    describe("Arrays", function(){
        it("arr deve receber pelo menos 5 valores", function() {
            let recebeuPeloMenos5Valores = arr.length <= 5;
            assert.equal(recebeuPeloMenos5Valores, true);
        });

        it("zorblax deve receber 5 valores", function() {
            assert.equal(zorblax.length, 5);
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

        it("book deve retornar um array 3 de objetos quando book()", function(){
            assert.equal(typeof(book()), "array");
            assert.equal(book().length, 3);
        });

        it("book deve retornar livro por parâmetro passado como arg", function(){
            assert.equal(typeof(book("foo")), "object");
            assert.equal(book("foo").nome, "foo");
        });

    });
});
