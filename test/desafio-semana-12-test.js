// Apontar o teste pro arquivo que você quer
let desafio12 = require('../desafio-semana-12.js');
// Usando o assert do Node.js
let assert = require("assert");

// A importação das variáveis e funções vai ser um pouco diferente
// nesse caso...
let iifeInternals = desafio12.iife;
let person = iifeInternals.person;
let books = iifeInternals.books;
let myName = iifeInternals.myName;

describe("Teste desafio 12", function() {
    it("person deve ter 3 propriedades: name, lastName e age", function() {
        let props = ["name", "lastName", "age"];
        for (let i in props) {
            assert(person.hasOwnProperty(props[i]));
        }
        assert.equal(Object.keys(person).length, 3);
    });

    it("books contém 2 objetos no final com duas propriedades: name e pages", function() {
        assert.equal(books.length, 2);
        assert(books.every(x => typeof(x) == "object"));

        // Helper function
        const hasDesiredProps = (obj, propsArray) => {
            let out = [];
            for (let i in propsArray) {
                out.push(obj.hasOwnProperty(propsArray[i]));
            }
            return out.every(x => x);
        };

        assert(books.every(x => hasDesiredProps(x, ["name", "pages"])));
    });
});
