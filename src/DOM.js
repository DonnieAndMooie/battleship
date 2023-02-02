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
      square.classList.add("ship");
    }
  }
}

export {
  createPlayerGrid, createComputerGrid, renderPlayerBoard, renderComputerBoard,
};
