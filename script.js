/* eslint-disable no-plusplus */
/* eslint-disable no-console */

// TODO: Add a div for displaying results and change all of your console.logs into DOM methods.
// TODO: Display the running score, and announce a winner of the game once one player reaches 5 points.
const body = document.querySelector('body');

const scoreContainer = document.createElement('div');
const resultP = document.createElement('p');
resultP.textContent = 'Select a move below to play!';
scoreContainer.appendChild(resultP);
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

let computerChoice;
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

function main(playerSelection) {
        const roundResult = play(playerSelection, computerPlay());
        if (roundResult === 1) {
                resultP.textContent = `Your ${playerSelection} won against ${computerChoice}`;
                return;
        }
        if (roundResult === 0) {
                resultP.textContent = `Your ${playerSelection} tied against ${computerChoice}`;
                return;
        }
        if (roundResult === -1) {
                resultP.textContent = `Your ${playerSelection} lost against ${computerChoice}`;
        }
}

const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
        button.addEventListener('click', () => {
                main(button.id);
        });
});
