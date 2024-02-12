"use strict"

console.log("Rock Game");

function getComputerChoice() {
    const computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice == 0) return `rock`;
    else if (computerChoice == 1) return `paper`;
    else return `scissors`;
}

function getPlayerChoice() {
    let userInput = prompt(`Your choice: "Rock", "Paper" or "Scissors"`).toLowerCase();
    if (userInput === `rock` || userInput === `paper` || userInput === `scissors`) {
        return userInput;
    } else return null;
}

