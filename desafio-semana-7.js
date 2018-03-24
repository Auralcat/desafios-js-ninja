/*
Crie um array com 5 items (tipos variados).
*/
let arr = [1, "snazzy", /wild-regex/, undefined, true];

/*
Crie uma função chamada `addItem`, que irá adicionar itens no array criado.
A função deverá retornar o array atualizado.
*/
const addItem = (arr, item) => arr.concat(item);

/*
Adicione um novo array ao array criado no início do desafio, com ao menos 3
itens de tipos diferentes, mostrando o resultado no console.
*/
let blag = [24, /another-regex/, false];
console.log(addItem(arr, blag));

/*
Mostre no console o segundo elemento desse último array, criado acima, com a
frase:
"O segundo elemento do segundo array é [ELEMENTO]."
*/
console.log(`O segundo elemento do segundo array é ${blag[1]}`);

/*
Mostre no console quantos itens tem o primeiro array criado, com a frase:
"O primeiro array tem [QUANTIDADE DE ITENS] itens."
*/
console.log(`O primeiro array tem ${arr.length} itens.`);

/*
Agora mostre no console quantos itens tem o segundo array criado, com a frase:
"O segundo array tem [QUANTIDADE DE ITENS] itens."
*/
console.log(`O segundo array tem ${blag.length} itens.`);

/*
Utilizando a estrutura de repetição `while`, mostre no console todos os números
pares entre 10 e 20, inclusive esses 2.
*/
console.log( 'Números pares entre 10 e 20:' );

/*
Na mesma ideia do exercício acima: mostre agora os números ímpares.
*/
console.log( 'Números ímpares entre 10 e 20:' );

/*
Repita os mesmos exercícios feitos acima, mas agora usando o loop "for".
Só vamos mudar o range:
- No primeiro "for", mostre os números pares entre 100 e 120, inclusive eles;
- No segundo "for", mostre os números ímpares entre 111 e 125, inclusive eles.
*/

// Não quero repetir código
const logRange = (start, stop, condition) => {
    let buf = start;
    while (buf <= stop) {
        if (condition(buf)) {
            console.log(buf);
        }
        buf++;
    }
};

console.log( 'Números pares entre 100 e 120:' );
logRange(100, 120, n => n % 2 == 0);

console.log( 'Números ímpares entre 111 e 125:' );
logRange(111, 125, n => n % 2 != 0);

module.exports = {
    arr, blag,
    addItem
};
