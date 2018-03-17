// Declarar uma variável qualquer, que receba um objeto vazio.
let foo = {};

/*
 Declarar uma variável `pessoa`, que receba suas informações pessoais.
 As propriedades e tipos de valores para cada propriedade desse objeto devem ser:
 - 'nome' - String
 - 'sobrenome' - String
 - 'genero' - String
 - 'idade' - Number
 - 'altura' - Number
 - 'peso' - Number
 - 'andando' - Boolean - recebe "falso" por padrão
 - 'caminhouQuantosMetros' - Number - recebe "zero" por padrão
*/

// Fiz um construtor pra pessoa
const criarPessoa = (nome, sobrenome, genero, idade, altura, peso) => {
    return {
        nome, sobrenome,
        genero, idade,
        altura, peso,
        andando: false,
        caminhouQuantosMetros: 0
    };
};

let pessoa = criarPessoa("Nadir", "Teles", "não-binária", 25, 1.72, 65);

// ------------------------------------------------------------------------------
// EXTRA - Usando composição de objetos para deixar essa função com menos
// argumentos. Uma boa prática é fazer a função receber 2 argumentos no
// geral e SE EXTREMAMENTE NECESSÁRIO, 3 argumentos.
// Vamos usar composição de objetos para simplificar esse objeto
// enorme agora há pouco.
let oiEuSou = (primeiro_nome, sobrenome, genero) => {
    this.primeiro_nome = primeiro_nome;
    this.sobrenome = sobrenome;
    this.genero = genero;
};

// ------------------------------------------------------------------------------

// Adicione um método ao objeto 'pessoa' chamado 'fazerAniversario'. O
// método deve alterar o valor da propriedade 'idade' dessa pessoa,
// somando '1' a cada vez que for chamado.
pessoa.fazerAniversario = () => {
    pessoa.idade++;
};

/*
 Adicione um método ao objeto 'pessoa' chamado 'andar', que terá as
 seguitnes características:
 - Esse método deve receber por parâmetro um valor que representará a
 quantidade de metros caminhados;
 - Ele deve alterar o valor da propriedade 'caminhouQuantosMetros',
 somando ao valor dessa propriedade a quantidade passada por
 parâmetro;
 - Ele deverá modificar o valor da propriedade 'andando' para o valor
 booleano que representa "verdadeiro";
 */
pessoa.andar = (metrosCaminhados) => {
    pessoa.caminhouQuantosMetros += metrosCaminhados;
    pessoa.andando = true;
};

/*
 Adicione um método ao objeto 'pessoa' chamado 'parar', que irá
 modificar o valor da propriedade 'andando' para o valor booleano que
 representa "falso".
 */
pessoa.parar = () => {
    pessoa.andando = false;
};

/*
 Crie um método chamado 'nomeCompleto', que retorne a frase:
 - "Olá! Meu nome é [NOME] [SOBRENOME]!"
 */
pessoa.nomeCompleto = () => `Olá! Meu nome é ${pessoa.nome} ${pessoa.sobrenome}!`;

/*
 Crie um método chamado 'mostrarIdade', que retorne a frase:
 - "Olá, eu tenho [IDADE] anos!"
 */
pessoa.mostrarIdade = () => `Olá! Eu tenho ${pessoa.idade} anos!`;

/*
 Crie um método chamado 'mostrarPeso', que retorne a frase:
 - "Eu peso [PESO] Kg."
 */
pessoa.mostrarPeso = () => `Eu peso ${pessoa.peso} Kg.`;


/*
 Crie um método chamado 'mostrarAltura', que retorne a frase:
 - "Minha altura é [ALTURA] m."
 */
pessoa.mostrarAltura = () => `Minha altura é ${pessoa.altura} m.`;

/*
 Agora vamos brincar um pouco com o objeto criado:
 Qual o nome completo da pessoa? (Use a instrução para responder e
 comentários inline ao lado da instrução para mostrar qual foi a
 resposta retornada)
 */
console.log(pessoa.nomeCompleto()); // Olá! Meu nome é Nadir Teles!

