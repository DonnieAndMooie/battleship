import "./styles.css";
import { playerFactory, computer } from "./player";
import { gameboardFactory, isMovePossible } from "./gameboard";
import {
  createPlayerGrid, createComputerGrid, renderPlayerBoard, renderComputerBoard,
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

  computer.addShips(ships);
  renderComputerBoard(computer.myGameboard.gameboard);
}

playGame();
