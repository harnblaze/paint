import { createElement } from "./utils.js";
import { CANVAS_HEIGHT, CANVAS_WIDTH, COLORS } from "./constants.js";

export default class Canvas {
  #canvas;
  constructor() {
    this.#canvas = this.#createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  }

  #createCanvas = (width, height) => {
    const canvas = createElement("canvas", "canvas");
    canvas.width = width;
    canvas.height = height;
    document.body.append(canvas);
    return canvas;
  };
  drawLine = (colorIndex, brushWidth) => {
    const context = this.#canvas.getContext("2d");
    context.strokeStyle = COLORS[colorIndex];
    context.lineWidth = brushWidth;

    this.#canvas.onmousemove = (evt) => {
      if (evt.buttons === 1) {
        context.lineTo(evt.offsetX, evt.offsetY);
        context.stroke();
      }
    };
    this.#canvas.onmouseup = (evt) => {
      if (evt.buttons === 1) {
        context.closePath();
      }
    };
    this.#canvas.onmousedown = (evt) => {
      if (evt.buttons === 1) {
        context.beginPath();
      }
    };
  };
}
