// Apontar o teste pro arquivo que você quer
let desafio18 = require('../desafio-semana-18.js');
// Usando o assert do Node.js
let assert = require("assert");

// A importação das variáveis e funções vai ser um pouco diferente
// nesse caso...
let iifeInternals = desafio18.iife;
let cleanCPF = desafio18.cleanCPF;

describe("Teste desafio 18", function() {
    const sampleRawCPFs = ["049-214 3421-1", "210.458.522-05",
                           "735 500 794 - 22", "101.123-131x32"];

    it("cleanCPF deve retornar apenas os números agrupados", function() {

    });
});
