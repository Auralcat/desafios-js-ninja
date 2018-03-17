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
        caminhouQuantosMetros: "zero"
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
    this.idade++;
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
    this.caminhouQuantosMetros += metrosCaminhados;
    this.andando = true;
};

/*
 Adicione um método ao objeto 'pessoa' chamado 'parar', que irá
 modificar o valor da propriedade 'andando' para o valor booleano que
 representa "falso".
 */
pessoa.parar = () => {
    this.andando = false;
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
pessoa.mostrarIdade = () => `Olá! eu tenho ${pessoa.idade} anos!`;

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
console.log(pessoa.nomeCompleto());

/*
 Qual a idade da pessoa? (Use a instrução para responder e
 comentários inline ao lado da instrução para mostrar qual foi a
 resposta retornada)
 */

/*
 Qual o peso da pessoa? (Use a instrução para responder e
 comentários inline ao lado da instrução para mostrar qual foi a
 resposta retornada)
 */

/*
 Qual a altura da pessoa? (Use a instrução para responder e
 comentários inline ao lado da instrução para mostrar qual foi a
 resposta retornada)
 */
