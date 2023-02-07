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

function makeGuessWhenClicked(square, computer) {
  const output = document.querySelector(".output");
  if (square.classList.contains("computer-ship")) {
    square.classList.add("hit");
    output.textContent = "It's a hit!";
    const position = square.getAttribute("position");
    const ship = computer.myGameboard.gameboard[position];
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

  const playAgain = document.querySelector(".play-again");
  playAgain.classList.remove("hide");

  const computerSquares = document.querySelectorAll(".computer-square");
}

function computerWon() {
  const playerOutput = document.querySelector(".output");
  const computerOutput = document.querySelector(".computer-output");
  playerOutput.textContent = "Computer WINS!";
  computerOutput.textContent = "";
}

function resetBoards() {
  const playerBoard = document.querySelector(".player-board");
  const computerBoard = document.querySelector(".computer-board");
  playerBoard.innerText = "";
  computerBoard.innerText = "";

  const playerOutput = document.querySelector(".output");
  const computerOutput = document.querySelector(".computer-output");
  playerOutput.textContent = "";
  computerOutput.textContent = "";
}

function showShips() {
  const ships = document.querySelectorAll(".drag-ship");
  for (const ship of ships) {
    ship.classList.remove("hide");
  }
}

function showBoards() {
  const playBtn = document.querySelector(".play-game");
  playBtn.classList.add("hide");
  const boardsDiv = document.querySelector(".boards-div");
  boardsDiv.classList.remove("hide");
}

function createBtn() {
  const confirmShipsBtn = document.createElement("button");
  confirmShipsBtn.classList.add("confirm-ships");
  confirmShipsBtn.textContent = "Confirm Ship Placements";
  const buttonDiv = document.querySelector(".buttons");
  buttonDiv.appendChild(confirmShipsBtn);
  return confirmShipsBtn;
}

export {
  createPlayerGrid, createComputerGrid, renderPlayerBoard, renderComputerBoard, makeGuessWhenClicked, makeComputerGuess, clearDivs, convertPosition, playerWon, computerWon, resetBoards, showShips, showBoards, createBtn,
};
