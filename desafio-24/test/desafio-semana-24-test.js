// We need Chai to do the assertions in the browser.
// Makes sense since you're working away from Node this time.
// No need for using module.exports like this. Or require().
let assert = chai.assert;

describe("Teste desafio 24", function() {
    it("Botões devem receber os listeners", function() {
        $buttonsNumbers.forEach(button => assert(button.hasListener, true));
        $buttonsOperations.forEach(button => assert(button.hasListener, true));
        assert($buttonCE.hasListener, true);
        assert($buttonEqual.hasListener, true);
    });

    it("Botões devem adicionar números e operações ao visor", function() {

    });

    it("Operador deve ser trocado se for o último no visor", function() {

    });

    it("Botão = deve processar a operação no visor", function() {

    });
});
