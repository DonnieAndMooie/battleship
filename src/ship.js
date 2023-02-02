function shipFactory(length, numHits, sunk) {
  const hit = () => {
    numHits += 1;
    return numHits;
  };

  const isSunk = () => {
    if (numHits === length) {
      sunk = true;
      return true;
    }

    return false;
  };

  return {
    length, numHits, sunk, hit, isSunk,
  };
}

const ships = {
  carrier: 5,
  battleship: 4,
  cruiser: 3,
  submarine: 3,
  patrolBoat: 3,
};

function createShips() {
  const shipsArray = [];
  for (const [ship, length] of Object.entries(ships)) {
    const newShip = shipFactory(length, 0, false);
    shipsArray.push(newShip);
  }
  return shipsArray;
}

export { shipFactory, createShips };
