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
