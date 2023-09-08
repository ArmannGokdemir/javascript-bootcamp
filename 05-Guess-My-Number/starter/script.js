'use strict';

let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
let gameOver = false;

console.log(number);

const message = document.querySelector('.message');
const secretNumber = document.querySelector('.number');
const scoreLabel = document.querySelector('.score');

const displayMessage = function (mes) {
  message.textContent = mes;
};

document.querySelector('.check').addEventListener('click', () => {
  const guess = document.querySelector('.guess').value;
  if (!guess) {
    displayMessage('No number! 🛑');
  } else if (guess == number || gameOver) {
    displayMessage('You Won! 🏆🎉');
    document.querySelector('.number').textContent = number;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    gameOver = true;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== number) {
    if (score > 1) {
      displayMessage(guess > number ? 'Too High 📈' : 'Too Low 📉');
      score--;
      scoreLabel.textContent = score;
    } else {
      displayMessage('You Lost 😔');
      scoreLabel.textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', () => {
  scoreLabel.textContent = 20;
  score = 20;
  Number = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('body').style.backgroundColor = '#222';
  displayMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = null;
  document.querySelector('.number').style.width = '15rem';
  gameOver = false;
});
