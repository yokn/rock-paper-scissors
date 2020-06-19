/* eslint-disable no-plusplus */
/* eslint-disable no-console */
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
                console.log(`Your ${playerSelection} won against ${computerChoice}`);
                return;
        }
        if (roundResult === 0) {
                console.log(`Your ${playerSelection} tied against ${computerChoice}`);
                return;
        }
        if (roundResult === -1) {
                console.log(`Your ${playerSelection} lost against ${computerChoice}`);
        }
}

const buttoncontainer = document.querySelector('#buttoncontainer');

const button1 = document.createElement('button');
const button2 = document.createElement('button');
const button3 = document.createElement('button');

button1.setAttribute('id', 'rock');
button2.setAttribute('id', 'paper');
button3.setAttribute('id', 'scissors');

button1.textContent = 'Rock';
button2.textContent = 'Paper';
button3.textContent = 'Scissors';

buttoncontainer.appendChild(button1);
buttoncontainer.appendChild(button2);
buttoncontainer.appendChild(button3);

const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
        button.addEventListener('click', () => {
                main(button.id);
        });
});
