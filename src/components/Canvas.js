import { createElement } from "../common/utils.js";
import { CANVAS_HEIGHT, CANVAS_WIDTH, COLORS } from "../common/constants.js";

export default class Canvas {
  #canvas;
  #context;
  #mouseX;
  #mouseY;
  constructor() {
    this.#canvas = this.#createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
    this.#context = this.#canvas.getContext("2d");
    this.isCLickOnCanvas = false;
    this.#mouseX = 0;
    this.#mouseY = 0;
  }

  #createCanvas = (width, height) => {
    const canvas = createElement("canvas", "canvas");
    canvas.width = width;
    canvas.height = height;
    document.body.append(canvas);
    return canvas;
  };

  drawLine = (colorIndex, brushWidth) => {
    this.#context.strokeStyle = COLORS[colorIndex];
    this.#context.lineWidth = brushWidth;
    this.#context.lineCap = "round";

    this.#canvas.onmousemove = (evt) => {
      if (evt.buttons === 1 && this.isCLickOnCanvas) {
        this.#context.lineTo(evt.offsetX, evt.offsetY);
        this.#context.stroke();
      }
    };

    this.#canvas.onmouseup = (evt) => {
      if (evt.buttons === 1) {
        this.#context.closePath();
        this.isCLickOnCanvas = false;
      }
    };

    this.#canvas.onmousedown = (evt) => {
      if (evt.buttons === 1) {
        this.#context.beginPath();
        this.isCLickOnCanvas = true;
      }
    };
  };
  clearCanvas = () => {
    this.#context.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  };
}
