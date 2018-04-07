// We need Chai to do the assertions in the browser.
// Makes sense since you're working away from Node this time.
// No need for using module.exports like this. Or require().
let assert = chai.assert;

describe("Teste desafio 23", function() {
    it("$digit0 contém um objeto", function() {
        assert.isOk($digit0 != null);
    });

    it("$visor contém um objeto", function() {
        assert.isOk($visor != null);
    });

    it("Botão CE deve retornar o visor para 0", function() {
        executeCE();
        assert.equal($visor.value, "0");
    });

    it("Botão 0 deve adicionar 0 ao visor", function() {
        // Pra testar isso, avalie a FUNÇÃO associada ao listener do evento
        let originalState = $visor.value;
        addDigitToVisor("0");
        assert.equal($visor.value, originalState + "0");
    });

});
