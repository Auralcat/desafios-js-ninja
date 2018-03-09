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
