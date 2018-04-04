/*
O desafio de hoje será um pequeno projeto: um cronômetro!
As regras para criação do cronômetro são as seguintes:
1. Crie um arquivo index.html e adicione esse script a ele;
2. Crie um campo `input` do tipo `text`, e inicie-o com um valor 0 (zero).
Ele será o nosso cronômetro;
3. Crie 3 botões para as ações do cronômetro: Start, Stop e Reset;
4. Ao clicar em Start, o valor do campo deve ser incrementado de 1 em 1, a
cada segundo;
5. Ao clicar em Stop, o cronômetro deve parar de contar;
6. Ao clicar em Reset, o cronômetro deve zerar e parar de contar.

Utilize o atributo data-js para nomear o campo e os botões. Você pode
usar o nome que achar melhor, desde que ele seja semântico, ou seja, o nome
dado ao elemento HTML deve definir o que o elemento é ou o que ele faz.
*/

// Selecionando os elementos
// let [$timeDisplay, $startButton, $stopButton, $resetButton] =
//         [...document.querySelectorAll("*[data-js]")];

// alert("Display" + $timeDisplay.value);
// alert("Start button" + $startButton);
// alert("Stop button" + $stopButton);
// alert("Reset button" + $resetButton);

const incrementTime = display => {

};

const formatTimeString = rawTime => {
    // Retorna o tempo como um string no formato HH:MM:SS
    let timeUnits = [3600, 60, 1];
    let out = [];
    let buf = rawTime;

    timeUnits.forEach(x => {
        out.push(Math.floor(buf / x));
        buf -= Math.floor(buf / x) * x;
    });

    // Colocar 0 antes do número se for menor que 10 no campo
    return out.map(x => x < 10 ? x = "0" + x : x = x).join(":");
};

console.log(formatTimeString(1000000));

module.exports = {
    // $timeDisplay,
    // $stopButton, $startButton, $resetButton,
    incrementTime, formatTimeString
};
