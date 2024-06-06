'use strict';

// Selecting all elements
// first two elements are selected using the ID hash
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
// next two elements are selected using the ID select function
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
// select using the querySelector using the class name with . in front
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// the current scores and state need to be global
let scores;
let activePlayer;
let currentScore;
let activeGame;

// -----------------------------------------------
// Initialise all variables and reset the styles
//
const init = function () {
  // Reset everything
  // Starting conditions
  score0El.textContent = 0; // the 0 is automatically converted to a string
  score1El.textContent = 0;
  diceEl.classList.add('hidden'); // diceEl refers to the HTML element and classlist expands to the class name
  current0El.textContent = 0;
  current1El.textContent = 0;
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  activeGame = true;
  scores = [0, 0];
  activePlayer = 0;
  currentScore = 0;
};

// -----------------------------------------------
// Switch Player
//
const switchPlayer = function () {
  //diceEl.classList.add('hidden');
  current0El.textContent = 0;
  current1El.textContent = 0;
  currentScore = 0;

  activePlayer = Boolean(activePlayer) ? 0 : 1;

  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

// -----------------------------------------------
// Add up total score for each player
//
const addTotalScore = function () {
  if (!activeGame) return;

  scores[activePlayer] += currentScore;
  document.querySelector(`#score--${activePlayer}`).textContent =
    scores[activePlayer];

  if (scores[activePlayer] >= 30) {
    activeGame = false;
    diceEl.classList.add('hidden');
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add(`player--winner`);
  }
  
};

// #region Listeners
// -----------------------------------------------
//
//
btnRoll.addEventListener('click', function () {
  // rolling dice functionality
  if (!activeGame) return;

  const dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);

  diceEl.classList.remove('hidden');

  diceEl.src = `dice-${dice}.png`;

  if (dice !== 1) {
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    switchPlayer();
  }
});

// -----------------------------------------------
//
//
btnHold.addEventListener('click', function () {
  if (!activeGame) return;

  addTotalScore();
  switchPlayer();
});

// -----------------------------------------------
//
//
btnNew.addEventListener('click', init);

// start the game by resetting any value
init();
