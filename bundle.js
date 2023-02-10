/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/2-player.js":
/*!*************************!*\
  !*** ./src/2-player.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "playTwoPlayer": () => (/* binding */ playTwoPlayer),
/* harmony export */   "resetGame": () => (/* binding */ resetGame)
/* harmony export */ });
/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM */ "./src/DOM.js");
/* harmony import */ var _drag_and_drop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./drag-and-drop */ "./src/drag-and-drop.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player */ "./src/player.js");
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ship */ "./src/ship.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }




var currentTurn = 1;
function playTwoPlayer() {
  var playBtn = document.querySelector(".play-game");
  playBtn.classList.add("hide");
  var playTwoPlayerBtn = document.querySelector(".play-2-player");
  playTwoPlayerBtn.classList.add("hide");
  var instructionDiv = document.querySelector(".instruction");
  instructionDiv.textContent = "Player 1 - place your ships";
  var player1 = (0,_player__WEBPACK_IMPORTED_MODULE_2__.playerFactory)("player1");
  var player2 = (0,_player__WEBPACK_IMPORTED_MODULE_2__.playerFactory)("player2");
  (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.createPlayerGrid)();
  (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.createComputerGrid)();
  (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.showBoards)();
  (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.showShips)();
  (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.showBoardOne)();
  var player1Ships = (0,_ship__WEBPACK_IMPORTED_MODULE_3__.createShips)();
  var player2Ships = (0,_ship__WEBPACK_IMPORTED_MODULE_3__.createShips)();
  (0,_drag_and_drop__WEBPACK_IMPORTED_MODULE_1__.dragAndDrop)(player1.myGameboard, player1Ships);
  var confirmShipsBtn = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.createBtn)();
  confirmShipsBtn.addEventListener("click", function () {
    confirmShipsBtn.classList.add("hide");
    passDevice();
  });
  var passDeviceBtn = document.querySelector(".pass-device");
  passDeviceBtn.addEventListener("click", function () {
    passDeviceBtn.classList.add("hide");
    instructionDiv.textContent = "Player 2 - place your ships";
    (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.showBoards)();
    (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.showBoardTwo)();
    (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.makeShipsHorizontal)();
    (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.showShips)();
    (0,_drag_and_drop__WEBPACK_IMPORTED_MODULE_1__.dragAndDrop)(player2.myGameboard, player2Ships, 2);
    var confirmShipsBtn = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.createBtn)();
    confirmShipsBtn.addEventListener("click", function () {
      confirmShipsBtn.classList.add("hide");
      (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.hideShips)();
      passDevice();
    });
    passDeviceBtn.addEventListener("click", function () {
      nextTurn(player1, player2);
    });
    var squares = document.querySelectorAll(".square");
    var _iterator = _createForOfIteratorHelper(squares),
      _step;
    try {
      var _loop = function _loop() {
        var square = _step.value;
        square.addEventListener("click", function () {
          if (currentTurn === 1) {
            (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.makeGuessWhenClicked)(square, player2);
            player2.myGameboard.receiveAttack(square.getAttribute("position"));
            currentTurn = 2;
            setTimeout(passDevice, 1000);
            if (player2.myGameboard.allShipsSunk()) {
              var output = document.querySelector(".output");
              output.textContent = "Player 1 Wins!";
              __webpack_require__.g.gameOver = true;
              var playAgainBtn = document.querySelector(".play-again-2-player");
              playAgainBtn.classList.remove("hide");
            }
          } else {
            (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.makeGuessWhenClicked)(square, player1);
            player1.myGameboard.receiveAttack(square.getAttribute("position"));
            setTimeout(passDevice, 1000);
            currentTurn = 1;
            if (player1.myGameboard.allShipsSunk()) {
              var _output = document.querySelector(".output");
              _output.textContent = "Player 2 Wins!";
              __webpack_require__.g.gameOver = true;
              var _playAgainBtn = document.querySelector(".play-again-2-player");
              _playAgainBtn.classList.remove("hide");
            }
          }
        }, {
          once: true
        });
      };
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        _loop();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }, {
    once: true
  });
}
function passDevice() {
  var passDeviceBtn = document.querySelector(".pass-device");
  passDeviceBtn.classList.remove("hide");
  (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.hideBoards)();
  var instructionDiv = document.querySelector(".instruction");
  instructionDiv.textContent = "";
  if (__webpack_require__.g.gameOver) {
    passDeviceBtn.classList.add("hide");
  }
}
function nextTurn(player1, player2) {
  var passDeviceBtn = document.querySelector(".pass-device");
  passDeviceBtn.classList.add("hide");
  var instructionDiv = document.querySelector(".instruction");
  if (!__webpack_require__.g.gameOver) {
    if (currentTurn === 1) {
      var output = document.querySelector(".output");
      output.textContent = "";
      instructionDiv.textContent = "Player 1 - Make your guess";
      (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.showBoards)();
      (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.showBoardTwo)();
    } else {
      var _output2 = document.querySelector(".output");
      _output2.textContent = "";
      instructionDiv.textContent = "Player 2 - Make your guess";
      (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.showBoards)();
      (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.showBoardOne)();
    }
  }
}
function resetGame() {
  document.querySelector(".player-board").innerText = "";
  document.querySelector(".computer-board").innerText = "";
  __webpack_require__.g.gameOver = false;
  var playAgainBtn = document.querySelector(".play-again-2-player");
  playAgainBtn.classList.add("hide");
  playTwoPlayer();
}


