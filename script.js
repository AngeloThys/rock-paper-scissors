// A function that returns rock, paper or scissors randomly.
function getComputerChoice() {
    // Generate a random number between 0 and 2
    let randomNumber = Math.floor(Math.random() * 3);

    // Assign each number to a choice and return said choice
    switch (randomNumber) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

// A function that plays a single round of RPS.
function playRoundRPS(playerSelection, computerSelection) {
    // Case insensitive player input
    let caseInsensitivePlayerSelection = playerSelection.toLowerCase();

    // Compare selections and return result
    switch (caseInsensitivePlayerSelection) {
        case 'rock':
            switch (computerSelection) {
                case 'rock':
                    resultsDiv.textContent =  "It's a TIE! Rock equals Rock";
                    break;
                case 'paper':
                    resultsDiv.textContent =  "You LOSE! Paper beats Rock";
                    break;
                case 'scissors':
                    resultsDiv.textContent =  "You WIN! Rock beats Scissors";
                    break;
            }
            break;
        case 'paper':
            switch (computerSelection) {
                case 'rock':
                    resultsDiv.textContent =  "You WIN! Paper beats Rock";
                    break;
                case 'paper':
                    resultsDiv.textContent =  "It's a TIE! Paper equals Paper";
                    break;
                case 'scissors':
                    resultsDiv.textContent =  "You LOSE! Scissors beats Paper";
                    break;
            }
            break;
        case 'scissors':
            switch (computerSelection) {
                case 'rock':
                    resultsDiv.textContent =  "You LOSE! Rock beats Scissors";
                    break;
                case 'paper':
                    resultsDiv.textContent =  "You WIN! Scissors beats Paper";
                    break;
                case 'scissors':
                    resultsDiv.textContent =  "It's a TIE! Scissors equals Scissors";
                    break;
            }
            break;
    }
}

// A function that plays 5 rounds of RPS, keeps score and declares a winner.
// declare the winner of the game of 5.
function game() {
    let userWinCount = 0;

    for (let i = 0; i < 5; i++) {
        let result = playRoundRPS(window.prompt("Enter either 'Rock', 'Paper' or 'Scissors'"));

        console.log(result);

        if (result.includes('WIN')) {
            userWinCount++;
        } else if (result.includes('LOSE')) {
            userWinCount--;
        }
    }

    if (userWinCount > 0) {
        console.log("The User has WON!");
    } else if (userWinCount < 0) {
        console.log("The Computer has WON!");
    } else {
        console.log("It's a TIE!");
    }
}

let rockButton = document.querySelector(".rock");
let paperButton = document.querySelector(".paper");
let scissorsButton = document.querySelector(".scissors");
let resultsDiv = document.querySelector(".results");

rockButton.addEventListener('click', () => {
    playRoundRPS('rock', getComputerChoice());
});
paperButton.addEventListener('click', () => {
    playRoundRPS('paper', getComputerChoice());
});
scissorsButton.addEventListener('click', () => {
    playRoundRPS('scissors', getComputerChoice());
});
