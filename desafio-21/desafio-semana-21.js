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
let [$timeDisplay, $startButton, $stopButton, $resetButton] =
        [...document.querySelectorAll("*[data-js]")];

let timerVariable;
let currentTime = 0;

const startTimeCount = () => {
    // Conta o tempo quando acionada
    timerVariable = setInterval(function() {
        currentTime += 1000;
        $timeDisplay.value = formatTimeString(currentTime);
    }, 1000);
};

const stopTimeCount = () => {
    clearInterval(timerVariable);
};

const resetTimeCount = () => {
    // Muda o tempo do display pra 00:00:00
    currentTime = 0;
    $timeDisplay.value = formatTimeString(currentTime);
};

const formatTimeString = rawTime => {
    // Retorna o tempo como um string no formato HH:MM:SS
    let timeUnits = [3600, 60, 1].map(x => x * 1000);
    let out = [];
    let buf = rawTime;

    timeUnits.forEach(x => {
        out.push(Math.floor(buf / x));
        buf -= Math.floor(buf / x) * x;
    });

    // Colocar 0 antes do número se for menor que 10 no campo
    return out.map(x => x < 10 ? x = "0" + x : x = x).join(":");
};

// Inicializar display
$timeDisplay.value = formatTimeString(0);

// Colocar listeners
$startButton.addEventListener("click", startTimeCount);
$stopButton.addEventListener("click", stopTimeCount);
$resetButton.addEventListener("click", resetTimeCount);

module.exports = {
    $timeDisplay,
    $stopButton, $startButton, $resetButton,
    formatTimeString, startTimeCount, stopTimeCount, resetTimeCount
};