/***/ }),

/***/ "./src/DOM.js":
/*!********************!*\
  !*** ./src/DOM.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clearDivs": () => (/* binding */ clearDivs),
/* harmony export */   "computerWon": () => (/* binding */ computerWon),
/* harmony export */   "convertPosition": () => (/* binding */ convertPosition),
/* harmony export */   "createBtn": () => (/* binding */ createBtn),
/* harmony export */   "createComputerGrid": () => (/* binding */ createComputerGrid),
/* harmony export */   "createPlayerGrid": () => (/* binding */ createPlayerGrid),
/* harmony export */   "hideBoards": () => (/* binding */ hideBoards),
/* harmony export */   "hideShips": () => (/* binding */ hideShips),
/* harmony export */   "makeComputerGuess": () => (/* binding */ makeComputerGuess),
/* harmony export */   "makeGuessWhenClicked": () => (/* binding */ makeGuessWhenClicked),
/* harmony export */   "makeShipsHorizontal": () => (/* binding */ makeShipsHorizontal),
/* harmony export */   "playerWon": () => (/* binding */ playerWon),
/* harmony export */   "renderComputerBoard": () => (/* binding */ renderComputerBoard),
/* harmony export */   "renderPlayer2Board": () => (/* binding */ renderPlayer2Board),
/* harmony export */   "renderPlayerBoard": () => (/* binding */ renderPlayerBoard),
/* harmony export */   "resetBoards": () => (/* binding */ resetBoards),
/* harmony export */   "showBoardOne": () => (/* binding */ showBoardOne),
/* harmony export */   "showBoardTwo": () => (/* binding */ showBoardTwo),
/* harmony export */   "showBoards": () => (/* binding */ showBoards),
/* harmony export */   "showShips": () => (/* binding */ showShips)
/* harmony export */ });
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function createPlayerGrid() {
  var squares = [];
  var board = document.querySelector(".player-board");
  for (var col = 0; col < 10; col++) {
    for (var row = 0; row < 10; row++) {
      var square = document.createElement("div");
      square.classList.add("square");
      square.classList.add("player-square");
      squares[(col, row)] = square;
      board.appendChild(square);
      square.setAttribute("position", [row, col]);
    }
  }
}
function createComputerGrid() {
  var squares = [];
  var board = document.querySelector(".computer-board");
  for (var col = 0; col < 10; col++) {
    for (var row = 0; row < 10; row++) {
      var square = document.createElement("div");
      square.classList.add("square");
      square.classList.add("computer-square");
      squares[(col, row)] = square;
      board.appendChild(square);
      square.setAttribute("position", [row, col]);
    }
  }
}
function convertPosition(position) {
  position = Array.from(position);
  position.splice(1, 1);
  position[0] = parseInt(position[0]);
  position[1] = parseInt(position[1]);
  return position;
}
function renderPlayerBoard(board) {
  var squares = document.querySelectorAll(".player-square");
  var _iterator = _createForOfIteratorHelper(squares),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var square = _step.value;
      var position = square.getAttribute("position");
      if (board.hasOwnProperty(position)) {
        square.classList.add("ship");
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}
function renderComputerBoard(board) {
  var squares = document.querySelectorAll(".computer-square");
  var _iterator2 = _createForOfIteratorHelper(squares),
    _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var square = _step2.value;
      var position = square.getAttribute("position");
      if (board.hasOwnProperty(position)) {
        square.classList.add("computer-ship");
      }
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
}
function renderPlayer2Board(board) {
  var squares = document.querySelectorAll(".computer-square");
  var _iterator3 = _createForOfIteratorHelper(squares),
    _step3;
  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var square = _step3.value;
      var position = square.getAttribute("position");
      if (board.hasOwnProperty(position)) {
        square.classList.add("computer-ship");
        square.classList.add("ship");
      }
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }
}
function makeGuessWhenClicked(square, computer) {
  var output = document.querySelector(".output");
  if (square.classList.contains("computer-ship")) {
    square.classList.add("hit");
    output.textContent = "It's a hit!";
    var position = square.getAttribute("position");
    var ship = computer.myGameboard.gameboard[position];
    ship.hit();
    if (ship.isSunk()) {
      output.textContent = "You sunk the enemy ship!";
    }
  } else {
    square.classList.add("miss");
    output.textContent = "You missed.";
  }
}
function makeComputerGuess(guess, board) {
  var squares = document.querySelectorAll(".player-square");
  var output = document.querySelector(".computer-output");
  var _iterator4 = _createForOfIteratorHelper(squares),
    _step4;
  try {
    for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
      var square = _step4.value;
      var position = square.getAttribute("position");
      position = convertPosition(position);
      if (position.toString() === guess.toString()) {
        if (square.classList.contains("ship")) {
          square.classList.add("hit");
          output.textContent = "The computer hit your ship!";
          board[position].hit();
          if (board[position].isSunk()) {
            output.textContent = "The computer sunk your ship!";
            return "Sunk";
          }
          return "Hit";
        }
        square.classList.add("miss");
        output.textContent = "The computer missed.";
        return "Miss";
      }
    }
  } catch (err) {
    _iterator4.e(err);
  } finally {
    _iterator4.f();
  }
}
function clearDivs() {
  var playerOutput = document.querySelector(".output");
  var computerOutput = document.querySelector(".computer-output");
  playerOutput.textContent = "";
  computerOutput.textContent = "";
}
function playerWon() {
  var playerOutput = document.querySelector(".output");
  var computerOutput = document.querySelector(".computer-output");
  playerOutput.textContent = "PLAYER WINS!";
  computerOutput.textContent = "";
  var playAgain = document.querySelector(".play-again");
  playAgain.classList.remove("hide");
  var computerSquares = document.querySelectorAll(".computer-square");
}
function computerWon() {
  var playerOutput = document.querySelector(".output");
  var computerOutput = document.querySelector(".computer-output");
  playerOutput.textContent = "Computer WINS!";
  computerOutput.textContent = "";
  var playAgain = document.querySelector(".play-again");
  playAgain.classList.remove("hide");
  __webpack_require__.g.gameOver = true;
}
function resetBoards() {
  var playerBoard = document.querySelector(".player-board");
  var computerBoard = document.querySelector(".computer-board");
  playerBoard.innerText = "";
  computerBoard.innerText = "";
  var playerOutput = document.querySelector(".output");
  var computerOutput = document.querySelector(".computer-output");
  playerOutput.textContent = "";
  computerOutput.textContent = "";
  var ships = document.querySelectorAll(".drag-ship");
  var _iterator5 = _createForOfIteratorHelper(ships),
    _step5;
  try {
    for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
      var ship = _step5.value;
      ship.setAttribute("direction", "horizontal");
      ship.style.transform = "rotate(0deg)";
    }
  } catch (err) {
    _iterator5.e(err);
  } finally {
    _iterator5.f();
  }
}
function showShips() {
  var ships = document.querySelectorAll(".drag-ship");
  var _iterator6 = _createForOfIteratorHelper(ships),
    _step6;
  try {
    for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
      var ship = _step6.value;
      ship.classList.remove("hide");
    }
  } catch (err) {
    _iterator6.e(err);
  } finally {
    _iterator6.f();
  }
}
function showBoards() {
  var playBtn = document.querySelector(".play-game");
  playBtn.classList.add("hide");
  var boardsDiv = document.querySelector(".boards-div");
  boardsDiv.classList.remove("hide");
}
function createBtn() {
  var confirmShipsBtn = document.createElement("button");
  confirmShipsBtn.classList.add("confirm-ships");
  confirmShipsBtn.textContent = "Confirm Ship Placements";
  var buttonDiv = document.querySelector(".buttons");
  buttonDiv.appendChild(confirmShipsBtn);
  return confirmShipsBtn;
}
function showBoardOne() {
  var showBoard = document.querySelector(".player-board");
  showBoard.classList.remove("hide");
  var hideBoard = document.querySelector(".computer-board");
  hideBoard.classList.add("hide");
}
function showBoardTwo() {
  var showBoard = document.querySelector(".computer-board");
  showBoard.classList.remove("hide");
  var hideBoard = document.querySelector(".player-board");
  hideBoard.classList.add("hide");
}
function hideBoards() {
  var boardsDiv = document.querySelector(".boards-div");
  boardsDiv.classList.add("hide");
}
function hideShips() {
  var ships = document.querySelectorAll(".ship");
  var _iterator7 = _createForOfIteratorHelper(ships),
    _step7;
  try {
    for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
      var ship = _step7.value;
      ship.classList.remove("ship");
      ship.classList.add("computer-ship");
    }
  } catch (err) {
    _iterator7.e(err);
  } finally {
    _iterator7.f();
  }
}
function makeShipsHorizontal() {
  var ships = document.querySelectorAll(".drag-ship");
  var _iterator8 = _createForOfIteratorHelper(ships),
    _step8;
  try {
    for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
      var ship = _step8.value;
      ship.style.transform = "rotate(0deg)";
      ship.setAttribute("direction", "horizontal");
    }
  } catch (err) {
    _iterator8.e(err);
  } finally {
    _iterator8.f();
  }
}


