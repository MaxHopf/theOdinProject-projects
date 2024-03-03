"use strict"

let canvasGridSize = 16;

const canvas = document.querySelector('#canvas');
const gridSizeBtn = document.querySelector('#gridSizeBtn')



for (let y = 0; y <= 16; y++) {
    const gridRow = document.createElement('div');
    gridRow.setAttribute('style', 'display: flex; flex-direction: row;')
    gridRow.classList.add('row');

    for (let x = 0; x <= 16; x++) {
        const pixel = document.createElement('div');
        pixel.setAttribute('style', 'height: 24px; width: 24px; background-color: red');
        pixel.classList.add('pixel');

        pixel.addEventListener('mouseenter', function (e) {
            e.target.style.background = 'blue';
        });
        pixel.addEventListener('mouseleave', function (e) {
            e.target.style.background = 'red';
        });

        gridRow.appendChild(pixel);
    }
    canvas.appendChild(gridRow);
}



gridSizeBtn.addEventListener('click', () => {
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
});