/*
 Qual a idade da pessoa? (Use a instrução para responder e
 comentários inline ao lado da instrução para mostrar qual foi a
 resposta retornada)
 */
console.log(pessoa.mostrarIdade());

/*
 Qual o peso da pessoa? (Use a instrução para responder e
 comentários inline ao lado da instrução para mostrar qual foi a
 resposta retornada)
 */
console.log(pessoa.mostrarPeso());

/*
 Qual a altura da pessoa? (Use a instrução para responder e
 comentários inline ao lado da instrução para mostrar qual foi a
 resposta retornada)
 */
console.log(pessoa.mostrarAltura());

/*
 Faça a 'pessoa' fazer 3 aniversários.
 */
for (let i in [1, 2, 3]) {
    pessoa.fazerAniversario();
}

/*
 Quantos anos a 'pessoa' tem agora? (Use a instrução para responder e
 comentários inline ao lado da instrução para mostrar qual foi a
 resposta retornada)
 */
console.log(pessoa.mostrarIdade());

/*
 Agora, faça a 'pessoa' caminhar alguns metros, invocando o método
 'andar' 3x, com metragens diferentes passadas por parâmetro.
 */
let random = [13, 16, 19];
for (let index in random) {
    pessoa.andar(random[index]);
}

/*
 A pessoa ainda está andando? (Use a instrução para responder e
 comentários inline ao lado da instrução para mostrar qual foi a
 resposta retornada)
 */
console.log(pessoa.andando); // Sim

/*
 Quantos metros a pessoa andou? (Use uma instrução para responder e
 comentários inline ao lado da instrução para mostrar qual foi a
 resposta retornada)
 */
console.log(pessoa.caminhouQuantosMetros);
/*
 Agora vamos deixar a brincadeira um pouco mais divertida! :D
 Crie um método para o objeto 'pessoa' chamadado 'apresentacao'. Esse
 método deve retornar a string:
 - "Olá, eu sou o [NOME COMPLETO], tenho [IDADE] anos, [ALTURA], meu
 peso é [PESO] e, só hoje, eu já caminhei [CAMINHOU QUANTOS METROS]
 metros!"

 Só que, antes de retornar a string, você vai fazer algumas
 validações:
 - Se o 'genero' de 'pessoa for "Feminino", a frase acima, no início
 da apresentação, onde diz "eu sou o", deve mostrar "a" no lugar do
 "o";
 - Se a idade for '1', a frase acima, na parte que fala da idade, vai
 mostrar a palavra "ano" ao invés de "anos", pois é singular;
 - Se a quantidade de metros caminhados for igual a '1', então a
 palavra que deve conter no retorno da frase acima é "metro" no lugar
 de "metros".
 - Para cada validação, você irá declarar uma variável localmente
 (dentro do método), que será concatenada com a frase de retorno,
 mostrando a resposta correta, de acordo com os dados inseridos no objeto.
 */
pessoa.apresentacao = () => {
    // Escolhendo o pronome:
    const particulaPronome = () => {
        let padrao = "Olá, eu sou ";
        switch (pessoa.genero.toLowerCase) {
            case "feminino":
                return padrao + "a " + pessoa.nome + " " + pessoa.sobrenome;
            case "masculino":
                return padrao + "o " + pessoa.nome + " " + pessoa.sobrenome;
        }
        return padrao + pessoa.nome + " " + pessoa.sobrenome;
    };

    // Validando idade
    const particulaIdade = () => {
        let padrao = " tenho " + pessoa.idade;
        if (pessoa.idade === 1) {
            return padrao + " ano";
        }
        return padrao + " anos";
    };

    // Validando metros caminhados
    const particulaMetros = () => {
        let padrao = " só hoje, eu já caminhei " + pessoa.caminhouQuantosMetros;
        if (pessoa.caminhouQuantosMetros === 1) {
            return padrao + " metro!";
        }
        return padrao + " metros!";
    };

    return [particulaPronome(), particulaIdade(), " " + pessoa.altura
            + " m", " meu"
            + " peso é " + pessoa.peso + " Kg e", particulaMetros()].join(",");
};

// Agora, apresente-se ;)
console.log(pessoa.apresentacao());
