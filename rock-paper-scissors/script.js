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

function playGame(playerSelection, computerSelection) {
    computerSelection = getComputerChoice();
    playerSelection = getPlayerChoice();
    if (playerSelection === computerSelection) {
        return `It's a tie!`
    } else if (playerSelection === `rock` && computerSelection === `paper`) {
        return `You Lose! Paper beats Rock`;
    } else if (playerSelection === `rock` && computerSelection === `scissors`) {
        return `You Win! Rock beats Scissors`;
    } else if (playerSelection === `paper` && computerSelection === `rock`) {
        return `You Win! Paper beats Rock`;
    } else if (playerSelection === `paper` && computerSelection === `scissors`) {
        return `You Lose! Scissors beats Paper`
    } else if (playerSelection === `scissors` && computerSelection === `rock`) {
        retrun`You Lose! Rock beats Scissors`
    } else if (playerSelection === `scissors` && computerSelection === `paper`) {
        retrun`You Win! Scissory beats Paper`
    }
}