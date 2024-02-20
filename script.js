"strict mode";
const fields2 = document.querySelectorAll('.field');
console.log(fields2)

const model = document.querySelector('.model');

const player1 = [];

const player2 = [];

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
        displayWinningMessage();
      }
      changePlayer();
    }

  })
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

function displayWinningMessage() {
  model.classList.toggle('hidden');
}

// TODO
// get clicked field's value and update palyer array (#0f0)
// check winning condition after the palyer array updates (#0f0)
// Display winning message (#0f0)
// Start new game after game over
// prompt to input players name
// display winning name
// change palyer name afte game over
// improve model ui