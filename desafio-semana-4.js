/*
 Declare uma variável chamada 'isTruthy', e atribua a ela uma função que recebe
 um único parâmetro como argumento. Essa função deve retornar 'true'
 se o equivalente booleano para o valor passado no argumento for
 'true', ou 'false' para o contrário.
 */
const isTruthy = (x) => {
    if (x) {
        return true;
    }
    return false;
};

// Invoque a função criada acima, passando todos os tipos de valores 'falsy'.
const falsyValues = [false, 0, "",
                     null, undefined, NaN];

for (let i in falsyValues) {
    console.log(isTruthy(falsyValues[i]));
}

// Invoque a função criada acima passando como parâmetro 10 valores 'truthy'.
const truthyValues = [[], {}, Infinity, true, "a",
                      11, isTruthy, /foo/, Object, "bar"];

for (let i in truthyValues) {
    console.log(isTruthy(truthyValues[i]));
}

/*
 Declare uma variável chamada 'carro', atribuindo a ela um objeto com
 as seguintes propriedades (os valores devem ser do tipo mostrado
 abaixo):
 - 'marca' - String
 - 'modelo' - String
 - 'placa' - String
 - 'ano' - Number
 - 'cor' - String
 - 'quantasPortas' - Number
 - 'assentos' - Number - cinco por padrão
 - 'quantidadePessoas' - Number - zero por padrão
 */

// Montar construtor
const criarCarro = (marca, modelo, placa, ano, cor, quantasPortas) => {
    return {
        // ES6 properties
        marca, modelo, placa,
        ano, cor, quantasPortas,

        assentos: 5,
        quantidadePessoas: 0
    };
};

let carro = criarCarro("Hafei", "Towner", "ABC-1234",
                       1997, "azul-bebê", 4);
/*
 Crie um método chamado 'mudarCor', que mude a cor do carro conforme a
 cor passada por parâmetro.
 */

/*
 Crie um método chamado 'obterCor', que retorne a cor do carro.
 */

/*
 Crie um método chamado 'obterModelo', que retorne o modelo do carro.
 */

/*
 Crie um método chamado 'obterMarca', que retorne a marca do carro.
 */
