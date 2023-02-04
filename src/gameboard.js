function gameboardFactory() {
  const gameboard = {};
  const placeShip = (ship, position, direction) => {
    if (direction === "horizontal") {
      for (let i = 0; i < ship.length; i++) {
        const positionString = position.toString();
        gameboard[positionString] = ship;
        position[0] += 1;
      }
    } else if (direction === "vertical") {
      for (let i = 0; i < ship.length; i++) {
        const positionString = position.toString();
        gameboard[positionString] = ship;
        position[1] += 1;
      }
    }
    return gameboard;
  };

  const receiveAttack = (position) => {
    const positionString = position.toString();
    if (gameboard.hasOwnProperty(positionString)) {
      if (gameboard[positionString] === "Miss") {
        return;
      } if (gameboard[positionString] === "Hit") {
        return;
      }
      const ship = gameboard[positionString];
      gameboard[positionString] = "Hit";
      return "Hit";
    }
    gameboard[positionString] = "Miss";
    return position;
  };

  const allShipsSunk = () => {
    let foundUnsunkShip = false;
    for (const [position, value] of Object.entries(gameboard)) {
      if (value !== "Miss" && value !== "Hit") {
        foundUnsunkShip = true;
      }
    }
    return !foundUnsunkShip;
  };

  return {
    gameboard, placeShip, receiveAttack, allShipsSunk,
  };
}

function isMovePossible(position, direction, length, board) {
  const currentSquare = position.slice();
  for (let i = 0; i < length; i++) {
    if (board.hasOwnProperty(currentSquare)) {
      return false;
    }
    if (direction === "horizontal") {
      currentSquare[0] += 1;
    } else {
      currentSquare[1] += 1;
    }
  }

  if (direction === "horizontal") {
    if (position[0] + length > 9) {
      return false;
    }

    return true;
  }

  if (position[1] + length > 9) {
    return false;
  }

  return true;
}

export { gameboardFactory, isMovePossible };
