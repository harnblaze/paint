import ControlPanel from "./ControlPanel.js";
import Canvas from "./Canvas.js";

import {
  COLORS,
  INITIAL_BRUSH_WIDTH,
  INITIAL_INDEX_COLOR,
} from "./constants.js";

export default class App {
  #canvas;
  #colorIndex;
  #brushSize;
  #controlPanel;
  constructor() {
    this.#colorIndex = INITIAL_INDEX_COLOR;
    this.#brushSize = INITIAL_BRUSH_WIDTH;
    this.#controlPanel = new ControlPanel(
      this.#colorIndex,
      this.#changeColor,
      this.#brushSize,
      this.#changeBrushSize
    );
    this.#canvas = new Canvas();
    this.#canvas.drawLine(this.#colorIndex, this.#brushSize);
  }

  #changeColor = (index) => {
    this.#colorIndex = index;
    this.#drawLine();
  };

  #changeBrushSize = (size) => {
    this.#brushSize = size;
    this.#drawLine();
  };
  #drawLine = () => {
    this.#canvas.drawLine(COLORS[this.#colorIndex], this.#brushSize);
  };
}
