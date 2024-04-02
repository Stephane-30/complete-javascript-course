'use strict';

// Global variables for the game
let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;

// debuggingh
console.log(`Secret no: ${secretNumber}`);

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  score = 20;
  document.querySelector('.guess').value = '';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // console.log(guess);

  if (score > 0) {
    if (!guess) {
      document.querySelector('.message').textContent = 'Not a number';
    } else if (guess !== secretNumber) {
      document.querySelector('.message').textContent =
        guess > secretNumber ? 'Number too big' : 'Number too low';
      if (--score === 0) {
        document.querySelector('.message').textContent = 'Game lost';
      }
      document.querySelector('.score').textContent = score;
    } else if (guess === secretNumber) {
      document.querySelector('.message').textContent = 'Correct';
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';

      if (score > highScore) {
        highScore = score;
        document.querySelector('.highscore').textContent = highScore;
      }
    }
  }
});

/* document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // console.log(guess);

  if (score > 0) {
    if (!guess) {
      document.querySelector('.message').textContent = 'Not a number';
    } else if (guess > secretNumber) {
      document.querySelector('.message').textContent = 'Too big';
      if (--score === 0) {
        document.querySelector('.message').textContent = 'Game lost';
      }
      document.querySelector('.score').textContent = score;
    } else if (guess < secretNumber) {
      document.querySelector('.message').textContent = 'Too small';

      --score === 0
        ? (document.querySelector('.message').textContent = 'Game lost')
        : 0;

      document.querySelector('.score').textContent = score;
    } else if (guess === secretNumber) {
      document.querySelector('.message').textContent = 'Correct';
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';

      if (score > highScore) {
        highScore = score;
        document.querySelector('.highscore').textContent = highScore;
      }
    }
  }
});
 */
