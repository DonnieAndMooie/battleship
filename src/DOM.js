import { computer } from "./player";

function createPlayerGrid() {
  const squares = [];
  const board = document.querySelector(".player-board");
  for (let col = 0; col < 10; col++) {
    for (let row = 0; row < 10; row++) {
      const square = document.createElement("div");
      square.classList.add("square");
      square.classList.add("player-square");
      squares[col, row] = square;
      board.appendChild(square);
      square.setAttribute("position", [row, col]);
    }
  }
}

function createComputerGrid() {
  const squares = [];
  const board = document.querySelector(".computer-board");
  for (let col = 0; col < 10; col++) {
    for (let row = 0; row < 10; row++) {
      const square = document.createElement("div");
      square.classList.add("square");
      square.classList.add("computer-square");
      squares[col, row] = square;
      board.appendChild(square);
      square.setAttribute("position", [row, col]);
    }
  }
}

function convertPosition(position) {
  position = Array.from(position);
  position.splice(1, 1);
  position[0] = parseInt(position[0]);
  position[1] = parseInt(position[1]);
  return position;
}

function renderPlayerBoard(board) {
  const squares = document.querySelectorAll(".player-square");
  for (const square of squares) {
    const position = square.getAttribute("position");
    if (board.hasOwnProperty(position)) {
      square.classList.add("ship");
    }
  }
}

function renderComputerBoard(board) {
  const squares = document.querySelectorAll(".computer-square");
  for (const square of squares) {
    const position = square.getAttribute("position");
    if (board.hasOwnProperty(position)) {
      square.classList.add("computer-ship");
    }
  }
}

function makeGuessWhenClicked(square) {
  const output = document.querySelector(".output");
  if (square.classList.contains("computer-ship")) {
    square.classList.add("hit");
    output.textContent = "It's a hit!";
    const position = square.getAttribute("position");
    const ship = computer.myGameboard.gameboard[position];
    console.log(ship);
    ship.hit();
    if (ship.isSunk()) {
      output.textContent = "You sunk the computer's ship!";
    }
  } else {
    square.classList.add("miss");
    output.textContent = "You missed.";
  }
}

function makeComputerGuess(guess, board) {
  const squares = document.querySelectorAll(".player-square");
  const output = document.querySelector(".computer-output");
  for (const square of squares) {
    let position = square.getAttribute("position");
    position = convertPosition(position);
    if (position.toString() === guess.toString()) {
      if (square.classList.contains("ship")) {
        square.classList.add("hit");
        output.textContent = "The computer hit your ship!";
        board[position].hit();
        if (board[position].isSunk()) {
          output.textContent = "The computer sunk your ship!";
        }
        return;
      }

      square.classList.add("miss");
      output.textContent = "The computer missed.";
      return;
    }
  }
}

function clearDivs() {
  const playerOutput = document.querySelector(".output");
  const computerOutput = document.querySelector(".computer-output");
  playerOutput.textContent = "";
  computerOutput.textContent = "";
}

function playerWon() {
  const playerOutput = document.querySelector(".output");
  const computerOutput = document.querySelector(".computer-output");
  playerOutput.textContent = "PLAYER WINS!";
  computerOutput.textContent = "";
}

function computerWon() {
  const playerOutput = document.querySelector(".output");
  const computerOutput = document.querySelector(".computer-output");
  playerOutput.textContent = "Computer WINS!";
  computerOutput.textContent = "";
}

export {
  createPlayerGrid, createComputerGrid, renderPlayerBoard, renderComputerBoard, makeGuessWhenClicked, makeComputerGuess, clearDivs, convertPosition, playerWon, computerWon,
};
