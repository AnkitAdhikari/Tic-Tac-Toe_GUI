"strict mode";
const fields2 = document.querySelectorAll('.field');
console.log(fields2)

const player1 = [];

const player2 = [];

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

// TODO
// get clicked field's value and update palyer array
// check winning condition after the palyer array updates
// Display winning message 