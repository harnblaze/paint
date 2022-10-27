import Colors from "./Colors.js";
import Tools from "./Tools.js";
import { createElement } from "./utils.js";

export default class ControlPanel {
  #panel;
  #colors;
  #range;
  constructor(colorIndex, changeColor, brushSize, changeBrushSize) {
    this.#panel = createElement("div", "control-panel");
    this.#colors = new Colors(this.#panel, colorIndex, changeColor);
    this.#range = new Tools(this.#panel, brushSize, changeBrushSize);
    document.body.append(this.#panel);
  }
}
