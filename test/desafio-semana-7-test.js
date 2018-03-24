// Apontar o teste pro arquivo que você quer
let desafio07 = require('../desafio-semana-6.js');
// Usando o assert do Node.js
let assert = require("assert");

// Importar funções e variáveis que vamos testar
// Funções
let addItem = desafio07.addItem;

// Variáveis
let arr = desafio07.arr;

describe("Teste desafio 07", function() {
    describe("Variáveis", function() {
        it("arr deve ter 5 itens de tipos diferentes", function(){
            assert.equal(arr.length, 5);
            assert.equal(new Set(arr.map(x => typeof(x))).size, arr.length);
        });
    });

    describe("Funções", function() {
        it("addItem deve retornar o array com o novo elemento", function() {
            let item = "bar";
            assert.equal(addItem(arr, item).length, arr.length + 1);
        });

        it("addItem deve permitir adição de arrays no mesmo nível", function() {
            let blah = ["cupcake", "princess", "sparkly"];
            let concatArr = arr.concat(blah);
            let addedArr = addItem(arr, blah);
            assert.equal(addedArr.length == concatArr.length);
        });
    });

});
