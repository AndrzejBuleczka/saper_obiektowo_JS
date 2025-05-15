import Cell from "./Cell.js";
import UI from "./UI.js";

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
  #numberOfColumns = null;
  #numberOfMines = null;

  #cells = [];

  #board = null;

  initializeGame() {
    this.#newGame();
    this.#handleElements();
  }

  #newGame(
    rows = this.#config.easy.rows,
    cols = this.#config.easy.columns,
    mines = this.#config.easy.mines
  ) {
    this.#numberOfColumns = rows;
    this.#numberOfRows = cols;
    this.#numberOfMines = mines;

    this.#generateCells();
  }

  #handleElements() {
    this.#board = getElement(this.UISelectors.board);
  }

  #generateCells() {
    for (let row = 0; row < this.#numberOfRows; row++) {
      this.#cells[row] = [];
      for (let col = 0; col < this.#numberOfColumns; col++) {
        this.#cells[row].push(new Cell(row, col));
      }
    }
  }
}

#renderBoard() {
  this.#cells.flat().forEach(cell => {
    this.#board.insertAdjacentHTML('beforeend', cell.createElement());
  })
}

window.onload = function () {
  const game = new Game();
  game.initializeGame();
};
