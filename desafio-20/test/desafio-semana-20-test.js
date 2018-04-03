// Apontar o teste pro arquivo que você quer
let desafio20 = require('../desafio-semana-20.js');
// Usando o assert do Node.js
let assert = require("assert");

// A importação das variáveis e funções vai ser um pouco diferente
// nesse caso...
let iifeInternals = desafio20.iife;
let isValidEmail = iifeInternals.isValidEmail;
let emailRegex = iifeInternals.emailRegex;

describe("Teste desafio 20", function() {
    it("isValidEmail deve retornar um booleano", function() {
        assert.equal(typeof(isValidEmail("foo")), "boolean");
    });

    it("emailRegex deve funcionar para os casos no desafio", function() {
        let validEmailAddresses = ["meu.email+categoria@gmail.com",
                                   "juca_malandro@bol.com.br",
                                   "pedrobala@hotmail.uy",
                                   "sandro@culinaria.dahora"
        ];
        assert(validEmailAddresses.every(x => isValidEmail(x)));

    });
    it("emailRegex deve retornar falso para os casos inválidos",
        function() {
            let invalidEmailAddresses = ["walter-da-silva@maraca.br",
                                         "rita-marica@titica.a.b",
                                         "agua_@evida.br.com"
            ];
            assert(invalidEmailAddresses.every(
                x => isValidEmail(x) == "false"));
        });
});
