/*
 Vamos falar um pouco sobre "Futebol". Escolha um campeonato estadual
 qualquer para começar o desafio.
 Declare uma variável chamada 'championship' que receberá o nome do
 campeonato, e imprima o nome desse campeonato no console.
 */
const championship = "Torneio do Poder";
console.log(championship);

/*
 Declare uma variável chamada 'teams', que receberá um array com 5
 elementos.
 Os elementos serão nomes de times do campeonato escolhido, e os nomes
 devem estar na ordem em que eles aparecem na tabela no momento da
 solução desse desafio.
 */
const teams = ["Universo 1", "Universo 7", "Universo 12",
               "Universo 8", "Universo 6"];

console.log( "Times que estão participando do campeonato:", teams);

/*
 Crie uma função chamada showTeamPosition com as seguintes
 características:
 - A função deve receber um número por parâmetro;
 - A função deve retornar a frase:
 "O time que está em [POSIÇÃO]º lugar é o [NOME_DO_TIME].";
 - Onde [POSIÇÃO] é o valor passado por parâmetro e [NOME_DO_TIME] é o
 time que está nessa posição no array criado acima com os nomes dos
 times.
 --------------
 Dica: lembre-se de que arrays começam no índice zero, então a posição
 passada deve ser sempre um número a mais que o índice do array ;)
 --------------
 - A função só deve retornar a frase acima se o time estiver entre os
 5 primeiros.
 - Se não houver time para a posisção passada, deve retornar a
 mensagem:
 "Não temos a informação do time que está nessa posição."
 */
const showTeamPosition = pos => {
    // Assegurando que a entrada é um número e maior que zero
    if (typeof(pos) === "number" && pos > 0) {
        if (pos > teams.length) {
            return "Não temos a informação do time que está nessa posição.";
        } else {
            let nomeTime = teams[pos - 1];
            return `O time que está em ${pos}º lugar é o ${nomeTime}.`;
        }
    }
    return null;
};

/*
 Escolha 4 times do campeonato selecionado e mostre a posição dele,
 usando a função acima. Entre esses 4, adicione 1 que não esteja entre
 os 5 primeiros.
 */
const indiceTimes = [1, 3, 2, 6];
for (num in indiceTimes) {
    console.log(showTeamPosition(indiceTimes[num]));
}

/*
 Mostre os números de 20 a 30 no console (inclusive o 30), usando a
 estrutura de repetição "while".
 */
let i = 20;
while (i <= 30) {
    console.log(i);
    i++;
}
/*
 Crie uma função chamada 'convertToHex', com as seguintes
 características:
 - A função recebe uma cor por parâmetro, do tipo string. Exemplo:
 "red";
 - Escolha 5 cores que serão convertidas do nome da cor para o seu
 equivalente hexadecimal (pode ser qualquer tom);
 - Usando a estrutura switch, verifique se a cor passada por parâmetro
 é algum hexa escolhido. Se for, retorne a frase:
 "O hexadecimal para a cor [COR] é [HEXADECIMAL].";
 - Se a cor passada por parâmetro nõa estiver entre as selecionadas,
 mostre a frase:
 "Não temos o equivalente hexadecimal para [COR]."
 */

const convertToHex = nomeCor => {
    // Vamos precisar de uma tabela de cores:
    const tabelaCores = {
        red: "#ff0000",
        blue: "#0000ff",
        green: "#00ff00",
        black: "#000000",
        white: "#ffffff"
    };

    if (typeof(nomeCor) === "string") {

    }
    return null;
};

module.exports = {
    championship, teams, tabelaCores,
    showTeamPosition, convertToHex
};
