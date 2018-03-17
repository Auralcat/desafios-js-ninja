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
let pessoa = (nome, sobrenome, genero, idade, altura, peso, andando,
              caminhouQuantosMetros) => {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.genero = genero;
    this.idade = idade;
    this.altura = altura;
    this.peso = peso;
    this.andando = false;
    this.caminhouQuantosMetros = "zero";
};

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
pessoa.nomeCompleto = () => `Olá! Meu nome é ${this.nome} ${this.sobrenome}!`;

/*
 Crie um método chamado 'mostrarIdade', que retorne a frase:
 - "Olá, eu tenho [IDADE] anos!"
 */
pessoa.mostrarIdade = () => `Olá! eu tenho ${this.idade} anos!`;

/*
 Crie um método chamado 'mostrarPeso', que retorne a frase:
 - "Eu peso [PESO] Kg."
 */
pessoa.mostrarPeso = () => `Eu peso ${this.peso} Kg.`;
