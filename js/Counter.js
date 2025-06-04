import { UI } from "./UI.js";

export class Counter extends UI {
  value = null;
  #element = null;

  init() {
    this.#element = this.getElement(this.UISelectors.counter);
  }

  setValue(value) {
    this.value = value;
    this.#updateValue();
  }

  increment() {
    this.value++;
    this.#updateValue();
  }

  decrement() {
    if (this.value > 0) {
      this.value--;
      this.#updateValue();
    }
  }

  #updateValue() {
    this.#element.textContent = this.value;
  }
}