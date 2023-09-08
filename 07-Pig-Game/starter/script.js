'use strict';

const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1'); // faster than query selector
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

diceEl.classList.add('hidden');
score0El.textContent = 0;
score1El.textContent = 0;

let user1Score = 0;
let user2Score = 0;
let selectedUser = true;

// Rolling dice functionality
btnRoll.addEventListener('click', function () {
  const dice = Math.trunc(Math.random() * 6) + 1;
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;

  if (dice !== 1) {
    if (selectedUser) {
      user1Score += dice;
      score0El.textContent = user1Score;
    } else {
      user2Score += dice;
      score1El.textContent = user2Score;
    }
  } else {
    if (selectedUser) {
      user1Score = 0;
      score0El.textContent = user1Score;
    } else {
      user2Score = 0;
      score1El.textContent = user2Score;
    }
    selectedUser = !selectedUser;
  }
});

btnHold.addEventListener('click', function () {
  selectedUser = !selectedUser;
});
