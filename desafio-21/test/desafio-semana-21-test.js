// Apontar o teste pro arquivo que você quer
let desafio21 = require('../desafio-semana-21.js');
// Usando o assert do Node.js
let assert = require("assert");

// Variáveis
let $timeDisplay = desafio21.$timeDisplay;
let $startButton = desafio21.$startButton;
let $stopButton = desafio21.$stopButton;
let $resetButton = desafio21.$resetButton;

// Funções
let incrementTime = desafio21.incrementTime;
let formatTimeString = desafio21.formatTimeString;

describe("Teste desafio 21", function() {
    it("Botão 'Start' deve iniciar o cronômetro", function() {

    });

    it("Botão 'Stop' deve parar o cronômetro e manter o tempo", function() {

    });

    it("Botão 'Reset' deve retornar o valor do cronômetro pra 0", function() {

    });

    it("incrementTime deve adicionar 1 segundo ao tempo a cada segundo", function() {

    });

    it("formatTimeString deve retornar um string no formato HH:MM:SS", function() {
        let pattern = /^\d{2}:\d{2}:\d{2}$/;
        let sampleTime = Math.floor(Math.random() * 3600);
        assert(pattern.test(formatTimeString(sampleTime)));
    });
});
