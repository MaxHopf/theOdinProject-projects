"use strict";

const display = document.querySelector('#display');
const digits = document.querySelectorAll('.digit');
const operators = document.querySelectorAll('.operator');
const equals = document.querySelector('#equals');
const clearAC = document.querySelector('#clear');

const inputHistory = [];

let inputArray = [];

let mathOperation = {
    numbers: [],
    operant: null,
    display: [],
    result: null
}

digits.forEach(digit => {
    digit.addEventListener('click', () => {
        inputArray.push(digit.id);
        displayInput(digit.id);



        inputHistory.push(digit.id);
    });
});

operators.forEach(operator => {
    operator.addEventListener('click', () => {

        displayInput(` ${operator.textContent} `);

        getNumber(inputArray);
        clearDigitCache();

        mathOperation.operant = operator.id;
        console.log(mathOperation);
    });
});

equals.addEventListener('click', () => {
    displayInput(` ${equals.textContent} `);

    getNumber(inputArray);
    clearDigitCache();

    const result = getResult(mathOperation.numbers[mathOperation.numbers.length - 2],
        mathOperation.numbers[mathOperation.numbers.length - 1],
        mathOperation.operant);
    displayResult(result);
});

clearAC.addEventListener('click', () => {
    clear();
});

function displayInput(pressedKey) {

    if (!isNaN(Number(pressedKey))) {
        mathOperation.display.push(pressedKey);
        display.textContent = mathOperation.display.join('');
    } else {
        mathOperation.display = [];
    }


    //mathOperation.display.push(pressedKey)
}

function displayResult(result) {
    mathOperation.display.push(result)
    display.textContent = mathOperation.display.join('');
}

function getNumber(inputArray) {
    const number = parseInt(inputArray.reduce((number, digit) => number + digit));
    mathOperation.numbers.push(number);
}

function clearDigitCache() {
    inputArray = [];
}

function getResult(num1, num2, operant) {
    if (operant == 'add') {
        console.log(add(num1, num2));
        return add(num1, num2);
    }
    else if (operant == 'substract') {
        console.log(substract(num1, num2));
        return substract(num1, num2);
    }
    else if (operant == 'multiply') {
        return multiply(num1, num2);
    }
    else if (operant == 'divide') {
        return divide(num1, num2);
    } else
        console.log("Error");
}

function clear() {
    clearDigitCache();
    mathOperation.display = [];
    displayInput('');
}

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