"use strict";

const display = document.querySelector('#display');
const digits = document.querySelectorAll('.digit');
const operators = document.querySelectorAll('.operator');
const equals = document.querySelector('#equals');

let digitArray = [];

const mathOperation = {
    numbers: [],
    operant: null,
    display: []
}

function displayInput() {
    display.textContent = mathOperation.display.join('');
}


digits.forEach(digit => {
    digit.addEventListener('click', () => {
        mathOperation.display.push(digit.id);
        displayInput();

        digitArray.push(digit.id);
    });
});

operators.forEach(operator => {
    operator.addEventListener('click', () => {
        mathOperation.display.push(` ${operator.textContent} `);
        displayInput();

        let number = parseInt(digitArray.reduce((number, digit) => number + digit));
        mathOperation.numbers.push(number);
        digitArray = [];



        mathOperation.operant = operator.id;
        console.log(mathOperation);
    });
});

equals.addEventListener('click', () => {

});



function add(x, y) {
    let z = null;
    return z = x + y;
}

function substract(x, y) {
    let z = null;
    return z = x - y;
}

function multiply(x, y) {
    let z = null;
    return z = x * y;
}

function divide(x, y) {
    let z = null;
    return z = x / y;
}

function operate(oper, num1, num2) {
    if (oper == 'add') {
        add(num1, num2);
    } else if (oper == 'substract') {
        substract(num1, num2);
    } else if (oper == 'multiply') {
        multiply(num1, num2);
    } else if (oper == 'divide') {
        divide(num1, num2);
    }
}