import { convertPosition, renderPlayerBoard } from "./DOM";
import { isMovePossible } from "./gameboard";

function dragAndDrop(board, shipsArray) {
  board.numPlaced = 0;
  const ships = document.querySelectorAll(".drag-ship");
  const squares = document.querySelectorAll(".player-square");

  for (const ship of ships) {
    ship.addEventListener("dragstart", dragStart);
    ship.addEventListener("dragend", () => {
      dragEnd(ship, shipsArray);
    });
    ship.addEventListener("click", rotate);
  }

  for (const square of squares) {
    square.addEventListener("dragover", dragOver);
    square.addEventListener("dragenter", dragEnter);
    square.addEventListener("dragleave", dragLeave);
    square.addEventListener("drop", (e) => {
      let position = square.getAttribute("position");
      position = convertPosition(position);
      const shipDragged = document.querySelector(".dragging");
      const index = shipDragged.getAttribute("index");
      const { length } = shipsArray[index];
      if (isMovePossible(position, "horizontal", length, board.gameboard)) {
        square.classList.remove("hovered");
        board.placeShip(shipsArray[index], position, "horizontal");
        renderPlayerBoard(board.gameboard);
        shipDragged.classList.remove("dragging");
        shipsArray[index] = "placed";
        board.numPlaced++;
      } else {
        square.classList.remove("hovered");
        shipDragged.classList.remove("hide");
      }
    });
  }
}

function dragStart() {
  setTimeout(() => { this.classList.add("hide"); }, 0);
  this.classList.add("dragging");
}

function dragEnd(ship, shipsArray) {
  const index = ship.getAttribute("index");
  if (shipsArray[index] === "placed") {
    ship.classList.add("hide");
  } else {
    ship.classList.remove("hide");
  }
}

function dragOver(e) {
  e.preventDefault();
}

function dragEnter() {
  this.classList.add("hovered");
}

function dragLeave() {
  this.classList.remove("hovered");
}

function rotate() {
  this.style.transform = "rotate(90deg)";
}
export { dragAndDrop };
