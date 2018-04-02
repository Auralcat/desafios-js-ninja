// Apontar o teste pro arquivo que você quer
let desafio19 = require('../desafio-semana-19.js');
// Usando o assert do Node.js
let assert = require("assert");

// A importação das variáveis e funções vai ser um pouco diferente
// nesse caso...
let iifeInternals = desafio19.iife;
let hasClass = iifeInternals.hasClass;

describe("Teste desafio 19", function() {
    it("hasClass deve retornar true se as classes estiverem no string",
       function() {
        let markup = '<main>\n  <div class="container">\n' +
            '<span class="text date"></span>\n' +
            '<p class=\'excerpt\'></p>\n  </div>\n</main>';
        let classes = ["container", "text", "date", "\'excerpt\'"];
        assert(classes.every(x => hasClass(markup, x)));
    });

    it("hasClass retorna um booleano", function() {
        assert.equal(typeof(hasClass("foo")), "boolean");
    });
});
