// Apontar o teste pro arquivo que você quer
let desafio15 = require('../desafio-semana-15.js');
// Usando o assert do Node.js
let assert = require("assert");

// A importação das variáveis e funções vai ser um pouco diferente
// nesse caso...
let iifeInternals = desafio15.iife;
let Person = iifeInternals.Person;

describe("Teste desafio 15", function() {
    let dummy = new Person("Terra", "Branford", 26);

    it("Person deve ter 3 propriedades: name, lastName e age", function() {
        let desiredProps = ["name", "lastName", "age"];
        let buf = [];

        // Check if every element we want is in the Person object
        desiredProps.forEach(x => buf.push(Object.keys(Person).includes(x)));
        assert(buf.every(x => x === true));
    });

    it("Person deve ter 3 métodos: getFullName, getAge e addAge", function() {
        let desiredMethods = ["getFullName", "getAge", "addAge"];
        let buf = [];

        // Praticamente a mesma coisa de antes, a diferença é que vamos testar
        // o tipo da propriedade também
        desiredMethods.forEach(x => buf.push(typeof(x) === "function"));
        assert(buf.every(x => x === "function"));
    });

    it("getFullName retorna [NOME] [SOBRENOME]", function() {
        let pattern = /^\w+ \w+$/;
        assert(pattern.match(dummy.getFullName()));
    });

    it("getAge retorna um número", function() {
        assert.equal(typeof(dummy.getAge()), "number");
    });

    it("addAge soma o argumento à idade de Person", function() {
        let previousAge = dummy.getAge();
        assert.equal(dummy.addAge(5), previousAge + 5);
    });

});
