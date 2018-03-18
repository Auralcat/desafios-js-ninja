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
 - 'quanntasPortas' - Number
 - 'assentos' - Number - cinco por padrão
 - 'quantidadePessoas' - Number - zero por padrão
 */
