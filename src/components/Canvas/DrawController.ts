class DrawController {
  private readonly canvas;
  private readonly tool;
  private readonly primaryColor;
  private readonly secondaryColor;
  private readonly lineWidth;
  private mouseX;
  private mouseY;
  private readonly context;
  private saved;
  private readonly pushToUndoList;
  private readonly popToUndoList;
  private readonly undoList;
  private readonly pushToRedoList;
  private readonly popToRedoList;
  private readonly redoList;
  private readonly clearRedoList;

  constructor(
    canvas: HTMLCanvasElement,
    tool: string,
    primary: string,
    secondary: string,
    lineWidth: number,
    pushToUndoList: (data: string) => void,
    popToUndoList: () => void,
    undoList: string[],
    pushToRedoList: (data: string) => void,
    popToRedoList: () => void,
    redoList: string[],
    clearRedoList: () => void
  ) {
    this.canvas = canvas;
    this.tool = tool;
    this.mouseX = 0;
    this.mouseY = 0;
    this.saved = "";
    this.primaryColor = primary;
    this.secondaryColor = secondary;
    this.lineWidth = lineWidth;
    this.pushToUndoList = pushToUndoList;
    this.popToUndoList = popToUndoList;
    this.undoList = undoList;
    this.pushToRedoList = pushToRedoList;
    this.popToRedoList = popToRedoList;
    this.redoList = redoList;
    this.clearRedoList = clearRedoList;
    this.context = canvas.getContext("2d") as CanvasRenderingContext2D;
  }

  clearCanvas = () => {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.context.fillStyle = "rgb(255,255,255)";
    this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
  };

  private startDraw = (x: number, y: number) => {
    this.context.lineCap = "round";
    this.context.strokeStyle = this.primaryColor;
    this.context.fillStyle = this.secondaryColor;
    this.context.lineWidth = this.lineWidth;
    this.mouseX = x;
    this.mouseY = y;
    this.clearRedoList();
    this.pushToUndoList(this.canvas.toDataURL());
    this.saved = this.canvas.toDataURL();
  };

  private endDraw = () => {
    this.context.closePath();

    this.canvas.onmousemove = null;
    this.canvas.onmouseup = null;
    this.canvas.onmouseleave = null;
  };

  private redrawCanvas = (afterRedrawCallback: () => void) => {
    const img = new Image();
    img.src = this.saved;
    img.onload = () => {
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.context.drawImage(img, 0, 0, this.canvas.width, this.canvas.height);
      this.context.beginPath();
      afterRedrawCallback();
    };
  };

  private drawBrush = () => {
    this.canvas.onmousedown = (evt) => {
      this.startDraw(evt.offsetX, evt.offsetY);
      this.context.beginPath();

      this.canvas.onmousemove = (evt) => {
        this.context.lineTo(evt.offsetX, evt.offsetY);
        this.context.stroke();
      };

      this.canvas.onmouseup = this.endDraw;
      this.canvas.onmouseleave = this.endDraw;
    };
  };

  private drawRect = (fill = false) => {
    this.canvas.onmousedown = (evt) => {
      this.startDraw(evt.offsetX, evt.offsetY);

      this.canvas.onmousemove = (evt) => {
        this.redrawCanvas(() => {
          const x = Math.min(evt.offsetX, this.mouseX);
          const y = Math.min(evt.offsetY, this.mouseY);
          const width = Math.abs(evt.offsetX - this.mouseX);
          const height = Math.abs(evt.offsetY - this.mouseY);
          this.context.rect(x, y, width, height);
          this.context.stroke();
          fill && this.context.fill();
        });
      };

      this.canvas.onmouseup = this.endDraw;
      this.canvas.onmouseleave = this.endDraw;
    };
  };

  private drawEllipse = (fill = false) => {
    this.canvas.onmousedown = (evt) => {
      this.startDraw(evt.offsetX, evt.offsetY);

      this.canvas.onmousemove = (evt) => {
        this.redrawCanvas(() => {
          const x = Math.min(evt.offsetX, this.mouseX);
          const y = Math.min(evt.offsetY, this.mouseY);
          const radiusX = Math.abs(evt.offsetX - this.mouseX) / 2;
          const radiusY = Math.abs(evt.offsetY - this.mouseY) / 2;
          this.context.beginPath();
          this.context.ellipse(
            x + radiusX,
            y + radiusY,
            radiusX,
            radiusY,
            Math.PI,
            0,
            2 * Math.PI,
            false
          );
          this.context.stroke();
          fill && this.context.fill();
        });
      };

      this.canvas.onmouseup = this.endDraw;
      this.canvas.onmouseleave = this.endDraw;
    };
  };

  private drawLine = () => {
    this.canvas.onmousedown = (evt) => {
      this.startDraw(evt.offsetX, evt.offsetY);

      this.canvas.onmousemove = (evt) => {
        this.redrawCanvas(() => {
          this.context.moveTo(this.mouseX, this.mouseY);
          this.context.lineTo(evt.offsetX, evt.offsetY);
          this.context.stroke();
        });
      };

      this.canvas.onmouseup = this.endDraw;
      this.canvas.onmouseleave = this.endDraw;
    };
  };
  draw() {
    switch (this.tool) {
      case "brush":
        this.drawBrush();
        break;
      case "rect":
        this.drawRect();
        break;
      case "rectFill":
        this.drawRect(true);
        break;
      case "ellipse":
        this.drawEllipse();
        break;
      case "ellipseFill":
        this.drawEllipse(true);
        break;
      case "line":
        this.drawLine();
        break;
      default:
        this.canvas.onmousedown = null;
    }
  }

  downloadImage = () => {
    const dataUrl = this.canvas.toDataURL();
    const a = document.createElement("a");
    a.href = dataUrl;
    a.download = "paintImage.jpg";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  undo = () => {
    if (this.undoList.length > 0) {
      this.pushToRedoList(this.canvas.toDataURL());
      this.saved = this.undoList.at(-1) as string;
      this.redrawCanvas(() => {
        this.popToUndoList();
      });
    }
  };

  redo = () => {
    if (this.redoList.length > 0) {
      this.pushToUndoList(this.canvas.toDataURL());
      this.saved = this.redoList.at(-1) as string;
      this.redrawCanvas(() => {
        this.popToRedoList();
      });
    }
  };
}
export default DrawController;
