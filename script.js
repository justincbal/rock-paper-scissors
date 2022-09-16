const playerChoice = document.querySelectorAll('.btn');
let optionChosen;
let computerChosen;
let win = 0;
let lose = 0;
playerChoice.forEach((choice) => {  // Handles player choice
    choice.addEventListener('click', () => {
        if (choice.className == 'scissors btn') optionChosen = 'scissors';
        if (choice.className == 'rock btn') optionChosen = 'rock';
        if (choice.className == 'paper btn') optionChosen = 'paper';
    })

    
})

function computerChoice() { // Handles computer choice
    let options = ['rock', 'paper', 'scissors'];
    let computerChosen = options[Math.floor(Math.random() * options.length)];
    return computerChosen;
}

function playRound(player, computer) {

    if (
        (player === 'scissors' && computer === 'paper') ||
        (player === 'rock' && computer === 'scissors') || 
        (player === 'paper' && computer === 'rock')
    ) { win++; return 'You win'; }
    else if ( 
        (computer === 'scissors' && player === 'paper') ||
        (computer === 'rock' && player === 'scissors') || 
        (computer === 'paper' && player === 'rock')
    ) {lose++; return 'You lose'; }
    else {
        return 'Draw';
    }
} 

function game() {
    computerChosen = computerChoice();
    let huh = playRound(optionChosen, computerChosen);
    console.log(`You chose: ${optionChosen}`);
    console.log(`Computer chose: ${computerChosen}`);
    console.log(huh);
    console.log(`Player Score: ${win}`);
    console.log(`Computer Score: ${lose}`);

}

playerChoice.forEach((choice) => {  // Handles player choice
    choice.addEventListener('click', game)

    
})