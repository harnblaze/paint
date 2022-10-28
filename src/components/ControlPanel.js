import Colors from "./Colors.js";
import Tools from "./Tools.js";
import { createElement } from "../common/utils.js";
import ClearButton from "./ClearButton";
import CurrentColor from "./CurrentColor";

export default class ControlPanel {
  #panel;
  #colors;
  #range;
  #clearButton;
  #currentColor;
  #changeColor;
  constructor(changeColor, changeBrushWidth, clearCanvas) {
    this.#changeColor = changeColor;
    this.#panel = createElement("div", "control-panel");
    this.#currentColor = new CurrentColor(this.#panel);
    this.#colors = new Colors(this.#panel, this.#changeCurrentColor);
    this.#range = new Tools(this.#panel, changeBrushWidth);
    this.#clearButton = new ClearButton(this.#panel, clearCanvas);
    document.body.append(this.#panel);
  }
  #changeCurrentColor = (index) => {
    this.#changeColor(index);
    this.#currentColor.changeColor(index);
  };
}
