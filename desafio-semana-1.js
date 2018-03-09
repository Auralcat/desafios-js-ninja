/* Desafio Semana #1 */

// Declarar uma variável chamada `myvar`, sem valor.`
let myvar;

// Após declarada, atribua o valor 10 à variável `myvar`.
myvar = 10;

// Declare uma variável chamada `soma`, e adicione uma instrução somando os
// valores 15 e 8.
let soma = 15 + 8;

// Atribua à variável `soma` todo o valor dela, somando 1, usando o operador de
// soma abreviado
soma++;

// Atribua à variável `soma` todo o valor dela, multiplicando por 3, usando o
// operador de multiplicação
soma *= 3;

// Qual o valor da variável `soma` até aqui?
console.log(soma); // 72

// Declare uma variável chamada `souninja`, atribuindo a ela o valor booleano
// que representa o valor `verdadeiro`.
const souninja = true;

// Declare uma variável chamada `comida` que recebe um array com os valores
// 'arroz', 'feijão' e 'ovo'.
const comida = [ 'arroz',  'feijao',  'ovo'];

// Digite a instrução que imprime o valor de feijão,  que está na variável
// `comida`.
console.log(comida[0]);

// Digite o código que verifica se a variável 'soma' é igual à variável 'myvar'
// (testando também o tipo)
const compare1 = myvar === soma;

// Digite o código que verifica se a variável `myvar` é menor ou igual à
// variável `soma`.
const compare2 = myvar >= soma;

// Crie uma função chamada `divisao` que receba como parâmetro dois números,  e
// retorne o resultado da divisão entre eles.
const divisaoES6 = (x,  y) => x / y;

// ES5:
function divisaoES5(x, y) { return x / y; }

// Invoque a função criada acima, passando os parâmetros 10 e 2.
console.log(divisaoES6(10,  2));
