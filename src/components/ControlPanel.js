import Colors from "./Colors.js";
import Tools from "./Tools.js";
import { createElement } from "../common/utils.js";
import ClearButton from "./ClearButton";

export default class ControlPanel {
  #panel;
  #colors;
  #range;
  #clearButton;
  constructor(
    colorIndex,
    changeColor,
    brushSize,
    changeBrushSize,
    clearCanvas
  ) {
    this.#panel = createElement("div", "control-panel");
    this.#colors = new Colors(this.#panel, colorIndex, changeColor);
    this.#range = new Tools(this.#panel, brushSize, changeBrushSize);
    this.#clearButton = new ClearButton(this.#panel, clearCanvas);
    document.body.append(this.#panel);
  }
}