/***/ }),

/***/ "./src/drag-and-drop.js":
/*!******************************!*\
  !*** ./src/drag-and-drop.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dragAndDrop": () => (/* binding */ dragAndDrop)
/* harmony export */ });
/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM */ "./src/DOM.js");
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameboard */ "./src/gameboard.js");
/* harmony import */ var _assets_images_ship_1_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/images/ship-1.png */ "./src/assets/images/ship-1.png");
/* harmony import */ var _assets_images_ship_2_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/images/ship-2.png */ "./src/assets/images/ship-2.png");
/* harmony import */ var _assets_images_ship_3_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/images/ship-3.png */ "./src/assets/images/ship-3.png");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }





var ship1Img = new Image();
ship1Img.src = _assets_images_ship_1_png__WEBPACK_IMPORTED_MODULE_2__;
var ship2Img = new Image();
ship2Img.src = _assets_images_ship_2_png__WEBPACK_IMPORTED_MODULE_3__;
var ship3Img = new Image();
ship3Img.src = _assets_images_ship_3_png__WEBPACK_IMPORTED_MODULE_4__;
function dragAndDrop(board, shipsArray, player) {
  board.numPlaced = 0;
  var ships = document.querySelectorAll(".drag-ship");
  var squares;
  if (player === 2) {
    squares = document.querySelectorAll(".computer-square");
  } else {
    squares = document.querySelectorAll(".player-square");
  }
  var _iterator = _createForOfIteratorHelper(ships),
    _step;
  try {
    var _loop = function _loop() {
      var ship = _step.value;
      ship.addEventListener("dragstart", dragStart);
      ship.addEventListener("dragend", function () {
        dragEnd(ship, shipsArray);
      });
      ship.addEventListener("click", rotate);
    };
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      _loop();
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  var _iterator2 = _createForOfIteratorHelper(squares),
    _step2;
  try {
    var _loop2 = function _loop2() {
      var square = _step2.value;
      square.addEventListener("dragover", dragOver);
      square.addEventListener("dragenter", dragEnter);
      square.addEventListener("dragleave", dragLeave);
      square.addEventListener("drop", function (e) {
        var position = square.getAttribute("position");
        position = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.convertPosition)(position);
        var shipDragged = document.querySelector(".dragging");
        var index = shipDragged.getAttribute("index");
        var length = shipsArray[index].length;
        var direction = shipDragged.getAttribute("direction");
        if ((0,_gameboard__WEBPACK_IMPORTED_MODULE_1__.isMovePossible)(position, direction, length, board.gameboard)) {
          square.classList.remove("hovered");
          board.placeShip(shipsArray[index], position, direction);
          if (player === 2) {
            (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.renderPlayer2Board)(board.gameboard);
          } else {
            (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.renderPlayerBoard)(board.gameboard);
          }
          shipDragged.classList.remove("dragging");
          shipsArray[index] = "placed";
          board.numPlaced++;
        } else {
          square.classList.remove("hovered");
          shipDragged.classList.remove("hide");
        }
      });
    };
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      _loop2();
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
}
function dragStart(e) {
  var _this = this;
  if (this.getAttribute("direction") === "vertical") {
    var index = this.getAttribute("index");
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
  setTimeout(function () {
    _this.classList.add("hide");
  }, 0);
  this.classList.add("dragging");
}
function dragEnd(ship, shipsArray) {
  var index = ship.getAttribute("index");
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
  var direction = this.getAttribute("direction");
  if (direction === "horizontal") {
    this.style.transform = "rotate(90deg)";
    this.setAttribute("direction", "vertical");
  } else {
    this.style.transform = "rotate(0deg)";
    this.setAttribute("direction", "horizontal");
  }
}


/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "gameboardFactory": () => (/* binding */ gameboardFactory),
/* harmony export */   "isMovePossible": () => (/* binding */ isMovePossible)
/* harmony export */ });
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function gameboardFactory() {
  var gameboard = {};
  var placeShip = function placeShip(ship, position, direction) {
    if (direction === "horizontal") {
      for (var i = 0; i < ship.length; i++) {
        var positionString = position.toString();
        gameboard[positionString] = ship;
        position[0] += 1;
      }
    } else if (direction === "vertical") {
      for (var _i = 0; _i < ship.length; _i++) {
        var _positionString = position.toString();
        gameboard[_positionString] = ship;
        position[1] += 1;
      }
    }
    return gameboard;
  };
  var receiveAttack = function receiveAttack(position) {
    var positionString = position.toString();
    if (gameboard.hasOwnProperty(positionString)) {
      if (gameboard[positionString] === "Miss") {
        return;
      }
      if (gameboard[positionString] === "Hit") {
        return;
      }
      var ship = gameboard[positionString];
      gameboard[positionString] = "Hit";
      return "Hit";
    }
    gameboard[positionString] = "Miss";
    return position;
  };
  var allShipsSunk = function allShipsSunk() {
    var foundUnsunkShip = false;
    for (var _i2 = 0, _Object$entries = Object.entries(gameboard); _i2 < _Object$entries.length; _i2++) {
      var _Object$entries$_i = _slicedToArray(_Object$entries[_i2], 2),
        position = _Object$entries$_i[0],
        value = _Object$entries$_i[1];
      if (value !== "Miss" && value !== "Hit") {
        foundUnsunkShip = true;
      }
    }
    return !foundUnsunkShip;
  };
  return {
    gameboard: gameboard,
    placeShip: placeShip,
    receiveAttack: receiveAttack,
    allShipsSunk: allShipsSunk
  };
}
function isMovePossible(position, direction, length, board) {
  var currentSquare = position.slice();
  for (var i = 0; i < length; i++) {
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
    if (position[0] + length > 10) {
      return false;
    }
    return true;
  }
  if (position[1] + length > 10) {
    return false;
  }
  return true;
}


