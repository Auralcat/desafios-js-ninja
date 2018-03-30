/*
 Declare uma variável chamada 'isTruthy', e atribua a ela uma função que recebe
 um único parâmetro como argumento. Essa função deve retornar 'true'
 se o equivalente booleano para o valor passado no argumento for
 'true', ou 'false' para o contrário.
 */
const isTruthy = (x) => {
    if (x) {
        return true;
    }
    return false;
};

// Invoque a função criada acima, passando todos os tipos de valores 'falsy'.
const falsyValues = [false, 0, "",
                     null, undefined, NaN];

for (let i in falsyValues) {
    console.log(isTruthy(falsyValues[i]));
}

// Invoque a função criada acima passando como parâmetro 10 valores 'truthy'.
const truthyValues = [[], {}, Infinity, true, "a",
                      11, isTruthy, /foo/, Object, "bar"];

for (let i in truthyValues) {
    console.log(isTruthy(truthyValues[i]));
}

/*
 Declare uma variável chamada 'carro', atribuindo a ela um objeto com
 as seguintes propriedades (os valores devem ser do tipo mostrado
 abaixo):
 - 'marca' - String
 - 'modelo' - String
 - 'placa' - String
 - 'ano' - Number
 - 'cor' - String
 - 'quantasPortas' - Number
 - 'assentos' - Number - cinco por padrão
 - 'quantidadePessoas' - Number - zero por padrão
 */

// Montar construtor
const criarCarro = (marca, modelo, placa, ano, cor, quantasPortas) => {
    return {
        // ES6 properties
        marca, modelo, placa,
        ano, cor, quantasPortas,

        assentos: 5,
        quantidadePessoas: 0
    };
};

let carro = criarCarro("Hafei", "Towner", "ABC-1234",
                       1997, "azul-bebê", 4);
/*
 Crie um método chamado 'mudarCor', que mude a cor do carro conforme a
 cor passada por parâmetro.
 */
carro.mudarCor = (novaCor) => {
    carro.cor = novaCor;
};

/*
 Crie um método chamado 'obterCor', que retorne a cor do carro.
 */
carro.obterCor = () => carro.cor;

/*
 Crie um método chamado 'obterModelo', que retorne o modelo do carro.
 */
carro.obterModelo = () => carro.modelo;

/*
 Crie um método chamado 'obterMarca', que retorne a marca do carro.
 */
carro.obterMarca = () => carro.marca;

/*
 Crie um método chamado 'obterMarcaModelo', que retorne:
 "Esse carro é um [MARCA] [MODELO]"
 Para retornar os valores de marca e modelo, utilize os métodos
 criados.
 */
carro.obterMarcaModelo = () =>
    `Esse carro é um ${carro.obterMarca()} ${carro.obterModelo()}`;

/*
 Crie um método que irá adicionar pessoas no carro. Esse método terá
 as seguintes características:
 - Ele deverá receber por parâmetro o número de pessoas que entrarão
 no carro. Esse número não precisa encher o carro, você poderá
 acrescentar as pessoas aos poucos.
 - O método deve retornar a frase "Já temos [X] pessoas no carro!"
 - Se o carro já estiver cheio com todos os assentos já preenchidos, o
 método deve retornar a frase "O carro já está lotado!"
 - Se ainda houverem lugares no carro, mas a quantidade de pessoas
 passadas por parâmetro for ultrapassar o limite de assentos do carro,
 então você deve mostrar quantos assentos ainda podem ser ocupados, com
 a frase:
 "Só cabem mais [QUANTIDADE_DE_PESSOAS_QUE_CABEM] pessoas!"
 - Se couber somente mais uma pessoa, mostrar a palavra "pessoa" no
 retorno citado acima, no lugar de "pessoas".
 */
carro.adicionarPessoas = (qtde_pessoas) => {
    const espacoSobrando = carro.assentos - carro.quantidadePessoas;

    // Quando todos os assentos estão ocupados
    if (carro.quantidadePessoas === carro.assentos) {
        return "O carro já está lotado!";
    }

    // Se você tentar colocar mais pessoas do que o carro comporta
    if (qtde_pessoas > espacoSobrando) {
        let quantosCabem = `Só cabem mais ${espacoSobrando} `;
        switch (espacoSobrando) {
        case 1:
            return quantosCabem + "pessoa!";
        default:
            return quantosCabem + "pessoas!";
        }
    } else {
        // Adicione as pessoas se tiver lugar
        carro.quantidadePessoas += qtde_pessoas;
    }
    return `Já temos ${carro.quantidadePessoas} no carro!`;
};

/*
 Agora vamos verificar algumas informações do carro. Para as respostas
 abaixo, utilize sempre o formato de invocação do método (ou chamada
 de propriedade), adicionando comentários _inline_ ao lado com o valor
 retornado, se o método retornar algum valor.

 Qual a cor atual do carro?
 */
console.log(carro.obterCor()); // azul-bebê

// Mude a cor do carro para vermelho.
carro.mudarCor("vermelho");

// E agora, qual a cor do carro?
console.log(carro.obterCor()); // vermelho

// Mude a cor do carro para verde musgo.
carro.mudarCor("verde musgo");

// E agora, qual a cor do carro?
console.log(carro.obterCor()); // verde musgo

// Qual a marca e modelo do carro?
console.log(carro.obterMarcaModelo()); // Hafei Towner

// Adicione 2 pessoas no carro.
console.log(carro.adicionarPessoas(2));

// Adicione mais 4 pessoas no carro.
console.log(carro.adicionarPessoas(4));

// Faça o carro encher
console.log(carro.adicionarPessoas(3));

// Tire 4 pessoas do carro.
carro.quantidadePessoas -= 4;

// Adicione 10 pessoas no carro.
console.log(carro.adicionarPessoas(10));

// Quantas pessoas temos no carro?
console.log(carro.quantidadePessoas);
