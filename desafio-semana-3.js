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
    this.andando = andando;
    this.caminhouQuantosMetros = caminhouQuantosMetros;
};

//-------------------------------------------------------------------------------
// Usando composição de objetos para deixar essa função com menos
// argumentos. Uma boa prática é fazer a função receber 2 argumentos no
// geral e SE EXTREMAMENTE NECESSÁRIO, 3 argumentos.
//-------------------------------------------------------------------------------
