// Score
let draw = 0;
let playerScore = 0;
let computerScore = 0;



function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];

    const random = Math.floor(Math.random() * choices.length);

    return choices[random];
}

function playRound(computerChoice, playerChoice) {
    // Case sensitive fix
    playerChoice = playerChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    console.log(`Player: ${playerChoice}\nvs\nComputer: ${computerChoice}\n`);

    if (playerChoice == 'rock' && computerChoice == 'rock') {
        console.log("Draw!");
        playerScore++;
        computerScore++;
    } else if (playerChoice == 'rock' && computerChoice == 'scissors') {
        console.log("You win!");
        playerScore++;
    } else if (playerChoice =='rock' && computerChoice == 'paper') {
        console.log("You lose!");
        computerScore++;
    } else if (playerChoice == 'paper' && computerChoice == 'rock') {
        console.log("You win!");
        playerScore++;
    } else if (playerChoice =='paper' && computerChoice == 'scissors') {
        console.log("You lose!");
        computerScore++;
    } else if (playerChoice =='paper' && computerChoice == 'paper') {
        console.log("Draw!");
        computerScore++;
        playerScore++;
    } else if (playerChoice == 'scissors' && computerChoice == 'paper') {
        console.log("You win!");
        playerScore++;
    } else if (playerChoice =='scissors' && computerChoice == 'rock') {
        console.log("You lose!");
        computerScore++;
    } else if (playerChoice =='scissors' && computerChoice == 'scissors') {
        console.log("Draw!");
        computerScore++;
        playerScore++;
    }

    // FIX THIS TO BE SHORTER ^^^^^^
}

function game() {
    for(i = 0; i < 5; i++) {
        let playerChoice = window.prompt('Rock, Paper, Or Scissors?');
        let computerChoice = getComputerChoice();
        playRound(computerChoice, playerChoice);
        console.log(`Player Score: ${playerScore}\nComputer Score: ${computerScore}`);
        console.log("\n\n");
    }

    if (playerScore > computerScore) {
        alert("YOU WIN!");
    } else {
        alert("YOU LOSE!");
    }
}

game();