import { convertPosition, makeComputerGuess, computerWon } from "./DOM";
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

let previousHit;
let prevPrevHit;
const visited = [];
const currentShip = [];

function resetVariables() {
  previousHit = null;
  prevPrevHit = null;
  visited.splice(0, visited.length);
  currentShip.splice(0, currentShip.length);
}

function computerMove(computerGuess, board) {
  if (previousHit && !prevPrevHit) {
    computerGuess = generateAdjacentSquare(previousHit);
  }

  if (previousHit && prevPrevHit) {
    const returnedVal = findNextPossibleHit(previousHit, prevPrevHit, currentShip);
    if (returnedVal !== null) {
      computerGuess = returnedVal;
    }
  }

  const result = makeComputerGuess(computerGuess, board.gameboard);

  if (result === "Hit") {
    currentShip.push(computerGuess);
    prevPrevHit = previousHit;
    previousHit = computerGuess;
  }
  if (result === "Sunk") {
    prevPrevHit = null;
    previousHit = null;
    currentShip.splice(0, currentShip.length);
  }
  board.receiveAttack(computerGuess);
  visited.push(computerGuess.toString());
  if (board.allShipsSunk()) {
    computerWon();
  }
}

function generateAdjacentSquare(previousHit) {
  const adjacentSlots = [];
  adjacentSlots.push([previousHit[0] + 1, previousHit[1]]);
  adjacentSlots.push([previousHit[0] - 1, previousHit[1]]);
  adjacentSlots.push([previousHit[0], previousHit[1] + 1]);
  adjacentSlots.push([previousHit[0], previousHit[1] - 1]);
  if (adjacentSlots === []) { return; }
  for (const visitedSquare of visited) {
    for (const adjacentSlot of adjacentSlots) {
      if (visitedSquare.toString() === adjacentSlot.toString()) {
        const index = adjacentSlots.indexOf(adjacentSlot);
        adjacentSlots.splice(index, 1);
      }
    }
  }

  const randomNum = Math.floor(Math.random() * adjacentSlots.length);
  return adjacentSlots[randomNum];
}

function findNextPossibleHit(previousHit, prevPrevHit, currentShip) {
  let nextMove;
  const possibleMoves = [];
  if (previousHit[0] === prevPrevHit[0]) { // ship must be vertical
    let lowest = currentShip[0];
    let highest = currentShip[0];
    for (const hit of currentShip) {
      if (hit[1] < lowest[1]) {
        lowest = hit;
      }
      if (hit[1] > highest[1]) {
        highest = hit;
      }
    }
    possibleMoves.push([highest[0], highest[1] + 1]);
    possibleMoves.push([lowest[0], lowest[1] - 1]);
  } else { // ship must be horizontal
    let lowest = currentShip[0];
    let highest = currentShip[0];
    for (const hit of currentShip) {
      if (hit[0] < lowest[0]) {
        lowest = hit;
      }
      if (hit[0] > highest[0]) {
        highest = hit;
      }
    }
    possibleMoves.push([highest[0] + 1, highest[1]]);
    possibleMoves.push([lowest[0] - 1, lowest[1]]);
  }
  for (const visitedSquare of visited) {
    for (const possibleMove of possibleMoves) {
      if (visitedSquare.toString() === possibleMove.toString()) {
        const index = possibleMoves.indexOf(possibleMove);
        possibleMoves.splice(index, 1);
      }
    }
  }
  const randomNum = Math.floor(Math.random() * possibleMoves.length);
  if (!possibleMoves[randomNum]) {
    return null;
  }
  return possibleMoves[randomNum];
}

export {
  playerFactory, createComputer, computerMove, resetVariables,
};
