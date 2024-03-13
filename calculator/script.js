"use strict";

const inputDisplay = document.querySelector('#display-input');
const resultDisplay = document.querySelector('#display-result');
const keys = document.querySelectorAll('.key')

let inputCache = [];

let display = {
    input: [],
    result: null
}

let equation = {
    numbers: [],
    operant: null,
    interim: null,
    result: null
}

keys.forEach(key => {
    key.addEventListener('click', () => {

        if (key.className.includes("digit")) {

            inputCache.push(key.id);
            //displayNumber
            display['input'].push(key.id);
            inputDisplay.textContent = display['input'].join('');



        } else if (key.className.includes("operator")) {

            console.log(Boolean(inputCache));
            console.log(inputCache);

            if (equation.result != null) {
                console.table(equation);


                equation.numbers.push(equation.result);

                equation.operant = key.id;

                //displayOperator
                display['input'].push(`${equation.result}`);
                display['input'].push(` ${key.textContent} `);

                inputDisplay.textContent = display['input'].join('');
                resultDisplay.textContent = display[''];

                equation.result = null;




            } else {


                //setInputNumber
                const number = parseInt(inputCache.reduce((number, digit) => number + digit));
                equation.numbers.push(number);
                //clearUserInputArray();
                inputCache = [];


                if (equation.numbers.length >= 2) {
                    const interim = getResult(equation.numbers[equation.numbers.length - 2],
                        equation.numbers[equation.numbers.length - 1],
                        equation.operant);


                    equation.interim = interim;
                    equation.numbers.push(interim);
                }


                equation.operant = key.id;

                //displayOperator
                display['input'].push(` ${key.textContent} `);
                inputDisplay.textContent = display['input'].join('');

            }



        } else if (key.id.includes("equals")) {

            //if (!isNaN(Number(inputCache[inputCache.length - 1]))) {

            //clearDisplay();
            display['input'] = [];
            display.textContent = display['input'];

            //setInputNumberIntoEquation
            const number = parseInt(inputCache.reduce((number, digit) => number + digit));
            equation.numbers.push(number);

            //clearUserInputArray();
            inputCache = [];

            const result = getResult(equation.numbers[equation.numbers.length - 2],
                equation.numbers[equation.numbers.length - 1],
                equation.operant);


            equation.result = result;
            //equation.numbers.push(result);

            //resultDisplay(result);
            display.result = result;
            resultDisplay.textContent = display.result;



            console.log(key);

        } else if (key.id.includes("clear")) {

            inputCache = [];
            display.result = [];
            display.input = [];
            equation.numbers = [];
            equation.operant = null;
            equation.interim = null;
            equation.result = null;
            inputDisplay.textContent = display.input;
            resultDisplay.textContent = display.result;

        } else {
            console.log(key);
            console.log('ERROR: Missing Button Listener');
        }


    });
});

function getResult(num1, num2, operant) {
    if (operant == 'add') {
        return add(num1, num2);
    }
    else if (operant == 'substract') {
        return substract(num1, num2);
    }
    else if (operant == 'multiply') {
        return multiply(num1, num2);
    }
    else if (operant == 'divide') {
        return divide(num1, num2);
    } else
        console.log("Error in getResult Function");


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
        if (y == 0) {
            return `Math Error!`
        } else {
            return z = x / y;
        }
    }
}