/* eslint-disable no-plusplus */
/* eslint-disable no-console */

function computerPlay() {
        const computerChoice = Math.random();
        if (computerChoice < 0.33) return 'rock';
        if (computerChoice > 0.66) return 'scissors';
        return 'paper';
}
function play(playerSelection, computerSelection) {
        if (playerSelection === 'rock') {
                if (computerSelection === 'rock') {
                        return 'Your rock tied against rock';
                }
                if (computerSelection === 'scissors') {
                        return 'Your rock won against scissors';
                }

                return 'Your rock lost against paper';
        }
        if (playerSelection === 'scissors') {
                if (computerSelection === 'rock') {
                        return 'Your scissors lost against rock';
                }
                if (computerSelection === 'scissors') {
                        return 'Your scissors tied against scissors';
                }

                return 'Your scissors won against paper';
        }

        if (computerSelection === 'rock') {
                return 'Your paper won against rock';
        }
        if (computerSelection === 'scissors') {
                return 'Your paper lost against scissors';
        }

        return 'Your paper tied against paper';
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
                console.log(play(button.id, computerPlay()));
        });
});
