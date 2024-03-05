"use strict";

const display = document.querySelector('#display');
const digits = document.querySelectorAll('.digit');
const operators = document.querySelectorAll('.operator');
const equals = document.querySelector('#equals');
const clearAC = document.querySelector('#clear');

let digitInputArray = [];

let mathOperation = {
    numbers: [],
    operant: null,
    display: [],
    result: null
}



function displayInput(content) {
    mathOperation.display.push(content)
    display.textContent = mathOperation.display.join('');
}
function displayResult(result) {
    mathOperation.display.push(result)
    display.textContent = mathOperation.display.join('');
}

function getNumber(digitInputArray) {
    const number = parseInt(digitInputArray.reduce((number, digit) => number + digit));
    mathOperation.numbers.push(number);
}

function clearDigitCache() {
    digitInputArray = [];
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


digits.forEach(digit => {
    digit.addEventListener('click', () => {
        digitInputArray.push(digit.id);



        displayInput(digit.id);
    });
});

operators.forEach(operator => {
    operator.addEventListener('click', () => {
        displayInput(` ${operator.textContent} `);

        getNumber(digitInputArray);
        clearDigitCache();

        mathOperation.operant = operator.id;
        console.log(mathOperation);
    });
});

equals.addEventListener('click', () => {
    displayInput(` ${equals.textContent} `);

    getNumber(digitInputArray);
    clearDigitCache();

    const result = getResult(mathOperation.numbers[mathOperation.numbers.length - 2],
        mathOperation.numbers[mathOperation.numbers.length - 1],
        mathOperation.operant);
    displayResult(result);
});

clearAC.addEventListener('click', () => {
    clear();
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