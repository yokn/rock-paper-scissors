/* eslint-disable no-plusplus */
/* eslint-disable no-console */
let playerScore = 0;
let computerScore = 0;
let computerChoice;

const body = document.querySelector('body');

const scoreContainer = document.createElement('div');
const resultP = document.createElement('p');
resultP.textContent = 'Select a move below to play!';
const scoreP = document.createElement('p');
scoreP.textContent = '0 vs 0';
scoreContainer.appendChild(resultP);
scoreContainer.appendChild(scoreP);

body.appendChild(scoreContainer);

const buttonContainer = document.createElement('div');
const button1 = document.createElement('button');
const button2 = document.createElement('button');
const button3 = document.createElement('button');
button1.setAttribute('id', 'rock');
button2.setAttribute('id', 'paper');
button3.setAttribute('id', 'scissors');
button1.textContent = 'Rock';
button2.textContent = 'Paper';
button3.textContent = 'Scissors';
buttonContainer.appendChild(button1);
buttonContainer.appendChild(button2);
buttonContainer.appendChild(button3);

body.appendChild(buttonContainer);

function computerPlay() {
        const randomSeed = Math.random();
        if (randomSeed < 0.33) {
                return (computerChoice = 'rock');
        }
        if (randomSeed > 0.66) {
                return (computerChoice = 'scissors');
        }
        return (computerChoice = 'paper');
}

function play(playerSelection, computerSelection) {
        if (playerSelection === 'rock') {
                if (computerSelection === 'rock') {
                        return 0;
                }
                if (computerSelection === 'scissors') {
                        return 1;
                }

                return -1;
        }
        if (playerSelection === 'scissors') {
                if (computerSelection === 'rock') {
                        return -1;
                }
                if (computerSelection === 'scissors') {
                        return 0;
                }

                return 1;
        }

        if (computerSelection === 'rock') {
                return 1;
        }
        if (computerSelection === 'scissors') {
                return -1;
        }

        return 0;
}

function resetGame() {
        playerScore = 0;
        computerScore = 0;
        scoreP.textContent = '0 vs 0';
}
function updateScore() {
        scoreP.textContent = `${playerScore} vs ${computerScore}`;
        if (playerScore === 5) {
                alert('You won!');
                resetGame();
        }
        if (computerScore === 5) {
                alert('You lost!');
                resetGame();
        }
}

function main(playerSelection) {
        const roundResult = play(playerSelection, computerPlay());
        if (roundResult === 1) {
                resultP.textContent = `Your ${playerSelection} won against ${computerChoice}`;
                playerScore++;
        }
        if (roundResult === 0) {
                resultP.textContent = `Your ${playerSelection} tied against ${computerChoice}`;
        }
        if (roundResult === -1) {
                resultP.textContent = `Your ${playerSelection} lost against ${computerChoice}`;
                computerScore++;
        }
        updateScore();
}

const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
        button.addEventListener('click', () => {
                main(button.id);
        });
});
