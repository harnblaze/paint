import { createElement } from "../common/utils.js";
import { COLORS } from "../common/constants.js";

export default class Colors {
  #colorIndex;
  #panel;
  #changeColor;
  #colors;
  #colorButtons;
  constructor(parentNode, initialIndex, changeColor) {
    this.#colors = COLORS;
    this.#colorIndex = initialIndex;
    this.#panel = createElement("div", "color-panel", "Цвет");
    this.#changeColor = changeColor;
    this.#colorButtons = [];
    this.#render();
    parentNode.append(this.#panel);
  }
  #buttonClickHandler = (i) => {
    this.#changeColor(i);
    this.#colorIndex = i;
    this.#render();
  };

  #render = () => {
    console.log(this.#colorIndex);
    this.#panel.innerHTML = "Цвет";
    this.#colorButtons = this.#colors.map((color, i) => {
      const style = `color-button ${
        i === this.#colorIndex ? "color-button__selected" : ""
      }`;
      const button = createElement("button", style);
      button.style.backgroundColor = color;
      button.onclick = () => this.#buttonClickHandler(i);
      return button;
    });
    this.#panel.append(...this.#colorButtons);
  };
}
