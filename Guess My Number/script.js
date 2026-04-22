'use strict';

let number = Math.trunc(Math.random() * 20) + 1;
let isGameFinished = false;
let score = 20;
let highscore = 0;

document.querySelector('.again').style.display = 'none';
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (isGameFinished) return;
  if (checkNumber(guess)) {
    if (guess === number) {
      displayMessage('Correct Number!');
      document.querySelector('body').style.backgroundColor = 'green';
      document.querySelector('.again').style.display = 'block';
      document.querySelector('.number').textContent = guess;
      document.querySelector('.check').display = 'disabled';
      isGameFinished = true;

      if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
      }
    } else {
      if (score > 1) {
        displayMessage(guess > number ? 'Number is Lower' : 'Number is Higher');
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        displayMessage('💥 You lost the game!');
        document.querySelector('.score').textContent = 0;
        document.querySelector('.again').style.display = 'block';
        isGameFinished = true;
      }
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  if (isGameFinished) {
    score = 20;
    number = Math.trunc(Math.random() * 20) + 1;
    displayMessage('Start Guessing ...');
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.guess').value = '';
    document.querySelector('.again').style.display = 'none';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.score').textContent = 20;
    isGameFinished = false;
  }
});

const checkNumber = function (guess) {
  if (!guess) {
    displayMessage("You didn't type any Number!");
    return false;
  }

  if (guess < 1 || guess > 20) {
    displayMessage('Number should be between 1 and 20');
    return false;
  }

  return true;
};
