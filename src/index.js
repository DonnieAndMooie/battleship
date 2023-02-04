import "./styles.css";
import { playerFactory, computer } from "./player";
import { gameboardFactory, isMovePossible } from "./gameboard";
import {
  createPlayerGrid, createComputerGrid, renderPlayerBoard, renderComputerBoard, detectClick, makeGuessWhenClicked, makeComputerGuess, clearDivs, playerWon, computerWon,
} from "./DOM";
import { createShips, shipFactory } from "./ship";

createPlayerGrid();
createComputerGrid();

function playGame() {
  const player = playerFactory("Player");
  const ships = createShips();
  player.myGameboard.placeShip(ships[0], [3, 2], "horizontal");
  player.myGameboard.placeShip(ships[1], [4, 4], "vertical");
  player.myGameboard.placeShip(ships[2], [4, 9], "horizontal");
  player.myGameboard.placeShip(ships[3], [9, 0], "vertical");
  player.myGameboard.placeShip(ships[4], [1, 6], "vertical");
  renderPlayerBoard(player.myGameboard.gameboard);
  const computerShips = createShips();
  computer.addShips(computerShips);
  renderComputerBoard(computer.myGameboard.gameboard);
  const ComputerSquares = document.querySelectorAll(".computer-square");
  for (const square of ComputerSquares) {
    square.addEventListener("click", () => {
      clearDivs();
      makeGuessWhenClicked(square);
      computer.myGameboard.receiveAttack(square.getAttribute("position"));
      if (computer.myGameboard.allShipsSunk()) {
        playerWon();
      }
      const computerGuess = computer.generateGuess(player.myGameboard.gameboard);
      setTimeout(() => { computerMove(computerGuess, player.myGameboard); }, 500);
    }, { once: true });
  }
}

function computerMove(computerGuess, board) {
  makeComputerGuess(computerGuess, board.gameboard);
  board.receiveAttack(computerGuess);
  if (board.allShipsSunk()) {
    computerWon();
  }
}

playGame();
