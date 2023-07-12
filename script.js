let board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let gameOver = false;
let player1Score = 0;
let player2Score = 0;

const player1Name = prompt("Enter Player 1 name:");
const player2Name = prompt("Enter Player 2 name:");

const player1Element = document.getElementById('player1');
player1Element.textContent = `Player One: ${player1Name}`;

const player2Element = document.getElementById('player2');
player2Element.textContent = `Player Two: ${player2Name}`;

const score1Element = document.getElementById('score1');
score1Element.textContent = player1Score;

const score2Element = document.getElementById('score2');
score2Element.textContent = player2Score;

const resultElement = document.getElementById('result');

function placeMarker(index) {
    if (gameOver || board[index] !== '') return;
  
    board[index] = currentPlayer;
    document.getElementsByClassName('cell')[index].textContent = currentPlayer;
  
    if (checkWinner(currentPlayer)) {
      resultElement.textContent = `${currentPlayer} wins!`;
      updateScore();
      gameOver = true;
    } else if (isBoardFull()) {
      resultElement.textContent = "It's a draw!";
      gameOver = true;
    } else {
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
  }

function checkWinner(player) {
  const winningCombinations = [ [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6] ];

  for (let combo of winningCombinations) {
    if (
      board[combo[0]] === player &&
      board[combo[1]] === player &&
      board[combo[2]] === player
    ) 
        {
            for (let index of combo) {
                 document.getElementsByClassName('cell')[index].classList.add('win');
        }
        
      return true;
    }
  }
  return false;
}


function isBoardFull() {
  return board.every(cell => cell !== '');
}

function updateScore() {
  if (currentPlayer === 'X') {
    player1Score++;
    score1Element.textContent = player1Score;
  } else {
    player2Score++;
    score2Element.textContent = player2Score;
  }
}

function nextRound() {
  board = ['', '', '', '', '', '', '', '', ''];
  currentPlayer = 'X';
  gameOver = false;
  resultElement.textContent = '';

  for (let i = 0; i < 9; i++) {
    document.getElementsByClassName('cell')[i].textContent = '';
    document.getElementsByClassName('cell')[i].classList.remove('win');
  }
}
