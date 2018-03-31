const iife = function() {
    "use strict";
    /*
    1. Envolva todo o conteúdo desse desafio em uma IIFE.
    2. Adicione a diretiva 'use strict';
    3. Crie um arquivo index.html e adicione esse script à ele.
    */

    // Função auxiliar pra não ficar repetindo código
    const applyRegexReplace = (regex, baseStr, newStr) => {
        let buf = baseStr;
        let matches = buf.match(regex);
        for (let m in matches) {
            buf = buf.replace(matches[m], newStr);
        }
        return buf;
    };
    /*
    Em todos os exercícios desse desafio, nós vamos utilizar expressões
    regulares! Para isso, iremos usar o texto abaixo. Coloque-o em uma
    variável chamada `text`:
    */
    let text = "Manuel Marques de Sousa, Conde de Porto Alegre (Rio Grande, 13 de junho de 1804 – Rio de Janeiro, 18 de julho de 1875), apelidado de 'O Centauro de Luvas', foi um militar, político, abolicionista e monarquista brasileiro.";

    /*
    Vamos começar com umas brincadeiras fáceis :D
    Troque o nome "Manuel Marques de Sousa" pelo seu nome, e mostre o resultado
    no console:
    */
    console.log('Adicionando seu nome no texto:');
    console.log(applyRegexReplace(/Manuel Marques de Sousa/, text, "Miriam Retka"));

    /*
    Agora, substitua a palavra "brasileiro" por sua cidade natal e mostre no
    console.
    Ex: Se você for da São Paulo, substitua por "paulista".
    */
    console.log('\nTrocando naturalidade:');
    console.log(applyRegexReplace(/brasileiro/, text, "ponta-grossense"));

    /*
    Substitua todos os números por um traço `-`. Cada caractere de número deve
    ser um traço. Mostre o resultado no console:
    */
    console.log('\nTrocando números por -:');
    console.log(applyRegexReplace(/\d/g, text, '-'));

    /*
    Substitua todas as letras (somente letras) de "D" maiúsculo até "h"
    minúsculo por "0" (número zero). Mostre o resultado no console:
    */
    console.log('\nTrocando de "D" a "h" por "0":');
    console.log(applyRegexReplace(/[D-h]g/g, text, '0'));

    /*
    Substitua todos os "A" (maiúsculos ou minúsculos) por "4".
    Mostre o resultado no console:
    */
    console.log('\nTrocando "A" e "a" por "4":');
    console.log(applyRegexReplace(/A/ig, text, '4'));

    /*
    Substitua a frase "O Centauro de Luvas", deixando-a em caixa alta, usando
    o método `toUpperCase()`. Mostre o resultado no console:
    */
    console.log('\n"O Centauro de Luvas" em caixa alta:');
    let pattern = "O Centauro de Luvas";
    console.log(applyRegexReplace(pattern, text, pattern.toUpperCase()));

    /*
    Agora iremos substituir as datas no formato "13 de junho de 1804" para
    "13/06/1804". A primeira coisa a fazer é criar uma função chamada
    `getMonthNumber`, que irá receber um parâmetro (será o nome do mês) e deverá
    retornar o número correspondente a esse mês.
    Ex: Se o usuário entrar com "março", deve retornar "03" (em string mesmo).
    Números com menos de dois dígitos devem ter um zero na frente.
    Crie então a função e mostre no console os retornos para os meses de março,
    setembro e dezembro.
    Use um console.log para cada mês, usando a frase:
    "O mês de [NOME DO MÊS] é representado pelo número [NÚMERO DO MÊS]."
    */
    console.log('\nMeses representados por números:');
    const months = ["janeiro", "fevereiro", "março", "abril",
                    "maio", "junho", "julho", "agosto",
                    "setembro", "outubro", "novembro", "dezembro"];

    const getMonthNumber = nomeMes => {
        let monthNumber = months.indexOf(nomeMes.toLowerCase()) + 1;
        if (monthNumber > 9) {
            return monthNumber;
        }
        return "0" + monthNumber;
    };

    for (let m in months) {
        let str = `O mês de ${months[m]} ` +
                  `é representado pelo número ${getMonthNumber(months[m])}`;
        console.log(str);
    }

    /*
    Agora, declare uma variável chamada `regexDate` que irá receber a expressão
    regular que irá fazer o match com as datas. Crie grupos de captura para o
    dia, o mês e o ano. Para os meses, você pode fazer o match somente com os
    meses que estão no texto, não precisa adicionar todos.
    Com o que vimos até agora, você consegue fazer :D
    Mostre a regex no console.
    */
    console.log('\nRegex que vai fazer o match com as datas do texto:');
    let regexDate = /[0-9]{1,2}º? de \w+ de [0-9]{4}/gi;
    console.log(regexDate);

    /*
    Agora crie a função que irá fazer o replace dos dados. A função será chamada
    de `replaceDate`. Ela deve retornar a data no formato:
    "[DIA]/[MÊS]/[ANO]"
    Após criar a função, faça o replace das datas no texto, mostrando no
    console o resultado.
    */
    console.log('\nReplace de datas:');

    const replaceDate = str => {
        // Converte as datas do formato "Dia de Mês de Ano" pra "Dia/Mês/Ano".
        let particles = str.split(" de " );
        particles[1] = getMonthNumber(particles[1]);
        return particles.join('/');
    };

    let matches = text.match(regexDate);
    matches.forEach(x => text = text.replace(x, replaceDate(x)));
    console.log(text);

}();
