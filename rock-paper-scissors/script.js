"use strict"

console.log("Rock the Game");
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {

    const computerChoice = Math.floor(Math.random() * 3);
    switch (computerChoice) {
        case 0: return `rock`;
        case 1: return `paper`;
        case 2: return `scissors`;
        default: return `Error: Something is wrong`;
    }
    /*
    if (computerChoice == 0) return `rock`;
    else if (computerChoice == 1) return `paper`;
    else return `scissors`;*/
}

function getPlayerChoice() {

    let userInput = prompt(`Your choice: "Rock", "Paper" or "Scissors"`).toLowerCase();
    if (userInput === `rock` || userInput === `paper` || userInput === `scissors`) {
        return userInput;
    } else return null;
}

function playRound(playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {
        console.log(`It's a tie!`);
    }
    else if ((playerSelection === `rock` && computerSelection === `paper`) ||
        (playerSelection === `paper` && computerSelection === `scissors`) ||
        (playerSelection === `scissors` && computerSelection === `rock`)) {
        computerScore++;
        console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
    }
    else if ((playerSelection === `rock` && computerSelection === `scissors`) ||
        (playerSelection === `paper` && computerSelection === `rock`) ||
        (playerSelection === `scissors` && computerSelection === `paper`)) {
        playerScore++;
        console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
    }
}

function playGame() {

    playerScore = 0;
    computerScore = 0;

    for (let i = 0; i <= 5; i++) {
        playRound(getPlayerChoice(), getComputerChoice());
        console.log(playerScore, computerScore);
    }

    if (playerScore > computerScore) {
        return `Hurray! You win the Game!`;
    } else if (playerScore < computerScore) {
        return `Buuuh! You lose the Game!`;
    } else {
        return `It's a tie!`
    }
}

