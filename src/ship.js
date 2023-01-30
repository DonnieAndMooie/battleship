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

export { shipFactory };