/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "computerMove": () => (/* binding */ computerMove),
/* harmony export */   "createComputer": () => (/* binding */ createComputer),
/* harmony export */   "playerFactory": () => (/* binding */ playerFactory),
/* harmony export */   "resetVariables": () => (/* binding */ resetVariables)
/* harmony export */ });
/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM */ "./src/DOM.js");
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameboard */ "./src/gameboard.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }


function playerFactory(name) {
  var myGameboard = (0,_gameboard__WEBPACK_IMPORTED_MODULE_1__.gameboardFactory)();
  var turn = false;
  var makeGuess = function makeGuess(position) {
    myGameboard.receiveAttack(position);
  };
  return {
    name: name,
    turn: turn,
    myGameboard: myGameboard,
    makeGuess: makeGuess
  };
}
function createComputer() {
  var computer = playerFactory("Computer");
  computer.generateGuess = function (board) {
    var running = true;
    var guess;
    while (running) {
      var num1 = Math.floor(Math.random() * 10);
      var num2 = Math.floor(Math.random() * 10);
      guess = [num1, num2].toString();
      if (board[guess]) {
        if (board[guess] !== "Hit" && board[guess] !== "Miss") {
          running = false;
        }
      } else {
        running = false;
      }
    }
    guess = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.convertPosition)(guess);
    return guess;
  };
  computer.generateShipPosition = function () {
    var num1 = Math.floor(Math.random() * 10);
    var num2 = Math.floor(Math.random() * 10);
    var guess = [num1, num2];
    return guess;
  };
  computer.generateDirection = function () {
    if (Math.random() < 0.50) {
      return "horizontal";
    }
    return "vertical";
  };
  computer.addShips = function (ships) {
    for (var i = 0; i < ships.length; i++) {
      var _computerMove = computer.generateShipPosition();
      var computerDirection = computer.generateDirection();
      var possible = (0,_gameboard__WEBPACK_IMPORTED_MODULE_1__.isMovePossible)(_computerMove, computerDirection, ships[i].length, computer.myGameboard.gameboard);
      if (possible) {
        computer.myGameboard.placeShip(ships[i], _computerMove, computerDirection);
      } else {
        i--;
      }
    }
  };
  return computer;
}
var previousHit;
var prevPrevHit;
var visited = [];
var currentShip = [];
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
    var returnedVal = findNextPossibleHit(previousHit, prevPrevHit, currentShip);
    if (returnedVal !== null) {
      computerGuess = returnedVal;
    }
  }
  var result = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.makeComputerGuess)(computerGuess, board.gameboard);
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
    (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.computerWon)();
  }
}
function generateAdjacentSquare(previousHit) {
  var adjacentSlots = [];
  adjacentSlots.push([previousHit[0] + 1, previousHit[1]]);
  adjacentSlots.push([previousHit[0] - 1, previousHit[1]]);
  adjacentSlots.push([previousHit[0], previousHit[1] + 1]);
  adjacentSlots.push([previousHit[0], previousHit[1] - 1]);
  if (adjacentSlots === []) {
    return;
  }
  var _iterator = _createForOfIteratorHelper(visited),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var visitedSquare = _step.value;
      var _iterator2 = _createForOfIteratorHelper(adjacentSlots),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var adjacentSlot = _step2.value;
          if (visitedSquare.toString() === adjacentSlot.toString()) {
            var index = adjacentSlots.indexOf(adjacentSlot);
            adjacentSlots.splice(index, 1);
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  var randomNum = Math.floor(Math.random() * adjacentSlots.length);
  return adjacentSlots[randomNum];
}
function findNextPossibleHit(previousHit, prevPrevHit, currentShip) {
  var nextMove;
  var possibleMoves = [];
  if (previousHit[0] === prevPrevHit[0]) {
    // ship must be vertical
    var lowest = currentShip[0];
    var highest = currentShip[0];
    var _iterator3 = _createForOfIteratorHelper(currentShip),
      _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var hit = _step3.value;
        if (hit[1] < lowest[1]) {
          lowest = hit;
        }
        if (hit[1] > highest[1]) {
          highest = hit;
        }
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
    possibleMoves.push([highest[0], highest[1] + 1]);
    possibleMoves.push([lowest[0], lowest[1] - 1]);
  } else {
    // ship must be horizontal
    var _lowest = currentShip[0];
    var _highest = currentShip[0];
    var _iterator4 = _createForOfIteratorHelper(currentShip),
      _step4;
    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var _hit = _step4.value;
        if (_hit[0] < _lowest[0]) {
          _lowest = _hit;
        }
        if (_hit[0] > _highest[0]) {
          _highest = _hit;
        }
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }
    possibleMoves.push([_highest[0] + 1, _highest[1]]);
    possibleMoves.push([_lowest[0] - 1, _lowest[1]]);
  }
  var _iterator5 = _createForOfIteratorHelper(visited),
    _step5;
  try {
    for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
      var visitedSquare = _step5.value;
      var _iterator6 = _createForOfIteratorHelper(possibleMoves),
        _step6;
      try {
        for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
          var possibleMove = _step6.value;
          if (visitedSquare.toString() === possibleMove.toString()) {
            var index = possibleMoves.indexOf(possibleMove);
            possibleMoves.splice(index, 1);
          }
        }
      } catch (err) {
        _iterator6.e(err);
      } finally {
        _iterator6.f();
      }
    }
  } catch (err) {
    _iterator5.e(err);
  } finally {
    _iterator5.f();
  }
  var randomNum = Math.floor(Math.random() * possibleMoves.length);
  if (!possibleMoves[randomNum]) {
    return null;
  }
  return possibleMoves[randomNum];
}


