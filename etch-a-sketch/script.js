"use strict"

const canvas = document.querySelector('#canvas');
const gridSizeBtn = document.querySelector('#gridSizeBtn')

gridSizeBtn.addEventListener('click', getUserInput);

buildCanvasGrid();


function buildCanvasGrid(gridSize = 2) {
    for (let y = 0; y < gridSize; y++) {
        const gridRow = document.createElement('div');
        gridRow.setAttribute('style', 'height: 100%; display: flex; flex-direction: row;')
        gridRow.classList.add('row');

        for (let x = 0; x < gridSize; x++) {
            const pixel = document.createElement('div');
            pixel.setAttribute('style', 'height: 100%; width: 100%; background-color: red');
            pixel.classList.add('pixel');

            hoverInteraction(pixel);

            gridRow.appendChild(pixel);
        }
        canvas.appendChild(gridRow);
    }
}

function removeCanvas(canvas) {
    while (canvas.firstChild) {
        canvas.removeChild(canvas.firstChild);
    }
}


function hoverInteraction(pixel) {
    pixel.addEventListener('mouseenter', function (e) {
        e.target.style.background = 'blue';
    });
    pixel.addEventListener('mouseleave', function (e) {
        e.target.style.background = 'red';
    });
}

function getUserInput() {
    let userInput;
    let isValid = false;

    while (!isValid) {
        userInput = parseInt(prompt("Enter your desired grid size for your canvas (0-100)", "24"));

        if (isNaN(userInput) || userInput < 0 || userInput > 100) {
            alert("Please enter a positive number between 0 and 100.");
        } else {
            isValid = true;
        }
    }

    return userInput;
}


