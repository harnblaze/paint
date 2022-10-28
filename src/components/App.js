import ControlPanel from "./ControlPanel.js";
import Canvas from "./Canvas.js";

import {
  INITIAL_BRUSH_WIDTH,
  INITIAL_INDEX_COLOR,
} from "../common/constants.js";

export default class App {
  #canvas;
  #colorIndex;
  #brushSize;
  #controlPanel;
  constructor() {
    this.#colorIndex = INITIAL_INDEX_COLOR;
    this.#brushSize = INITIAL_BRUSH_WIDTH;
    this.#controlPanel = new ControlPanel(
      this.#changeColor,
      this.#changeBrushWidth,
      this.#clearCanvas,
      this.#saveImageCanvas
    );
    this.#canvas = new Canvas();
    this.#drawLine();
  }

  #changeColor = (index) => {
    this.#colorIndex = index;
    this.#drawLine();
  };

  #changeBrushWidth = (size) => {
    this.#brushSize = size;
    this.#drawLine();
  };

  #drawLine = () => {
    this.#canvas.drawLine(this.#colorIndex, this.#brushSize);
  };

  #clearCanvas = () => {
    this.#canvas.clearCanvas();
  };

  #saveImageCanvas = () => {
    this.#canvas.saveImage();
  };
}
