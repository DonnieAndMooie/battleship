import "./styles.css";
import { playerFactory, createComputer } from "./player";
import { gameboardFactory, isMovePossible } from "./gameboard";
import {
  createPlayerGrid, createComputerGrid, renderPlayerBoard, renderComputerBoard, detectClick, makeGuessWhenClicked, makeComputerGuess, clearDivs, playerWon, computerWon, resetBoards, showShips, showBoards, createBtn,
} from "./DOM";
import { createShips, shipFactory } from "./ship";
import { dragAndDrop } from "./drag-and-drop";

const playBtn = document.querySelector(".play-game");
playBtn.addEventListener("click", playGame);

function playGame() {
  const player = playerFactory("Player");
  const computer = createComputer();
  computer.myGameboard.numPlaced = 0;
  createPlayerGrid();
  createComputerGrid();
  showShips();
  showBoards();
  const ships = createShips();
  dragAndDrop(player.myGameboard, ships);
  const confirmShipsBtn = createBtn();
  confirmShipsBtn.addEventListener("click", () => {
    if (player.myGameboard.numPlaced === 5) {
      confirmShipsBtn.classList.add("hide");
      const computerShips = createShips();
      computer.addShips(computerShips);
      renderComputerBoard(computer.myGameboard.gameboard);
      const ComputerSquares = document.querySelectorAll(".computer-square");
      let gameOver = false;

      for (const square of ComputerSquares) {
        square.addEventListener("click", () => {
          if (!gameOver) {
            clearDivs();
            makeGuessWhenClicked(square, computer);
            computer.myGameboard.receiveAttack(square.getAttribute("position"));
            if (computer.myGameboard.allShipsSunk()) {
              playerWon();
              gameOver = true;
            } else {
              const computerGuess = computer.generateGuess(player.myGameboard.gameboard);
              setTimeout(() => { computerMove(computerGuess, player.myGameboard); }, 500);
            }
          }
        }, { once: true });
      }
    }
  });
}

function computerMove(computerGuess, board) {
  makeComputerGuess(computerGuess, board.gameboard);
  board.receiveAttack(computerGuess);
  if (board.allShipsSunk()) {
    computerWon();
  }
}

const playAgainBtn = document.querySelector(".play-again");
playAgainBtn.addEventListener("click", () => {
  playAgainBtn.classList.add("hide");
  resetBoards();
  playGame();
});
