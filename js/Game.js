import Cell from './Cell.js';

class Game {
  #config = {
    easy: {
      rows: 8,
      columns: 8,
      mines: 10,
    },
    medium: {
      rows: 16,
      columns: 16,
      mines: 40,
    },
    expert: {
      rows: 16,
      columns: 30,
      mines: 99,
    }
  }

  #numberOfRows = null;
  #numberOfColumns = null;
  #numberOfMines = null;

  #cells = [];

  initializeGame() {
    this.#newGame();
  }

  #newGame(
    rows =this.#config.easy.rows,
    cols = this.#config.easy.columns,
    mines = this.#config.easy.mines
  ) {
    this.#numberOfColumns = rows;
    this.#numberOfRows = cols;
    this.#numberOfMines = mines;

    this.#generateCells();
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

window.onload = function () {
  const game = new Game();
  game.initializeGame();
};
