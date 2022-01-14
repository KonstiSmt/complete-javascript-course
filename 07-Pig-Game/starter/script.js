'use strict';

let activeUser = 0;
let score0 = 0;
let score1 = 0;
let currentScore = 0;

const dice = document.querySelector('.dice');

dice.style.display = 'none';

function rollDice() {
    dice.style.display = 'block';
    const number = Math.trunc(Math.random() * 6) + 1;
    dice.src = `dice-${number}.png`;
    currentScore += number;
    document.querySelector(`#current--${activeUser}`).textContent = currentScore;
}

document.querySelector('.btn--roll').addEventListener('click', rollDice);