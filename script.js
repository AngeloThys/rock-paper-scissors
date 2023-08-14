// All the choices in a game of rock, paper, scissors, spock, lizard from The Big Bang Theory.
const choices = ["rock", "paper", "scissors", "spock", "lizard"];

class Game {
    constructor(resultsDiv, gameDiv) {
        this.results = {
            rock: ["scissors", "lizard"],
            paper: ["rock", "spock"],
            scissors: ["paper", "lizard"],
            spock: ["scissors", "rock"],
            lizard: ["paper", "spock"]
        };
        this.resultsDiv = resultsDiv;
        this.gameDiv = gameDiv;
    }

    // An automatic, pseudo-randomized choice for the computer.
    getComputerChoice() {
        let computerChoice = choices[Math.floor(Math.random() * choices.length)];

        return computerChoice;
    }

    // A single round of RPSSL.
    playRound(playerChoice, computerChoice) {
        let sanitizedPlayerChoice = playerChoice.toLowerCase();

        if (sanitizedPlayerChoice === computerChoice) {
            this.resultsDiv.textContent += "It's a tie!\r\n";
        } else if (this.results[sanitizedPlayerChoice].includes(computerChoice)) {
            userWinCount++;
            this.resultsDiv.textContent += `You win! ${sanitizedPlayerChoice} beats ${computerChoice}.\r\n`;
        } else {
            userWinCount--;
            this.resultsDiv.textContent += `You lose! ${computerChoice} beats ${sanitizedPlayerChoice}.\r\n`;
        }

        gameCounter++;

        if (gameCounter >= 5) {
            if (userWinCount > 0) {
                this.gameDiv.textContent += "The User has WON!\r\n";
            } else if (userWinCount < 0) {
                this.gameDiv.textContent += "The Computer has WON!\r\n";
            } else {
                this.gameDiv.textContent += "It's a TIE!\r\n";
            }

            gameCounter = 0;
        }
    }
}

let gameCounter = 0;
let userWinCount = 0;


let rockMapArea = document.querySelector(".rock");
let paperMapArea = document.querySelector(".paper");
let scissorsMapArea = document.querySelector(".scissors");
let spockMapArea = document.querySelector(".spock");
let lizardMapArea = document.querySelector(".lizard");
let resultsDiv = document.querySelector(".roundResults");
let gameDiv = document.querySelector(".gameResults");

const newGame = new Game(resultsDiv, gameDiv);

rockMapArea.addEventListener('click', () => {
    newGame.playRound('rock', newGame.getComputerChoice());
});
paperMapArea.addEventListener('click', () => {
    newGame.playRound('paper', newGame.getComputerChoice());
});
scissorsMapArea.addEventListener('click', () => {
    newGame.playRound('scissors', newGame.getComputerChoice());
});
spockMapArea.addEventListener('click', () => {
    newGame.playRound('spock', newGame.getComputerChoice());
});
lizardMapArea.addEventListener('click', () => {
    newGame.playRound('lizard', newGame.getComputerChoice());
});
