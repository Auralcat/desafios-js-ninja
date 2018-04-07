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

    it("Botões de dígitos devem colocar o número no visor", function() {
        // Pra testar isso, avalie a FUNÇÃO associada ao listener do evento
        let originalState = $visor.value;
        digits.forEach(n => {
            addDigitToVisor(n);
            assert.equal($visor.value, originalState + n);
            $visor.value = 0;
        });
    });

    it("Botão = deve mostrar o resultado da operação", function() {

    });

    it("Botões de operação devem acrescentar a mesma no visor", function() {
        let operations = [ "+", "-", "x", "÷" ];
        let originalState = $visor.value;
        operations.forEach(op => {
            addOperationToVisor(op);
            assert.equal($visor.value, originalState + op);
            $visor.value = 0;
        });
    });

});
