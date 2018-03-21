console.log("---DESAFIO 05---");
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
 para retornar o valor, deve ser o número passado no segundo
 parâmetro.
 */
const bar = (arr_entrada, num) => {
    if (Array.isArray(arr_entrada) && typeof(num) === "number") {
        return arr_entrada[num];
    }
    return null;
};

/*
 Declare uma variável que recebe um array com 5 valores, de tipos
 diferentes.
 */
let zorblax = [1, "aa", true, null, undefined];

/* Invoque a função acima, fazendo-a retornar todos os valores do
 último array criado.
 */
for (var i in zorblax) {
    // Índices passados nessa sintaxe são strings!
    console.log(bar(zorblax, Number(i)));
}

/*
 Crie uma função chamada 'book', que recebe um parâmetro, que será o
 nome do livro. Dentro dessa função, declare uma variável que recebe
 um objeto com as seguinte características:
 - esse objeto irá receber 3 propriedades, que serão nome de livros;
 - cada uma dessas propriedades será um novo objeto, que terá outras 3
 propriedades:
     - 'quantidadePaginas' - Number [quantidade de páginas]
     - 'autor' - String
     - 'editora' - String
 - A função deve retornar o objeto referente ao livro passado por
 parâmetro.
 - Se o parâmetro não for passado, a função deve retornar o objeto com
 todos os livros.
 */
const book = (nome) => {

    const catalogo = {
        "O Apanhador no Campo de Centeio": {
            quantidadePaginas: 214,
            autor: "J. D. Salinger",
            editora: "Desconhecida"
        },
        "Drácula": {
            quantidadePaginas: 586,
            autor: "Bram Stoker",
            editora: "Desconhecida"
        },
        "Hagakure": {
            quantidadePaginas: 176,
            autor: "Yamamoto Tsunetomo",
            editora: "Desconhecida"
        }
    };

    if (catalogo.hasOwnProperty(nome)) {
        return catalogo[nome];
    }
    return catalogo;
};

// Exportações do módulo
module.exports = {
    arr, identidadeArray, bar, zorblax, book
};
