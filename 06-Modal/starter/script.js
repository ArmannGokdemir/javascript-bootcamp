'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

console.log(btnsOpenModal);

btnsOpenModal.forEach(element => {
  element.addEventListener('click', () => {
    modal.classList.toggle('hidden');
    overlay.classList.toggle('hidden');
  });
});

btnCloseModal.addEventListener('click', () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
});
