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

// Exportações do módulo
module.exports = {
    arr, identidadeArray
};
