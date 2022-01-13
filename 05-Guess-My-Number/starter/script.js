'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

function setHighScore() {
    if (score > highScore) {
        highScore = score;
        document.querySelector('.highscore').textContent = highScore;
    }
}

function reduceScore() {
    score--;
    if (!score) {
        displayMessage(`💥 You lost the game!`);
    } else {
        document.querySelector('.score').textContent = score;
    }
}

function displayMessage(message) {
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);

    if (!guess) {
        displayMessage(`⛔️ No Number!`);
    } else if (guess === secretNumber) {
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        displayMessage(`🎉 Correct Number!`);
        setHighScore();
    } else {
        reduceScore();
        displayMessage(guess > secretNumber ? `📈 Too high!` : `📉 Too low!`);
    }
});

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.number').textContent = `?`;
    document.querySelector('.score').textContent = score;
    displayMessage(`Start guessing...`);
    document.querySelector('.guess').value = "";
    document.querySelector('body').style.backgroundColor = '#222';
});