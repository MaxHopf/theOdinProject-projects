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

        if (key[`className`].includes("digit")) {

            if (equation[`result`] != null) {

                clear();
                inputCache.push(key.id);
                displayInput(key.id);

            } else {

                inputCache.push(key.id);
                displayInput(key.id);

            }

        } else if (key[`className`].includes("operator")) {

            if (isNaN(Number(display[`input`][display[`input`].length - 1])) && display[`input`].length > 0) {

                equation[`operant`] = key[`id`];
                display['input'].pop();
                displayInput(` ${key[`textContent`]} `);

            } else {

                if (equation[`result`] != null) {

                    setResultToEquation();
                    equation[`operant`] = key[`id`];
                    display['input'].push(`${equation[`result`]}`);
                    displayResult(clearDisplay(`result`));
                    displayInput(` ${key[`textContent`]} `);
                    equation[`result`] = null;

                } else {

                    setUserInputToEquation()
                    if (equation[`numbers`].length >= 2) {

                        const interim = operate(equation[`numbers`][equation[`numbers`].length - 2],
                            equation[`numbers`][equation[`numbers`].length - 1],
                            equation[`operant`]);
                        equation[`interim`] = interim;
                        equation[`numbers`].push(interim);

                    }
                    equation[`operant`] = key[`id`];
                    displayInput(` ${key[`textContent`]} `);

                }
            }

        } else if (key[`id`].includes("equals")) {

            clearDisplay(`input`);
            setUserInputToEquation();
            displayResult(getResult());

        } else if (key[`id`].includes("clear")) {

            clear();

        } else {

            console.log('ERROR: Missing Button Listener');

        }
    });
});

function clearDisplay(selector) {
    display[`${selector}`] = [];
}

function setResultToEquation() {
    equation[`numbers`].push(equation[`result`]);
}

function setUserInputToEquation() {
    const number = parseInt(inputCache.reduce((number, digit) => number + digit));
    equation[`numbers`].push(number);
    clearInputCache();

    function clearInputCache() {
        inputCache = [];
    }
}

function displayInput(content) {
    display['input'].push(content);
    inputDisplay[`textContent`] = display['input'].join('');
}

function displayResult(result) {
    display[`result`] = result;
    resultDisplay[`textContent`] = display[`result`];
}

function getResult() {
    const result = operate(equation[`numbers`][equation[`numbers`].length - 2],
        equation[`numbers`][equation[`numbers`].length - 1],
        equation[`operant`]);
    equation[`result`] = result;
    return result
}

function operate(num1, num2, operant) {
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
        console.log("Error in operate Function");


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

function clear() {
    inputCache = [];
    display[`result`] = [];
    display[`input`] = [];
    equation[`numbers`] = [];
    equation[`operant`] = null;
    equation[`interim`] = null;
    equation[`result`] = null;
    inputDisplay[`textContent`] = display[`input`];
    resultDisplay[`textContent`] = display[`result`];
}