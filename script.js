"strict mode";
const fields2 = document.querySelectorAll('.field');

// window.addEventListener('load', () => {
//   alert("Hello guys")
// })

const overlay = document.querySelector('.overlay');
const model = document.querySelector('.model');
const newGameBtn = document.querySelector('.newgame-btn')

const nameBtn = document.querySelector('.name-btn')

let player1 = [];

let player2 = [];

const player1NameEl = document.querySelector('.player1-name');
const player2NameEl = document.querySelector('.player2-name');

const player1NameInputEl = document.getElementById('player1');

const player2NameInputEl = document.getElementById('player2');

const nameModel = document.querySelector(".player-name-model")

const changeNameBtn = document.querySelector(".change-name-btn")

let player1Name;

let player2Name;

let winnerName = '';

let clickCount = 0;

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
      clickCount++;
      e.target.textContent = activePlayer == player1 ? 'O' : 'X';
      const choice = +e.target.dataset.value
      updatePlayerChoice(choice);
      const won = checkWinningCondition();
      if (won) {
        updateWinnerName();
        toggleWinningMessage();
      }
      changePlayer();
      if (clickCount === 9 && !won) {
        toggleDrawMessage();
      }
    }

  })
})

changeNameBtn.addEventListener('click', (e) => {
  toggleNameContainer();
})

nameBtn.addEventListener('click', (e) => {
  updateName();
  toggleNameContainer();
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
  winnerName = activePlayer == player1 ? player1Name : player2Name;
  document.querySelector('.winnerName').textContent = winnerName + " WON!";
}

function toggleWinningMessage() {
  overlay.classList.toggle('hidden');
  model.classList.toggle('hidden');
}

function toggleDrawMessage() {
  overlay.classList.toggle('hidden');
  document.querySelector('.winnerName').textContent = "DRAW!"
  model.classList.toggle('hidden');
}

function toggleNameContainer() {
  nameModel.classList.toggle('hidden');
}

function updateName() {
  player1Name = player1NameInputEl.value == '' ? 'O' : player1NameInputEl.value;

  player1NameEl.textContent = player1Name;

  player2Name = player2NameInputEl.value == '' ? 'X' : player2NameInputEl.value;

  player2NameEl.textContent = player2Name;

  player1NameInputEl.value = '';
  player2NameInputEl.value = '';

}


function init() {
  player1 = [];
  player2 = [];
  winnerName = '';
  activePlayer = player1;
  fields2.forEach(field => field.textContent = '')
  toggleWinningMessage();
  clickCount = 0;
}

// TODO
// Start new game after game over (#0f0)
// prompt to input players name (#0f0)
// display winning name (#0f0)
// change palyer name afte game over (#0f0)
// improve model ui (#0f0)