// Apontar o teste pro arquivo que você quer
let desafio18 = require('../desafio-semana-18.js');
// Usando o assert do Node.js
let assert = require("assert");

// A importação das variáveis e funções vai ser um pouco diferente
// nesse caso...
let iifeInternals = desafio18.iife;
let cleanCPF = desafio18.iife.cleanCPF;
let sampleCPFs = desafio18.iife.sampleCPFs;

describe("Teste desafio 18", function() {

    it("cleanCPF deve retornar apenas os números agrupados", function() {
        let buf = [];
        sampleCPFs.forEach(x => buf.push(/\d{11}/.test(cleanCPF(x))));
        assert(buf.every(x => x === true));
    });
});