/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createShips": () => (/* binding */ createShips),
/* harmony export */   "shipFactory": () => (/* binding */ shipFactory)
/* harmony export */ });
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function shipFactory(length, numHits, sunk) {
  var hit = function hit() {
    numHits += 1;
    return numHits;
  };
  var isSunk = function isSunk() {
    if (numHits === length) {
      sunk = true;
      return true;
    }
    return false;
  };
  return {
    length: length,
    numHits: numHits,
    sunk: sunk,
    hit: hit,
    isSunk: isSunk
  };
}
var ships = {
  carrier: 5,
  battleship: 4,
  cruiser: 3,
  submarine: 3,
  patrolBoat: 3
};
function createShips() {
  var shipsArray = [];
  for (var _i = 0, _Object$entries = Object.entries(ships); _i < _Object$entries.length; _i++) {
    var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
      ship = _Object$entries$_i[0],
      length = _Object$entries$_i[1];
    var newShip = shipFactory(length, 0, false);
    shipsArray.push(newShip);
  }
  return shipsArray;
}


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/fonts/Rubik-Italic-VariableFont_wght.ttf */ "./src/assets/fonts/Rubik-Italic-VariableFont_wght.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/fonts/BeVietnamPro-Black.ttf */ "./src/assets/fonts/BeVietnamPro-Black.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/fonts/Orbitron-VariableFont_wght.ttf */ "./src/assets/fonts/Orbitron-VariableFont_wght.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n    font-family: \"Rubik\";\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"truetype\");\n}\n\n@font-face {\n    font-family: \"Vitenam\";\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n\n@font-face {\n    font-family: \"Orbitron\";\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n}\n\n\nbody{\n    background-color: skyblue;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n*{\n    box-sizing: border-box;\n}\n\nh1{\n    margin-bottom: 40px;\n    font-size: 62px;\n    font-family: Rubik;\n    font-weight: bold;\n}\n.board{\n    border: 10px solid black;\n    background-color: white;\n    width: 400px;\n    height: 400px;\n}\n\n\n.boards-div{\n    display: flex;\n    gap: 20px;\n    margin-bottom: 60px;\n}\n\n.square{\n    border: 1px solid black;\n}\n\n.board{\n    display: grid;\n    grid-template-columns: repeat(10, 1fr) ;\n    grid-template-rows: repeat(10, 1fr)\n}\n\n.ship{\n    background-color: grey;\n}\n\n.hit{\n    background-color: red;\n}\n\n.miss{\n    background-color: green;\n}\n\n.output,\n.computer-output{\n    font-size: 32px;\n    margin-bottom: 20px;\n    height: 50px;\n}\n\n.hide{\n    display: none;\n}\n\n.play-game,\n.play-2-player,\n.pass-device,\n.play-again-2-player{\n    height: 200px;\n    font-size: 48px;\n    border-radius: 24px;\n    background-color: grey;\n    margin-bottom: 20px;\n\n}\n\n\n.play-again{\n    height: 120px;\n    font-size: 32px;\n    border-radius: 24px;\n    background-color: grey;\n}\n\n.ships{\n    margin-top: 20px;\n    display: flex;\n    gap: 20px;\n    \n}\n\n.ship-1{\n    height: 38px;\n    width: 190px;\n    background-color: grey;\n    border: 1px solid black;\n}\n\n.ship-2{\n    height: 38px;\n    width: 152px;\n    background-color: grey;\n    border: 1px solid black;\n}\n\n.ship-3{\n    height: 38px;\n    width: 114px;\n    background-color: grey;\n    border: 1px solid black;\n}\n\n.ship-4{\n    height: 38px;\n    width: 114px;\n    background-color: grey;\n    border: 1px solid black;\n}\n\n.ship-5{\n    height: 38px;\n    width: 114px;\n    background-color: grey;\n    border: 1px solid black;\n}\n\n.drag-ship{\n    cursor: pointer\n}\n\n.hovered{\n    background-color: lightgrey;\n}\n\n\n.confirm-ships{\n    background-color: rgb(19, 132, 170);\n    color: white;\n    height: 80px;\n    font-size: 24px;\n    margin-top: 48px;\n    border-radius: 24px;\n}\n\n.instruction{\n    font-size: 32px;\n}\n\n\nbutton{\n    font-family: \"Vietnam\";\n}\n\n*{\n    font-family: \"Orbitron\";\n}\n", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;IACI,oBAAoB;IACpB,+DAAgF;AACpF;;AAEA;IACI,sBAAsB;IACtB,4CAA+C;AACnD;;AAEA;IACI,uBAAuB;IACvB,4CAAuD;AAC3D;;;AAGA;IACI,yBAAyB;IACzB,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,mBAAmB;IACnB,eAAe;IACf,kBAAkB;IAClB,iBAAiB;AACrB;AACA;IACI,wBAAwB;IACxB,uBAAuB;IACvB,YAAY;IACZ,aAAa;AACjB;;;AAGA;IACI,aAAa;IACb,SAAS;IACT,mBAAmB;AACvB;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,uCAAuC;IACvC;AACJ;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;;IAEI,eAAe;IACf,mBAAmB;IACnB,YAAY;AAChB;;AAEA;IACI,aAAa;AACjB;;AAEA;;;;IAII,aAAa;IACb,eAAe;IACf,mBAAmB;IACnB,sBAAsB;IACtB,mBAAmB;;AAEvB;;;AAGA;IACI,aAAa;IACb,eAAe;IACf,mBAAmB;IACnB,sBAAsB;AAC1B;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,SAAS;;AAEb;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,sBAAsB;IACtB,uBAAuB;AAC3B;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,sBAAsB;IACtB,uBAAuB;AAC3B;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,sBAAsB;IACtB,uBAAuB;AAC3B;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,sBAAsB;IACtB,uBAAuB;AAC3B;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,sBAAsB;IACtB,uBAAuB;AAC3B;;AAEA;IACI;AACJ;;AAEA;IACI,2BAA2B;AAC/B;;;AAGA;IACI,mCAAmC;IACnC,YAAY;IACZ,YAAY;IACZ,eAAe;IACf,gBAAgB;IAChB,mBAAmB;AACvB;;AAEA;IACI,eAAe;AACnB;;;AAGA;IACI,sBAAsB;AAC1B;;AAEA;IACI,uBAAuB;AAC3B","sourcesContent":["@font-face {\n    font-family: \"Rubik\";\n    src: url('./assets/fonts/Rubik-Italic-VariableFont_wght.ttf') format(\"truetype\");\n}\n\n@font-face {\n    font-family: \"Vitenam\";\n    src: url(./assets/fonts/BeVietnamPro-Black.ttf);\n}\n\n@font-face {\n    font-family: \"Orbitron\";\n    src: url(./assets/fonts/Orbitron-VariableFont_wght.ttf);\n}\n\n\nbody{\n    background-color: skyblue;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n*{\n    box-sizing: border-box;\n}\n\nh1{\n    margin-bottom: 40px;\n    font-size: 62px;\n    font-family: Rubik;\n    font-weight: bold;\n}\n.board{\n    border: 10px solid black;\n    background-color: white;\n    width: 400px;\n    height: 400px;\n}\n\n\n.boards-div{\n    display: flex;\n    gap: 20px;\n    margin-bottom: 60px;\n}\n\n.square{\n    border: 1px solid black;\n}\n\n.board{\n    display: grid;\n    grid-template-columns: repeat(10, 1fr) ;\n    grid-template-rows: repeat(10, 1fr)\n}\n\n.ship{\n    background-color: grey;\n}\n\n.hit{\n    background-color: red;\n}\n\n.miss{\n    background-color: green;\n}\n\n.output,\n.computer-output{\n    font-size: 32px;\n    margin-bottom: 20px;\n    height: 50px;\n}\n\n.hide{\n    display: none;\n}\n\n.play-game,\n.play-2-player,\n.pass-device,\n.play-again-2-player{\n    height: 200px;\n    font-size: 48px;\n    border-radius: 24px;\n    background-color: grey;\n    margin-bottom: 20px;\n\n}\n\n\n.play-again{\n    height: 120px;\n    font-size: 32px;\n    border-radius: 24px;\n    background-color: grey;\n}\n\n.ships{\n    margin-top: 20px;\n    display: flex;\n    gap: 20px;\n    \n}\n\n.ship-1{\n    height: 38px;\n    width: 190px;\n    background-color: grey;\n    border: 1px solid black;\n}\n\n.ship-2{\n    height: 38px;\n    width: 152px;\n    background-color: grey;\n    border: 1px solid black;\n}\n\n.ship-3{\n    height: 38px;\n    width: 114px;\n    background-color: grey;\n    border: 1px solid black;\n}\n\n.ship-4{\n    height: 38px;\n    width: 114px;\n    background-color: grey;\n    border: 1px solid black;\n}\n\n.ship-5{\n    height: 38px;\n    width: 114px;\n    background-color: grey;\n    border: 1px solid black;\n}\n\n.drag-ship{\n    cursor: pointer\n}\n\n.hovered{\n    background-color: lightgrey;\n}\n\n\n.confirm-ships{\n    background-color: rgb(19, 132, 170);\n    color: white;\n    height: 80px;\n    font-size: 24px;\n    margin-top: 48px;\n    border-radius: 24px;\n}\n\n.instruction{\n    font-size: 32px;\n}\n\n\nbutton{\n    font-family: \"Vietnam\";\n}\n\n*{\n    font-family: \"Orbitron\";\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/fonts/BeVietnamPro-Black.ttf":
/*!*************************************************!*\
  !*** ./src/assets/fonts/BeVietnamPro-Black.ttf ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "BeVietnamPro-Black.ttf";

/***/ }),

