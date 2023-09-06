'use strict';

let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

console.log(number);
const numberInput = document.querySelector('.guess');
const message = document.querySelector('.message');
const secretNumber = document.querySelector('.number');
const scoreLabel = document.querySelector('.score');

const displayMessage = function (message) {
  message.textContent = message;
};

document.querySelector('.check').addEventListener('click', () => {
  if (numberInput.value < number) {
    displayMessage('Too Low!');
    score--;
    scoreLabel.textContent = score;
  } else if (numberInput.value > number) {
    displayMessage('Too High!');
    score--;
    scoreLabel.textContent = score;
  } else if (numberInput.value == number) {
    message.textContent = 'You Won! 🏆';
    secretNumber.textContent = number;
    document.querySelector('.highscore').textContent = score;
    document.querySelector('body').style.backgroundColor = '#60b347';
  }
});
