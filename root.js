
let pScore = 0;
let cScore = 0;

function getComputerChoice() {
    const cChoice = Math.floor(Math.random() * 3) + 1;
    
    const rock = "ROCK";
    const paper = "PAPER";
    const scissors = "SCISSORS"
    
    if (cChoice === 1){
        return rock;
    } else if (cChoice === 2) {
        return paper;
    } else {
        return scissors;
    }
}

function playRound(playerSelection, computerSelection) {
    let pw = "Player wins!"
    let cw = "Computer wins!"
    let tie = "It's a Tie!"


    let computerChoice = getComputerChoice();

    if (playerSelection.toUpperCase() == computerChoice) {
        return tie;
    }
    
    // win

    else if (playerSelection.toUpperCase() === "ROCK" && computerChoice === "SCISSORS"){
        pScore += 1;
        return pw;
    }
    else if (playerSelection.toUpperCase() === "PAPER" && computerChoice === "ROCK"){
        pScore += 1;
        return pw;
    }
    else if (playerSelection.toUpperCase() === "SCISSORS" && computerChoice === "PAPER"){
        pScore += 1;
        return pw;
    }

    // lose

    else if (playerSelection.toUpperCase() === "ROCK" && computerChoice === "PAPER"){
        cScore += 1;
        return cw;
    }
    else if (playerSelection.toUpperCase() === "PAPER" && computerChoice === "SCISSORS"){
        cScore += 1;
        return cw;
    }
    else if (playerSelection.toUpperCase() === "SCISSORS" && computerChoice === "ROCK"){
        cScore += 1;
        return cw;
    }
}

function checkWinner(){
    if (pScore > cScore){
        console.log("PLAYER WINS THE GAME");
    } else if (pScore < cScore) {
        console.log("COMPUTER WINS THE GAME");
    } else {
        console.log(" * The Game Is Tied * ");
    }
}


function game() {
    for (let i = 0; i < 5; i++){
        let playerSelection = prompt("Rock, Paper or Scissors?: ")
        let result = playRound(playerSelection, getComputerChoice());
        console.log(result)       
    }
    checkWinner();
}

game();