/***/ "./src/assets/fonts/Orbitron-VariableFont_wght.ttf":
/*!*********************************************************!*\
  !*** ./src/assets/fonts/Orbitron-VariableFont_wght.ttf ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "Orbitron-VariableFont_wght.ttf";

/***/ }),

/***/ "./src/assets/fonts/Rubik-Italic-VariableFont_wght.ttf":
/*!*************************************************************!*\
  !*** ./src/assets/fonts/Rubik-Italic-VariableFont_wght.ttf ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "Rubik-Italic-VariableFont_wght.ttf";

/***/ }),

/***/ "./src/assets/images/ship-1.png":
/*!**************************************!*\
  !*** ./src/assets/images/ship-1.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ship-1.png";

/***/ }),

/***/ "./src/assets/images/ship-2.png":
/*!**************************************!*\
  !*** ./src/assets/images/ship-2.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ship-2.png";

/***/ }),

/***/ "./src/assets/images/ship-3.png":
/*!**************************************!*\
  !*** ./src/assets/images/ship-3.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ship-3.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ "./src/player.js");
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gameboard */ "./src/gameboard.js");
/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DOM */ "./src/DOM.js");
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ship */ "./src/ship.js");
/* harmony import */ var _drag_and_drop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./drag-and-drop */ "./src/drag-and-drop.js");
/* harmony import */ var _2_player__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./2-player */ "./src/2-player.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }







