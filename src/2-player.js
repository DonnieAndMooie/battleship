import {
  createBtn,
  createComputerGrid,
  createPlayerGrid, hideBoards, hideShips, makeGuessWhenClicked, makeShipsHorizontal, showBoardOne, showBoards, showBoardTwo, showShips,
} from "./DOM";
import { dragAndDrop } from "./drag-and-drop";
import { playerFactory } from "./player";
import { createShips } from "./ship";

let currentTurn = 1;
function playTwoPlayer() {
  const playBtn = document.querySelector(".play-game");
  playBtn.classList.add("hide");
  const playTwoPlayerBtn = document.querySelector(".play-2-player");
  playTwoPlayerBtn.classList.add("hide");

  const instructionDiv = document.querySelector(".instruction");
  instructionDiv.textContent = "Player 1 - place your ships";

  const player1 = playerFactory("player1");
  const player2 = playerFactory("player2");
  createPlayerGrid();
  createComputerGrid();
  showBoards();
  showShips();
  showBoardOne();
  const player1Ships = createShips();
  const player2Ships = createShips();
  dragAndDrop(player1.myGameboard, player1Ships);
  const confirmShipsBtn = createBtn();
  confirmShipsBtn.addEventListener("click", () => {
    confirmShipsBtn.classList.add("hide");
    passDevice();
  });
  const passDeviceBtn = document.querySelector(".pass-device");
  passDeviceBtn.addEventListener("click", () => {
    passDeviceBtn.classList.add("hide");
    instructionDiv.textContent = "Player 2 - place your ships";
    showBoards();
    showBoardTwo();
    makeShipsHorizontal();
    showShips();
    dragAndDrop(player2.myGameboard, player2Ships, 2);
    const confirmShipsBtn = createBtn();
    confirmShipsBtn.addEventListener("click", () => {
      confirmShipsBtn.classList.add("hide");
      hideShips();
      passDevice();
    });

    passDeviceBtn.addEventListener("click", () => {
      nextTurn(player1, player2);
    });
    const squares = document.querySelectorAll(".square");
    for (const square of squares) {
      square.addEventListener("click", () => {
        if (currentTurn === 1) {
          makeGuessWhenClicked(square, player2);
          player2.myGameboard.receiveAttack(square.getAttribute("position"));
          currentTurn = 2;
          setTimeout(passDevice, 1000);
          if (player2.myGameboard.allShipsSunk()) {
            const output = document.querySelector(".output");
            output.textContent = "Player 1 Wins!";
            global.gameOver = true;
            const playAgainBtn = document.querySelector(".play-again-2-player");
            playAgainBtn.classList.remove("hide");
          }
        } else {
          makeGuessWhenClicked(square, player1);
          player1.myGameboard.receiveAttack(square.getAttribute("position"));
          setTimeout(passDevice, 1000);
          currentTurn = 1;
          if (player1.myGameboard.allShipsSunk()) {
            const output = document.querySelector(".output");
            output.textContent = "Player 2 Wins!";
            global.gameOver = true;
            const playAgainBtn = document.querySelector(".play-again-2-player");
            playAgainBtn.classList.remove("hide");
          }
        }
      }, { once: true });
    }
  }, { once: true });
}

function passDevice() {
  const passDeviceBtn = document.querySelector(".pass-device");
  passDeviceBtn.classList.remove("hide");
  hideBoards();
  const instructionDiv = document.querySelector(".instruction");
  instructionDiv.textContent = "";

  if (global.gameOver) {
    passDeviceBtn.classList.add("hide");
  }
}

function nextTurn(player1, player2) {
  const passDeviceBtn = document.querySelector(".pass-device");
  passDeviceBtn.classList.add("hide");
  const instructionDiv = document.querySelector(".instruction");
  if (!global.gameOver) {
    if (currentTurn === 1) {
      const output = document.querySelector(".output");
      output.textContent = "";
      instructionDiv.textContent = "Player 1 - Make your guess";
      showBoards();
      showBoardTwo();
    } else {
      const output = document.querySelector(".output");
      output.textContent = "";
      instructionDiv.textContent = "Player 2 - Make your guess";
      showBoards();
      showBoardOne();
    }
  }
}

function resetGame() {
  document.querySelector(".player-board").innerText = "";
  document.querySelector(".computer-board").innerText = "";
  global.gameOver = false;
  const playAgainBtn = document.querySelector(".play-again-2-player");
  playAgainBtn.classList.add("hide");
  playTwoPlayer();
}

export { playTwoPlayer, resetGame };
