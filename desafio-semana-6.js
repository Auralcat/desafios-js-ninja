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
const showTeamPosition(pos) => {

};

module.exports = {
    championship, teams,
    showTeamPosition,
};
