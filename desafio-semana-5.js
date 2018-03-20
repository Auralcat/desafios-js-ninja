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
    if (typeof(a) === "array") {
        return a;
    }
    return null;
};

// Exportações do módulo
module.exports = {
    arr, identidadeArray
};

console.log(arr instanceof Array);
