"use strict";

const display = document.querySelector('#display');
const keys = document.querySelectorAll('.key')
//const digits = document.querySelectorAll('.digit');
//const operators = document.querySelectorAll('.operator');
//const equals = document.querySelector('#equals');
//const clearAC = document.querySelector('#clear');


//let userInputArray = [0];

let mathOperation = {
    numbers: [],
    operant: null,
    display: [],
    result: null
}


keys.forEach(key => {
    key.addEventListener('click', () => {

        if (key.className.includes("digit")) {

            console.log(key);

        } else if (key.className.includes("operator")) {
            console.log(key);

        } else if (key.id.includes("equals")) {
            console.log(key);

        } else if (key.id.includes("clear")) {
            console.log(key);

        } else {
            console.log(key);
            console.log('ERROR: missing key')
        }


    });
});



/*

digits.forEach(digit => {
    digit.addEventListener('click', () => {

        console.log(userInputArray)

        if (!isNaN(Number(userInputArray[userInputArray.length - 1]))) {
            operators.forEach(operator => { operator.classList.remove('active') });
            userInputArray.push(digit.id);
            mathOperation.display.push(digit.id);
            display.textContent = mathOperation.display.join('');
        } else {
            cleaDisplay()
            operators.forEach(operator => { operator.classList.remove('active') });
            userInputArray.push(digit.id);
            mathOperation.display.push(digit.id);
            display.textContent = mathOperation.display.join('');
        }
    });
});

operators.forEach(operator => {
    operator.addEventListener('click', () => {

        userInputArray.push(operator.id);

        operators.forEach(operator => { operator.classList.remove('active') });
        operator.classList.toggle('active');

        // getNumber(userInputArray);
        const number = parseInt(userInputArray.reduce((number, digit) => number + digit));
        mathOperation.numbers.push(number);


        //updateMathOperation(operator.id);
        mathOperation.operant = operator.id;

        //clearUserInputArray();
        userInputArray = [];

        function updateMathOperation() {
            mathOperation.operant = operator.id;
        }


    });
});

equals.addEventListener('click', () => {
    //processUserInput(` ${equals.textContent} `);
    if (!isNaN(Number(userInputArray[userInputArray.length - 1]))) {
        cleaDisplay()
        //getNumber(userInputArray);
        const number = parseInt(userInputArray.reduce((number, digit) => number + digit));
        mathOperation.numbers.push(number);

        //clearUserInputArray();
        userInputArray = [];


        const result = getResult(mathOperation.numbers[mathOperation.numbers.length - 2],
            mathOperation.numbers[mathOperation.numbers.length - 1],
            mathOperation.operant);

        //displayResult(result);
        mathOperation.display.push(result);
        display.textContent = mathOperation.display.join('');

        mathOperation.numbers.push(result);
        //const resultConvertToArray = Array.from(String(result), Number);
        //resultConvertToArray.forEach(digit => { userInputArray.push(result) });


    } else {
        console.log("Error");
    }

});

clearAC.addEventListener('click', () => {
    clear();
});


*/


function cleaDisplay() {
    mathOperation.display = [];
    display.textContent = mathOperation.display;
}

function processUserInput(buttonUsed) {

    if (!isNaN(Number(buttonUsed))) {
        displayUserInput(buttonUsed);
    } else {
        mathOperation.display = [];
    }


    function displayUserInput(buttonUsed) {
        mathOperation.display.push(buttonUsed);
        display.textContent = mathOperation.display.join('');
    }

    //mathOperation.display.push(buttonUsed)
}

function displayResult(result) {
    mathOperation.display.push(result)
    display.textContent = mathOperation.display.join('');
}

function getNumber(userInputArray) {
    const number = parseInt(userInputArray.reduce((number, digit) => number + digit));
    mathOperation.numbers.push(number);
}

function clearUserInputArray() {
    userInputArray = [];
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
    clearUserInputArray();
    mathOperation.display = [];
    processUserInput('');
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