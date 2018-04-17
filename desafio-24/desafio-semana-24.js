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

const addClickEventListener = (element, func) => {
    // É só pra não ficar digitando 'click' e false o tempo inteiro
    element.addEventListener('click', func, false);
};

const addListeners = () => {
    $buttonsNumbers.forEach(function(button) {
        button.addClickEventListener(handleClickNumber);
    });

    $buttonsOperations.forEach(function(button) {
        button.addClickEventListener(handleClickOperation);
    });

    $buttonCE.addClickEventListener(handleClickCE);
    $buttonEqual.addClickEventListener(handleClickEqual);
};

const handleClickNumber = () => {
  $visor.value += this.value;
};

const handleClickOperation = () => {
  $visor.value = removeLastItemIfItIsAnOperator($visor.value);
  $visor.value += this.value;
};

const handleClickCE = () => {
  $visor.value = 0;
};

const isLastItemAnOperation = number => {
  var operations = ['+', '-', 'x', '÷'];
  var lastItem = number.split('').pop();
  return operations.some(function(operator) {
    return operator === lastItem;
  });
};

const removeLastItemIfItIsAnOperator = number => {
  if(isLastItemAnOperation(number)) {
    return number.slice(0, -1);
  }
  return number;
};

const handleClickEqual = () => {
  $visor.value = removeLastItemIfItIsAnOperator($visor.value);
  let allValues = $visor.value.match(/\d+[+x÷-]?/g);
  $visor.value = allValues.reduce(function(accumulated, actual) {
    let firstValue = accumulated.slice(0, -1);
    let operator = accumulated.split('').pop();
    let lastValue = removeLastItemIfItIsAnOperator(actual);
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
