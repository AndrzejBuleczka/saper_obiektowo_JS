export class UI {
  UISelectors = {
    board: ['[data-board]'],
  }

  getElement(selector) {
    return document.querySelector(selector);
  }

  getElements(selector) {
    return document.querySelectorAll(selector);
  }
}