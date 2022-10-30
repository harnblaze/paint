import { createElement } from "../common/utils.js";
import {
  INITIAL_BRUSH_WIDTH,
  MAX_BRUSH_WIDTH,
  MIN_BRUSH_WIDTH,
  STEP_BRUSH_WIDTH,
} from "../common/constants.js";

export default class WidthControl {
  #brushWidth;
  #panel;
  #range;
  #label;
  #changeBrushWidth;
  #title;
  constructor(parentNode, changeBrushWidth) {
    this.#brushWidth = INITIAL_BRUSH_WIDTH;
    this.#changeBrushWidth = changeBrushWidth;
    this.#label = this.#createLabel();
    this.#title = this.#createTitle();
    this.#range = this.#createInputRange();
    this.#panel = this.#createPanel();
    parentNode.append(this.#panel);
  }

  #changeInputHandler = (value) => {
    this.#label.textContent = value + "px";
    this.#brushWidth = Number(value);
    this.#changeBrushWidth(this.#brushWidth);
  };

  #createInputRange = () => {
    const range = createElement("input", "width-range");
    range.type = "range";
    range.name = "width";
    range.id = "width";
    range.min = MIN_BRUSH_WIDTH;
    range.max = MAX_BRUSH_WIDTH;
    range.step = STEP_BRUSH_WIDTH;
    range.value = this.#brushWidth;
    range.oninput = (evt) => this.#changeInputHandler(evt.target.value);
    return range;
  };

  #createLabel = () => {
    const label = createElement("label", "width-label", this.#brushWidth + "px");
    label.name = "width";
    return label;
  };

  #createTitle = () => {
    const title = createElement("div", "width-title");
    const text = createElement("div", "width-text", "Толщина линии");
    title.append(text, this.#label);
    return title;
  };

  #createPanel = () => {
    const panel = createElement("div", "width-panel");
    panel.append(this.#title, this.#range);
    return panel;
  };
}
