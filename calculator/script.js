"use strict";

const display = document.querySelector('#display');
const digits = document.querySelectorAll('.digit');
const equals = document.querySelector('#equals');

const number = [];

digits.forEach(digit => {
    digit.addEventListener('click', () => {
        number.push(digit.id);
        display.textContent = number;
        console.log(number);
    });
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