const iife = function() {
    /*
    Envolva todo o conteúdo desse arquivo em uma IIFE.
    */

    /*
    Crie um objeto chamado `person`, com as propriedades:
        `name`: String
        `lastname`: String
        `age`: Number
    Preencha cada propriedade com os seus dados pessoais, respeitando o tipo
    de valor para cada propriedade.
    */
    let person = {
        name: "Fulana",
        lastName: "de Tal",
        age: 22
    };
    console.log('Propriedades de "person":');

    /*
    Mostre no console, em um array, todas as propriedades do objeto acima.
    Não use nenhuma estrutura de repetição, nem crie o array manualmente.
    */
    console.log(Object.keys(person));

    /*
    Crie um array vazio chamado `books`.
    */
    let books = [];

    /*
    Adicione nesse array 3 objetos, que serão 3 livros. Cada livro deve ter a
    seguintes propriedades:
    `name`: String
    `pages`: Number
    */
    const bookNames = ["Foobar", "Hiring Ninjas", "Death Note"];
    const bookPages = [123, 15, 200];
    for (let i in bookNames) {
        books.push({ name: bookNames[i], pages: bookPages[i]});
    }
    console.log('\nLista de livros:');

    /*
    Mostre no console todos os livros.
    */
    console.log(books);

    // Copiar book para comparar com o teste!
    let booksTesting = books;

    console.log('\nLivro que está sendo removido:');
    /*
    Remova o último livro, e mostre-o no console.
    */
    console.log(books.pop());

    console.log('\nAgora sobraram somente os livros:');
    /*
    Mostre no console os livros restantes.
    */
    console.log(books);

    /*
    Converta os objetos que ficaram em `books` para strings.
    */
    books = books.map(x => JSON.stringify(x));
    console.log('\nLivros em formato string:');

    /*
    Mostre os livros nesse formato no console:
    */
    console.log(books);

    /*
    Converta os livros novamente para objeto.
    */
    books = books.map(x => JSON.parse(x));
    console.log('\nAgora os livros são objetos novamente:');
    console.log(books);

    /*
    Mostre no console todas as propriedades e valores de todos os livros,
    no formato abaixo:
        "[PROPRIEDADE]: [VALOR]"
    */
    const showProps = book => {
        for (let prop in book) {
            if (book.hasOwnProperty(prop)) {
                console.log(`${prop}: ${book[prop]}`);
            }
        }
    };

    for (let i in books) {
        showProps(books[i]);
    }

    /*
    Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
    seu nome. Adicione seu nome completo no array.
    */
    let myName = "Miriam Retka".split(' ').join('').split('');
    console.log('\nMeu nome é:');

    /*
    Juntando todos os itens do array, mostre no console seu nome.
    */
    console.log(myName.join(''));

    console.log('\nMeu nome invertido é:');

    /*
    Ainda usando o objeto acima, mostre no console seu nome invertido.
    */
    console.log(myName.reverse().join(''));

    console.log('\nAgora em ordem alfabética:');
    /*
    Mostre todos os itens do array acima, odenados alfabeticamente.
    */
    console.log(
        myName.sort(
            (a, b) => a.toLowerCase().localeCompare(b.toLowerCase())).join('')
    );

    return {
        person, books, myName
    };
}();

module.exports = {
    iife
};
