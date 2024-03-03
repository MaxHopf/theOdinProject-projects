"use strict"

const canvas = document.querySelector('#canvas');

for (let y = 0; y <= 16; y++) {
    const gridRow = document.createElement('div');
    gridRow.setAttribute('style', 'display: flex; flex-direction: row;')
    gridRow.classList.add('row');

    for (let x = 0; x <= 16; x++) {
        const pixel = document.createElement('div');
        pixel.setAttribute('style', 'height: 24px; width: 24px; background-color: red');
        pixel.classList.add('pixel');
        gridRow.appendChild(pixel);
    }
    canvas.appendChild(gridRow);
}