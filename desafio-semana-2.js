/* Desafio da semana #2 */

// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
const soma = (x, y) => x + y;

// Declare uma variável que receba a invocação da função criada acima, passando
// dois números quaisquer por argumento, e somando '5' ao resuultado retornado
// da função.
const resultadoSoma = soma(20, 50);

// Qual o valor atualizado dessa variável?
console.log(resultadoSoma);

// Declare uma nova variável, sem valor
let foo;

/*
  Crie uma função que adicione um valor à variável criada acima, e retorne a
  string:

    O valor da variável agora é VALOR.

  Onde VALOR é o novo valor da variável.
*/
const somaEImprime = (n, valor) => {
    if (isNaN(n)) {
        n = 0;
    }
    return `O valor da variável agora é ${n + valor}`;
};


// Invoque a função criada acima
console.log(somaEImprime(foo, 33));

// Qual o retorno da função? (Use comentários de bloco).
/*
  "O valor da variável agora é 33"
*/

/* Crie uma função com as seguintes características
1. A função deve receber 3 argumentos
2. Se qualquer um dos três argumentos não estiverem preenchidos, a
   função deve retornar a string:
   Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos,
   somando 2 ao resultado da multiplicação.
*/

const fillMeUp = (x, y, z) => {
    if ([x, y, z].some(t => typeof(t) == "undefined")) {
        return "Preencha todos os valores corretamente!";
    }
    return [x, y, z].reduce((x, y) => x * y) + 2;
};

// Invoque a função criada acima, passando só dois números como argumento.
console.log(fillMeUp(1, 2));

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado)
// "Preencha todos os valores corretamente!"

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro
   com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano 'false'.
6. E ainda, se nenhuma das condições forem atendidas, retorne 'null'.
*/

function baz() {
    switch (arguments.length) {
    case 0:
        return false;
    case 1:
        return arguments[0];
    case 2:
        return arguments[0] + arguments[1];
    case 3:
        return (arguments[0] + arguments[1]) / arguments[2];
    default:
        return null;
    }
}

// Invoque a função acima utilizando todas as possibilidades (com
// nenhum argumento, com um, com dois e com três.) Coloque um
// comentário de linha ao lado da função com o resultado de cada invocação.
console.log(baz());
console.log(baz("foo"));
console.log(baz(20, 30));
console.log(6, 2, 3);
console.log(baz(1, 2, 3, 4));
