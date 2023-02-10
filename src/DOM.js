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

function renderPlayer2Board(board) {
  const squares = document.querySelectorAll(".computer-square");
  for (const square of squares) {
    const position = square.getAttribute("position");
    if (board.hasOwnProperty(position)) {
      square.classList.add("computer-ship");
      square.classList.add("ship");
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
      output.textContent = "You sunk the enemy ship!";
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
          return "Sunk";
        }
        return "Hit";
      }

      square.classList.add("miss");
      output.textContent = "The computer missed.";
      return "Miss";
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
  const playAgain = document.querySelector(".play-again");
  playAgain.classList.remove("hide");
  global.gameOver = true;
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

  const ships = document.querySelectorAll(".drag-ship");
  for (const ship of ships) {
    ship.setAttribute("direction", "horizontal");
    ship.style.transform = "rotate(0deg)";
  }
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

function showBoardOne() {
  const showBoard = document.querySelector(".player-board");
  showBoard.classList.remove("hide");
  const hideBoard = document.querySelector(".computer-board");
  hideBoard.classList.add("hide");
}

function showBoardTwo() {
  const showBoard = document.querySelector(".computer-board");
  showBoard.classList.remove("hide");
  const hideBoard = document.querySelector(".player-board");
  hideBoard.classList.add("hide");
}

function hideBoards() {
  const boardsDiv = document.querySelector(".boards-div");
  boardsDiv.classList.add("hide");
}

function hideShips() {
  const ships = document.querySelectorAll(".ship");
  for (const ship of ships) {
    ship.classList.remove("ship");
    ship.classList.add("computer-ship");
  }
}

function makeShipsHorizontal() {
  const ships = document.querySelectorAll(".drag-ship");
  for (const ship of ships) {
    ship.style.transform = "rotate(0deg)";
    ship.setAttribute("direction", "horizontal");
  }
}
export {
  createPlayerGrid, createComputerGrid, renderPlayerBoard, renderComputerBoard, makeGuessWhenClicked, makeComputerGuess, clearDivs, convertPosition, playerWon, computerWon, resetBoards, showShips, showBoards, createBtn, showBoardOne, showBoardTwo, hideBoards, renderPlayer2Board, hideShips, makeShipsHorizontal,
};
