import ControlPanel from "./ControlPanel.js";
import Canvas from "./Canvas.js";

import {INITIAL_BRUSH_WIDTH, INITIAL_INDEX_COLOR,} from "../common/constants.js";
import Tools from "./Tools";
import {createElement} from "../common/utils";

export default class App {
  #canvas;
  #colorIndex;
  #brushSize;
  #controlPanel;
  #tools;
  #tool;
  #wrapper;
  constructor(parentNode) {
    this.#colorIndex = INITIAL_INDEX_COLOR;
    this.#brushSize = INITIAL_BRUSH_WIDTH;
    this.#controlPanel = new ControlPanel(
        parentNode,
      this.#changeColor,
      this.#changeBrushWidth,
      this.#clearCanvas,
      this.#saveImageCanvas
    );
    this.#wrapper = createElement('div', 'canvas-wrapper')
    this.#tools = new Tools(this.#wrapper, this.#changeTool);
    this.#canvas = new Canvas(this.#wrapper);
    parentNode.append(this.#wrapper);
    this.#tool = "brush";
    this.#draw();
  }

  #changeColor = (index) => {
    this.#colorIndex = index;
    this.#draw();
  };

  #changeBrushWidth = (size) => {
    this.#brushSize = size;
    this.#draw();
  };

  #drawLine = () => {
    this.#canvas.drawLine(this.#colorIndex, this.#brushSize);
  };

  #drawRect = () => {
    this.#canvas.drawRect(this.#colorIndex, this.#brushSize);
  };

  #drawEllipse = () => {
    this.#canvas.drawEllipse(this.#colorIndex, this.#brushSize);
  };

  #draw = () => {
    if (this.#tool === "brush") {
      this.#drawLine();
    } else if (this.#tool === "rect") {
      this.#drawRect();
    } else if (this.#tool === "ellipse") {
      this.#drawEllipse();
    }
  };

  #changeTool = (toolName) => {
    this.#tool = toolName;
    this.#draw();
  };

  #clearCanvas = () => {
    this.#canvas.clearCanvas();
  };

  #saveImageCanvas = () => {
    this.#canvas.saveImage();
  };
}
