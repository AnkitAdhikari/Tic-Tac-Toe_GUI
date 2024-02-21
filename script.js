"strict mode";
const fields2 = document.querySelectorAll('.field');
console.log(fields2)

const overlay = document.querySelector('.overlay');
const model = document.querySelector('.model');
const newGameBtn = document.querySelector('.newgame-btn')

let player1 = [];

let player2 = [];

let winnerName = '';

const winningCombination = [
  [1, 2, 3],
  [1, 4, 7],
  [7, 8, 9],
  [3, 6, 9],
  [4, 5, 6],
  [1, 5, 9],
  [7, 5, 3],
  [2, 5, 8]
]

let activePlayer = player1;

fields2.forEach((field) => {
  field.addEventListener('click', (e) => {
    if (e.target.textContent == '') {
      e.target.textContent = activePlayer == player1 ? 'O' : 'X';
      const choice = +e.target.dataset.value
      updatePlayerChoice(choice);
      const won = checkWinningCondition();
      if (won) {
        updateWinnerName();
        toggleWinningMessage();
      }
      changePlayer();
    }

  })
})

newGameBtn.addEventListener('click', (e) => {
  init();
})

function changePlayer() {
  if (activePlayer == player1) {
    activePlayer = player2;
  } else {
    activePlayer = player1
  }
}

function updatePlayerChoice(choice) {
  activePlayer.push(choice);
}

function checkWinningCondition() {
  return winningCombination.some(combination => combination.every(el => activePlayer.includes(el)));
}

function updateWinnerName() {
  winnerName = activePlayer == player1 ? 'O' : 'X';
  document.querySelector('.winnerName').textContent = winnerName;
}

function toggleWinningMessage() {
  overlay.classList.toggle('hidden');
  model.classList.toggle('hidden');
}

function init() {
  player1 = [];
  player2 = [];
  winnerName = '';
  activePlayer = player1;
  fields2.forEach(field => field.textContent = '')
  toggleWinningMessage();
}

// TODO
// Start new game after game over (#0f0)
// prompt to input players name
// display winning name
// change palyer name afte game over
// improve model ui (#0f0)