var playBtn = document.querySelector(".play-game");
playBtn.addEventListener("click", playGame);
__webpack_require__.g.gameOver = false;
function playGame() {
  var play2PlayerBtn = document.querySelector(".play-2-player");
  play2PlayerBtn.classList.add("hide");
  var player = (0,_player__WEBPACK_IMPORTED_MODULE_1__.playerFactory)("Player");
  var computer = (0,_player__WEBPACK_IMPORTED_MODULE_1__.createComputer)();
  computer.myGameboard.numPlaced = 0;
  (0,_DOM__WEBPACK_IMPORTED_MODULE_3__.createPlayerGrid)();
  (0,_DOM__WEBPACK_IMPORTED_MODULE_3__.createComputerGrid)();
  (0,_DOM__WEBPACK_IMPORTED_MODULE_3__.showShips)();
  (0,_DOM__WEBPACK_IMPORTED_MODULE_3__.showBoards)();
  var ships = (0,_ship__WEBPACK_IMPORTED_MODULE_4__.createShips)();
  (0,_drag_and_drop__WEBPACK_IMPORTED_MODULE_5__.dragAndDrop)(player.myGameboard, ships);
  var confirmShipsBtn = (0,_DOM__WEBPACK_IMPORTED_MODULE_3__.createBtn)();
  confirmShipsBtn.addEventListener("click", function () {
    if (player.myGameboard.numPlaced === 5) {
      confirmShipsBtn.classList.add("hide");
      var computerShips = (0,_ship__WEBPACK_IMPORTED_MODULE_4__.createShips)();
      computer.addShips(computerShips);
      (0,_DOM__WEBPACK_IMPORTED_MODULE_3__.renderComputerBoard)(computer.myGameboard.gameboard);
      var ComputerSquares = document.querySelectorAll(".computer-square");
      var _iterator = _createForOfIteratorHelper(ComputerSquares),
        _step;
      try {
        var _loop = function _loop() {
          var square = _step.value;
          square.addEventListener("click", function () {
            if (!__webpack_require__.g.gameOver) {
              (0,_DOM__WEBPACK_IMPORTED_MODULE_3__.clearDivs)();
              (0,_DOM__WEBPACK_IMPORTED_MODULE_3__.makeGuessWhenClicked)(square, computer);
              computer.myGameboard.receiveAttack(square.getAttribute("position"));
              if (computer.myGameboard.allShipsSunk()) {
                (0,_DOM__WEBPACK_IMPORTED_MODULE_3__.playerWon)();
                __webpack_require__.g.gameOver = true;
              } else {
                var computerGuess = computer.generateGuess(player.myGameboard.gameboard);
                setTimeout(function () {
                  (0,_player__WEBPACK_IMPORTED_MODULE_1__.computerMove)(computerGuess, player.myGameboard);
                }, 500);
              }
            }
          }, {
            once: true
          });
        };
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          _loop();
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  });
}
var playAgainBtn = document.querySelector(".play-again");
playAgainBtn.addEventListener("click", function () {
  __webpack_require__.g.gameOver = false;
  (0,_player__WEBPACK_IMPORTED_MODULE_1__.resetVariables)();
  playAgainBtn.classList.add("hide");
  (0,_DOM__WEBPACK_IMPORTED_MODULE_3__.resetBoards)();
  playGame();
});
var playTwoPlayerBtn = document.querySelector(".play-2-player");
playTwoPlayerBtn.addEventListener("click", _2_player__WEBPACK_IMPORTED_MODULE_6__.playTwoPlayer);
var playAgain2PlayerBtn = document.querySelector(".play-again-2-player");
playAgain2PlayerBtn.addEventListener("click", _2_player__WEBPACK_IMPORTED_MODULE_6__.resetGame);
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map