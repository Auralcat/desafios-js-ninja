// We need Chai to do the assertions in the browser.
// Makes sense since you're working away from Node this time.
let assert = chai.assert;

describe("Teste desafio 23", function() {
    it("$digit0 contém um objeto", function() {
        assert.equal(typeof($digit0), "object");
    });
});
