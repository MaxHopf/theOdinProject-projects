"use strict"

console.log("Rock the Game");

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

function playRound(playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {
        return `It's a tie!`
    }
    else if ((playerSelection === `rock` && computerSelection === `paper`) ||
        (playerSelection === `paper` && computerSelection === `scissors`) ||
        (playerSelection === `scissors` && computerSelection === `rock`)) {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
    else if ((playerSelection === `rock` && computerSelection === `scissors`) ||
        (playerSelection === `paper` && computerSelection === `rock`) ||
        (playerSelection === `scissors` && computerSelection === `paper`)) {
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    }
}

