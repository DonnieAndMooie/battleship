import { gameboardFactory } from "./gameboard";

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

const computer = Object.create(playerFactory("Computer"), {
  generateGuess: () => {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    const guess = [num1, num2];
    return guess;
  },
});

export { playerFactory };
