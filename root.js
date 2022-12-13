function getComputerChoice() {
    
    let choice = ['Rock', 'Paper', 'Scissors'];
    choice = choice[Math.floor(Math.random() * choice.length)];
    return choice.toLowerCase();
}

function PlayRound(playerSelection, computerSelection) {
   
    playerSelection = playerSelection.toLowerCase();

   if (playerSelection ==  getComputerChoice()) {
        return "It's a Tie";
   } else if (playerSelection == 'rock' && getComputerChoice() == 'paper') {
        return "You lose! Paper beats Rock!";
   } else if (playerSelection == 'rock' && getComputerChoice() == 'scissors') {
        return "You win! Rock beats Scissors";
   } if (playerSelection == 'paper' && getComputerChoice() == 'rock') {
        return "You win! Paper beats Rock";
   } else if (playerSelection == 'paper' && getComputerChoice() == 'scissors') {
        return "You Lose! Scissors beat Paper";
   } if (playerSelection == 'scissors' && getComputerChoice() == 'rock') {
        return "You Lose! Rock beats Scissors";
   } else if (playerSelection == 'scissors' && getComputerChoice() == 'paper') {
        return "You win! Scissors beat Paper";
   } 
}

function game() {
    for (let i = 1; i <=5; i++) {
        playerSelection = prompt('Enter your choice: ');
        let result =  PlayRound(playerSelection,getComputerChoice);
        console.log("Computer chooses " + getComputerChoice());
        console.log(result);
    }
}

game();