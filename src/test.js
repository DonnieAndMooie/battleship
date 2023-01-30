import { shipFactory } from "./ship.js";
import { gameboardFactory } from "./gameboard.js";

const testShip = shipFactory(5, 0, false);
const testBoard = gameboardFactory();
testBoard.placeShip(testShip, [2, 3], "horizontal");

test("Ship is created from factory", () => {
  expect(shipFactory(5, 0, false)).toMatchObject({
    length: 5,
    numHits: 0,
    sunk: false,
  });
});

test("hit function increases hits", () => {
  expect(shipFactory(5, 0, false).hit()).toBe(1);
});

test("isSunk works when false", () => {
  expect(shipFactory(5, 3, false).isSunk()).toBe(false);
});

test("isSunk works when true", () => {
  expect(shipFactory(5, 5, false).isSunk()).toBe(true);
});

test("places ship horizontally", () => {
  expect(gameboardFactory().placeShip(testShip, [2, 3], "horizontal")).toMatchObject(
    {
      "2,3": testShip,
      "3,3": testShip,
      "4,3": testShip,
      "5,3": testShip,
      "6,3": testShip,
    },
  );
});

test("places ship vertically", () => {
  expect(gameboardFactory().placeShip(testShip, [2, 3], "vertical")).toMatchObject(
    {
      "2,3": testShip,
      "2,4": testShip,
      "2,5": testShip,
      "2,6": testShip,
      "2,7": testShip,
    },
  );
});

test("receiveAttack works when miss", () => {
  expect(testBoard.receiveAttack([5, 5])).toStrictEqual([5, 5]);
});

test("receiveAttack works when hit", () => {
  expect(testBoard.receiveAttack([3, 3])).toBe("Hit");
});

const allSunk = gameboardFactory();
const allSunkShip = shipFactory(3, 0, false);
allSunk.placeShip(allSunkShip, [1, 1], "horizontal");
allSunk.receiveAttack([1, 1]);
allSunk.receiveAttack([2, 1]);
allSunk.receiveAttack([3, 1]);
allSunk.receiveAttack([9, 1]);

test("All ships sunk is true", () => {
  expect(allSunk.allShipsSunk()).toBe(true);
});

const notAllSunk = gameboardFactory();
const notAllSunkShip = shipFactory(3, 0, false);
notAllSunk.placeShip(allSunkShip, [1, 1], "horizontal");
notAllSunk.receiveAttack([1, 1]);
notAllSunk.receiveAttack([7, 1]);
notAllSunk.receiveAttack([3, 1]);
notAllSunk.receiveAttack([9, 1]);

test("All ships sunk is false", () => {
  expect(notAllSunk.allShipsSunk()).toBe(false);
});
