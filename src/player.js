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

const computer = playerFactory("Computer");
computer.generateGuess = function () {
  const num1 = Math.floor(Math.random() * 9) + 1;
  const num2 = Math.floor(Math.random() * 9) + 1;
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
  console.log(ships);
  for (let i = 0; i < ships.length; i++) {
    const computerMove = computer.generateGuess();
    const computerDirection = computer.generateDirection();
    const possible = isMovePossible(computerMove, computerDirection, ships[i].length, computer.myGameboard.gameboard);
    if (possible) {
      console.log("Placing ship");
      console.log(`${computerMove} ${computerDirection} ${ships[i].length}`);
      computer.myGameboard.placeShip(ships[i], computerMove, computerDirection);
    } else {
      i--;
      console.log("CLASH");
    }
  }
};

export { playerFactory, computer };
