import { convertPosition } from "./DOM";
import { gameboardFactory, isMovePossible } from "./gameboard";

function playerFactory(name) {
  const myGameboard = gameboardFactory();
  const turn = false;
  const makeGuess = (position) => {
    myGameboard.receiveAttack(position);
  };
  return {
    name, turn, myGameboard, makeGuess,
  };
}

function createComputer() {
  const computer = playerFactory("Computer");

  computer.generateGuess = function (board) {
    let running = true;
    let guess;
    while (running) {
      const num1 = Math.floor(Math.random() * 10);
      const num2 = Math.floor(Math.random() * 10);
      guess = [num1, num2].toString();
      if (board[guess]) {
        if (board[guess] !== "Hit" && board[guess] !== "Miss") {
          running = false;
        }
      } else {
        running = false;
      }
    }
    guess = convertPosition(guess);
    return guess;
  };

  computer.generateShipPosition = function () {
    const num1 = Math.floor(Math.random() * 10);
    const num2 = Math.floor(Math.random() * 10);
    const guess = [num1, num2];
    return guess;
  };

  computer.generateDirection = function () {
    if (Math.random() < 0.50) {
      return "horizontal";
    }

    return "vertical";
  };

  computer.addShips = function (ships) {
    for (let i = 0; i < ships.length; i++) {
      const computerMove = computer.generateShipPosition();
      const computerDirection = computer.generateDirection();
      const possible = isMovePossible(computerMove, computerDirection, ships[i].length, computer.myGameboard.gameboard);
      if (possible) {
        computer.myGameboard.placeShip(ships[i], computerMove, computerDirection);
      } else {
        i--;
      }
    }
  };
  return computer;
}

export { playerFactory, createComputer };
