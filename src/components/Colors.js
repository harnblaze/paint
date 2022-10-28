import { createElement } from "../common/utils.js";
import { COLORS } from "../common/constants.js";

export default class Colors {
  #colorIndex;
  #panel;
  #changeColor;
  #colors;
  #colorButtons;
  #currentColor;
  constructor(parentNode, initialIndex, changeColor) {
    this.#colors = COLORS;
    this.#colorIndex = initialIndex;
    this.#panel = createElement("div", "color-panel");
    this.#changeColor = changeColor;
    this.#currentColor = this.#createCurrentColor();
    this.#colorButtons = this.#createColorButtons();
    parentNode.append(this.#panel);
  }
  #buttonClickHandler = (i) => {
    this.#panel.innerHTML = "";
    this.#changeColor(i);
    this.#colorIndex = i;
    this.#currentColor = this.#createCurrentColor();
    this.#colorButtons = this.#createColorButtons();
  };

  #createColorButtons = () => {
    const colorButtons = this.#colors.map((color, i) => {
      const button = createElement("button", "color-button");
      button.style.backgroundColor = color;
      button.onclick = () => this.#buttonClickHandler(i);
      return button;
    });
    this.#panel.append(...colorButtons);
    return colorButtons;
  };

  #createCurrentColor = () => {
    const currentColor = createElement("div", "current-color");
    const title = createElement("div", "current-color__title", "Текущий цвет");
    const color = createElement("div", "current-color__color");
    color.style.backgroundColor = this.#colors[this.#colorIndex];
    currentColor.append(title, color);
    this.#panel.append(currentColor);
    return currentColor;
  };
}
