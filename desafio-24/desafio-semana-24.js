/*
Nossa calculadora agora está funcional! A ideia desse desafio é modularizar
o código, conforme vimos na aula anterior. Quebrar as responsabilidades
em funções, onde cada função faça somente uma única coisa, e faça bem feito.

- Remova as duplicações de código;
- agrupe os códigos que estão soltos em funções (declarações de variáveis,
listeners de eventos, etc);
- faça refactories para melhorar esse código, mas de forma que o mantenha com a
mesma funcionalidade.
*/

let $visor = document.querySelector('[data-js="visor"]');
let $buttonsNumbers = document.querySelectorAll('[data-js="button-number"]');
let $buttonsOperations = document.querySelectorAll('[data-js="button-operation"]');
let $buttonCE = document.querySelector('[data-js="button-ce"]');
let $buttonEqual = document.querySelector('[data-js="button-equal"]');

const addListeners = () => {
    // Essa função só é usada aqui
    const addClickEventListener = (element, func) => {
        // É só pra não ficar digitando 'click' e false o tempo inteiro
        element.addEventListener('click', func, false);
        // Adiciona um booleano ao elemento
        element.hasListener = true;
    };

    $buttonsNumbers.forEach(function(button) {
        addClickEventListener(button, addNumberToVisor);
    });

    $buttonsOperations.forEach(function(button) {
        addClickEventListener(button, addOperatorToVisor);
    });

    addClickEventListener($buttonCE, handleClickCE);
    addClickEventListener($buttonEqual, handleClickEqual);
};

function addNumberToVisor() {
  $visor.value += this.value;
}

function addOperatorToVisor() {
  $visor.value = removeLastItem($visor.value);
  $visor.value += this.value;
}

const handleClickCE = () => {
  $visor.value = 0;
};

const isLastItemAnOperation = number => {
  let operations = ['+', '-', 'x', '÷'];
  let lastItem = number.split('').pop();
  return operations.some(function(operator) {
    return operator === lastItem;
  });
};

const removeLastItem = number => {
  if(isLastItemAnOperation(number)) {
    return number.slice(0, -1);
  }
  return number;
};

const handleClickEqual = () => {
  $visor.value = removeLastItem($visor.value);
  let allValues = $visor.value.match(/\d+[+x÷-]?/g);
  $visor.value = allValues.reduce(function(accumulated, actual) {
    let firstValue = accumulated.slice(0, -1);
    let operator = accumulated.split('').pop();
    let lastValue = removeLastItem(actual);
    let lastOperator = isLastItemAnOperation(actual) ? actual.split('').pop() : '';
    switch(operator) {
      case '+':
        return ( Number(firstValue) + Number(lastValue) ) + lastOperator;
      case '-':
        return ( Number(firstValue) - Number(lastValue) ) + lastOperator;
      case 'x':
        return ( Number(firstValue) * Number(lastValue) ) + lastOperator;
      case '÷':
        return ( Number(firstValue) / Number(lastValue) ) + lastOperator;
    }
  });
};

addListeners();
