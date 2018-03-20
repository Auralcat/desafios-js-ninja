// Apontar o teste pro arquivo que você quer
let desafio05 = require('../desafio-semana-5.js');
// Usando o assert do Node.js
let assert = require("assert");

// Importar funções e variáveis que vamos testar
// Funções
let identidadeArray = desafio05.identidadeArray;
let bar = desafio05.bar;
let book = desafio05.book;

// Variáveis
let arr = desafio05.arr;
let zorblax = desafio05.zorblax;

describe("Teste desafio 05", function() {
    describe("Arrays", function() {
        it("arr deve receber pelo menos 5 valores", function() {
            let recebeuPeloMenos5Valores = arr.length >= 5;
            assert.equal(recebeuPeloMenos5Valores, true);
        });

        it("zorblax deve receber 5 valores", function() {
            assert.equal(zorblax.length, 5);
        });

    });

    describe("Funções", function() {
        it("identidadeArray deve retornar um array", function() {
            let foo = [1, 2];
            assert.equal(identidadeArray(foo) instanceof Array, true);
        });

        it("bar deve retornar valor indicado pelo segundo parâmetro", function() {
            let nyan = ["a", "b"];
            assert.equal(bar(1), "b");
            assert.equal(bar(0), "a");
        });

        it("book deve retornar um array 3 de objetos quando book()", function() {
            assert.equal(typeof(book()), "array");
            assert.equal(book().length, 3);
        });

        it("book deve retornar livro por parâmetro passado como arg", function() {
            assert.equal(typeof(book("foo")), "object");
            assert.equal(book("foo").nome, "foo");
        });

        it("book tem 3 objetos dentro de si", function() {
            assert.equal(book.catalogo.length, 3);
            assert.equal(typeof(book.catalogo), "object");
        });

        // Vou declarar aqui porque quero usar nas duas próximas funções
        let bookProps = ["nome", "quantidadePaginas", "autor", "editora"];

        it("livros no catalogo possuem nome, quantidadePaginas, autor, editora", function() {
            for (var i in book.catalogo) {
                for (var j in bookProps) {
                    assert.equal(book.catalogo[i].hasOwnProperty(bookProps[j]), true);
                }
            }
        });

        it("quantidadePaginas é um Number e o resto são Strings", function() {
            for (var i in book.catalogo) {
                for (var j in bookProps) {
                    if (bookProps === "quantidadePaginas") {
                        assert.equal(typeof(book.catalogo[i]["quantidadePaginas"]), "Number");
                    } else {
                        assert.equal(typeof(book.catalogo[i][j]), "String");
                    }
                }
            }
        });

    });
});
