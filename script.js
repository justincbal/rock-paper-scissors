const buttons = document.querySelectorAll('.btn');
const playerPlay = document.querySelector('.player');
const cpuPlay = document.querySelector('.computer');
const score = document.querySelector('.score');
const endMssg = document.querySelector('.end-message');
let playerSelection;
let computerSelection;
let lose = 0;
let win = 0;

// Handles playerSelection & Starts round
buttons.forEach( (btn) => {
    btn.addEventListener('click', () => {
        if (btn.className == 'rock btn') {playerSelection = 'rock';}
        if (btn.className == 'paper btn') {playerSelection = 'paper';}
        if (btn.className == 'scissors btn') {playerSelection = 'scissors';}

        if (win == 5 || lose == 5) { // Resets game 
           location.reload();
            
        }
        playRound();
    })
});

// Gets computer choice
function getComputerChoice() {
    const options = ['rock', 'paper', 'scissors'];
    const random = options[Math.floor(Math.random() * options.length)];
    return random;
}

// Handles game logic
function playRound() {
    computerSelection = getComputerChoice();
    playerPlay.textContent = `Player: ${playerSelection}`;
    cpuPlay.textContent = `${computerSelection} :Computer`;

    if (
        (playerSelection == 'rock' && computerSelection == 'scissors') || 
        (playerSelection == 'paper' && computerSelection == 'rock') || 
        (playerSelection == 'scissors' && computerSelection == 'paper') 
    ) { win++; console.log('YOU WIN'); endMssg.textContent = `${playerSelection} beats ${computerSelection}`;}
    else if (
        (computerSelection == 'rock' && playerSelection  == 'scissors') || 
        (computerSelection == 'paper' && playerSelection  == 'rock') || 
        (computerSelection == 'scissors' && playerSelection  == 'paper') 
    ) { lose++; console.log('YOU LOSE'); endMssg.textContent = `${playerSelection} loses to ${computerSelection}`; }
    else if (computerSelection == playerSelection) {win++; lose++; console.log('draw'); 
    endMssg.textContent = `DRAW: ${playerSelection} vs ${computerSelection}`;
};

    score.textContent = `${win}-${lose}`; // Scoreboard

    if (win == 5) {
        endMssg.textContent = 'YOU WIN!';
    } else if (lose == 5) {
        endMssg.textContent = 'YOU LOSE!';
    } else if (win == lose && win == 5) { endMssg.textContent = 'DRAW!';}

}




