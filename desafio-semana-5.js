/*
 Crie uma variável qualquer, que receba um array com alguns valores
 aleatórios - ao menos 5 - (ficap or sua conta os valores do array)
 */
let arr = ["foo", true, NaN, 0, /aaa/, "boo"];

/*
 Crie uma função que receba um array como parâmetro, e retorne esse
 array.
 */
const identidadeArray = (a) => {
    if (Array.isArray(a)) {
        return a;
    }
    return null;
};

/*
 Imprima o segundo índice do array retornado pela função criada acima.
 */
console.log(identidadeArray(arr)[1]);

/*
 Crie uma função que receba dois parâmetros: o primeiro, um array de
 valores; e o segundo, um número. A função deve retornar o valor de um
 índice do array que foi passado no primeiro parâmetro. O índice usado
 para retornar o valore, deve ser o número passado no segundo
 parâmetro.
 */
const bar = (arr_entrada, num) => {

};

// Exportações do módulo
module.exports = {
    arr, identidadeArray, bar
};
