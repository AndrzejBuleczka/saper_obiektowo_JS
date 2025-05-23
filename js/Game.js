import { Cell } from "./Cell.js";
import { UI } from "./UI.js";

class Game extends UI {
  #config = {
    easy: {
      rows: 8,
      columns: 8,
      mines: 10
    },
    medium: {
      rows: 16,
      columns: 16,
      mines: 40
    },
    expert: {
      rows: 16,
      columns: 30,
      mines: 99
    }
  };

  #numberOfRows = null;
  #numberOfCols = null;
  #numberOfMines = null;

  #cells = [];
  #cellsElements = null;

  #board = null;

  initializeGame() {
    this.#handleElements();
    this.#newGame();
  }

  #newGame(
    rows = this.#config.easy.rows,
    cols = this.#config.easy.columns,
    mines = this.#config.easy.mines
  ) {
    this.#numberOfCols = rows;
    this.#numberOfRows = cols;
    this.#numberOfMines = mines;

    this.#setStyles();

    this.#generateCells();
    this.#renderBoard();
    this.#cellsElements = this.getElements(this.UISelectors.cell);

    this.#addCellsEventListeners();
  }

  #handleElements() {
    this.#board = this.getElement(this.UISelectors.board);
  }

  #addCellsEventListeners() {
    this.#cellsElements.forEach((element) => {
      element.addEventListener("click", this.#handleCellClick);
      element.addEventListener("contextmenu", this.#handleCellContextMenu);
    });
  }

  #generateCells() {
    this.#cells.length = 0;
    for (let row = 0; row < this.#numberOfRows; row++) {
      this.#cells[row] = [];
      for (let col = 0; col < this.#numberOfCols; col++) {
        this.#cells[row].push(new Cell(col, row));
      }
    }
  }

  #renderBoard() {
    this.#cells.flat().forEach((cell) => {
      this.#board.insertAdjacentHTML("beforeend", cell.createElement());
      cell.element = cell.getElement(cell.selector);
    });
  }

  #handleCellClick = (e) => {
    const target = e.target;
    const rowIndex = parseInt(target.getAttribute("data-y"), 10);
    const colIndex = parseInt(target.getAttribute("data-x"), 10);

    const cell = this.#cells[rowIndex][colIndex].revealCell();
  };

  #handleCellContextMenu = (e) => {};

  #setStyles() {
    document.documentElement.style.setProperty(
      "--cells-in-row",
      this.#numberOfCols
    );
  }
}

window.onload = function () {
  const game = new Game();
  game.initializeGame();
};
