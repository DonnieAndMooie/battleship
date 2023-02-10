import {
  convertPosition, renderComputerBoard, renderPlayer2Board, renderPlayerBoard,
} from "./DOM";
import { isMovePossible } from "./gameboard";
import ship1 from "./assets/images/ship-1.png";
import ship2 from "./assets/images/ship-2.png";
import ship3 from "./assets/images/ship-3.png";

const ship1Img = new Image();
ship1Img.src = ship1;

const ship2Img = new Image();
ship2Img.src = ship2;

const ship3Img = new Image();
ship3Img.src = ship3;

function dragAndDrop(board, shipsArray, player) {
  board.numPlaced = 0;
  const ships = document.querySelectorAll(".drag-ship");
  let squares;
  if (player === 2) {
    squares = document.querySelectorAll(".computer-square");
  } else {
    squares = document.querySelectorAll(".player-square");
  }

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
      const direction = shipDragged.getAttribute("direction");
      if (isMovePossible(position, direction, length, board.gameboard)) {
        square.classList.remove("hovered");
        board.placeShip(shipsArray[index], position, direction);
        if (player === 2) {
          renderPlayer2Board(board.gameboard);
        } else {
          renderPlayerBoard(board.gameboard);
        }

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

function dragStart(e) {
  if (this.getAttribute("direction") === "vertical") {
    const index = this.getAttribute("index");
    if (index === "0") {
      e.dataTransfer.setDragImage(ship1Img, 0, 0);
    } else if (index === "1") {
      e.dataTransfer.setDragImage(ship2Img, 0, 0);
    } else {
      e.dataTransfer.setDragImage(ship3Img, 0, 0);
    }
  } else {
    e.dataTransfer.setDragImage(this, 0, 0);
  }
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
  const direction = this.getAttribute("direction");
  if (direction === "horizontal") {
    this.style.transform = "rotate(90deg)";
    this.setAttribute("direction", "vertical");
  } else {
    this.style.transform = "rotate(0deg)";
    this.setAttribute("direction", "horizontal");
  }
}

export { dragAndDrop };
