import { shipFactory } from "./ship.js";

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
