// define buttons
const rockButton = document.querySelector('#Rock');
rockButton.classList.add('playButtons');

const paperButton = document.querySelector('#Paper');
paperButton.classList.add('playButtons');

const scissorsButton = document.querySelector('#Scissors');
scissorsButton.classList.add('playButtons');

const newGameButton = document.querySelector('#newGame');
newGameButton.classList.add('newGame');

// game stats

const roundPoints = document.querySelector('#roundPoints');

const winner = document.querySelector('#winner');

const player = document.querySelector('#player');

const computer = document.querySelector("#computer");

// computer's random choice

function getComputerChoice() {
    const cChoice = Math.floor(Math.random() * 3) + 1;
    
    const Rock = "Rock";
    const Paper = "Paper";
    const Scissors = "Scissors"
    
    if (cChoice === 1){
        return Rock;
    } else if (cChoice === 2) {
        return Paper;
    } else {
        return Scissors;
    }
}

// starting values

let playerScore = 0;

let computerScore = 0;

let winningScore = 5;

let gameOver = false;


// add eventListener for buttons which call playRound  func

rockButton.addEventListener('click', () => {
    if (!gameOver) {
        playRound('Rock', getComputerChoice());
        game();
    }
});

paperButton.addEventListener('click', () => {
    if (!gameOver) {
        playRound('Paper', getComputerChoice());
        game();
    }
});

scissorsButton.addEventListener('click', () => {
    if (!gameOver) {
        playRound('Scissors', getComputerChoice());
        game();
    }
});

// new game button
newGameButton.addEventListener('click', () => {
    gameOver = false;
    playerScore = 0;
    computerScore = 0;
    roundPoints.textContent = '';
    player.textContent = '0';
    computer.textContent = '0';
    winner.textContent = '';
    player.classList.remove('win', 'lose');
    computer.classList.remove('win', 'lose');
})


// playRound func

function playRound(playerSelection, computerSelection) {
    const newListItem = document.createElement('li'); // creates new li for each round
    newListItem.classList.add('list');
    // lose
    if (
        (playerSelection === "Rock" && computerSelection === "Paper") ||
        (playerSelection === "Paper" && computerSelection === "Scissors") ||
        (playerSelection === "Scissors" && computerSelection === "Rock")) {
        newListItem.innerHTML = `Your Choice is ${playerSelection} & Computer's choice is ${computerSelection}. you lose!`;
        roundPoints.appendChild(newListItem);
        computerScore++;
        computer.textContent = computerScore;
    }
    // win
    else if ((playerSelection === "Rock" && computerSelection === "Scissors") || 
            (playerSelection === "Paper" && computerSelection === "Rock") ||
            (playerSelection === "Scissors" && computerSelection === "Paper")) {
            newListItem.innerHTML = `Your Choice is ${playerSelection} & Computer's choice is ${computerSelection}. you Win!`;
            roundPoints.appendChild(newListItem);
            playerScore++;
            player.textContent = playerScore;
    }
    // tie
    else if (playerSelection === computerSelection) {
        newListItem.textContent = `Your Choice is ${playerSelection} & Computer's choice is ${computerSelection}. It's a Tie!`;
        roundPoints.appendChild(newListItem);
    }

}



// game function
function game() {
    if (playerScore === winningScore || computerScore === winningScore) {
        gameOver = true;
        if (playerScore === winningScore) {
            winner.textContent = "Player Wins The Match!";
            player.classList.add('win');
            computer.classList.add('lose');
        }
        else if (computerScore === winningScore) {
            winner.textContent = "Computer Wins the game!";
            player.classList.add('lose');
            computer.classList.add('win');
        }
    }
}