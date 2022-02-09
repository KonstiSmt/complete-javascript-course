'use strict';

let activePlayer, score0, score1, currentScore, playing;

const dice = document.querySelector('.dice');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');

newGame();

function newGame() {
    dice.style.display = 'none';
    activePlayer = 0;
    player0.classList.add('player--active');
    player1.classList.remove('player--active');
    score0 = 0;
    score1 = 0;
    currentScore = 0;
    setScore(0);
    setScore(1);
    setCurrentScore(0);
    setCurrentScore(1);
    player0.classList.remove('player--winner');
    player1.classList.remove('player--winner');
    playing = true;
}

function setScore(player) {
    document.querySelector(`#score--${player}`).textContent = player ? score1 : score0;
}

function setCurrentScore(player) {
    document.querySelector(`#current--${player}`).textContent = currentScore;
}

function rollDice() {
    if (!playing) return;
    const number = Math.trunc(Math.random() * 6) + 1;
    dice.src = `dice-${number}.png`;
    dice.style.display = 'block';
    if (number === 1) {
        switchPlayer();
    } else {
        currentScore += number;
        setCurrentScore(activePlayer);
    }

}

function hold() {
    if (!playing) return;
    if (activePlayer) {
        score1 += currentScore;
    } else {
        score0 += currentScore;
    }
    setScore(activePlayer);
    checkWin();
    if (playing) switchPlayer();
}

function switchPlayer() {
    currentScore = 0;
    setCurrentScore(activePlayer);
    player1.classList.toggle('player--active');
    player0.classList.toggle('player--active');
    activePlayer = activePlayer ? 0 : 1;
}

function checkWin() {
    if (score0 >= 100 || score1 >= 100) {
        activePlayer ? player1.classList.add('player--winner') : player0.classList.add('player--winner');
        document.querySelector('.player--active').classList.remove('player--active');
        dice.style.display = 'none';
        playing = false;
    }
}

document.querySelector('.btn--roll').addEventListener('click', rollDice);
document.querySelector('.btn--hold').addEventListener('click', hold);
document.querySelector('.btn--new').addEventListener('click', newGame);
document.addEventListener('keydown', function (e) {
    if (e.key === 'r') {
        rollDice();
    } else if (e.key === 'h') {
        hold();
    } else if (e.key === 'n') {
        newGame();
    }
});