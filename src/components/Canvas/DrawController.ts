class DrawController {
  private readonly canvas: HTMLCanvasElement;
  private readonly tool: string;
  private readonly primaryColor: string;
  private readonly secondaryColor: string;
  private readonly lineWidth: number;
  private mouseX: number;
  private mouseY: number;
  private readonly context: CanvasRenderingContext2D;
  private saved: string;

  constructor(
    canvas: HTMLCanvasElement,
    tool: string,
    primary: string,
    secondary: string,
    lineWidth: number
  ) {
    this.canvas = canvas;
    this.tool = tool;
    this.mouseX = 0;
    this.mouseY = 0;
    this.saved = "";
    this.primaryColor = primary;
    this.secondaryColor = secondary;
    this.lineWidth = lineWidth;
    this.context = canvas.getContext("2d") as CanvasRenderingContext2D;
  }

  private clearCanvas = () => {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  };

  private startDraw = (x: number, y: number) => {
    this.context.lineCap = "round";
    this.context.strokeStyle = this.primaryColor;
    this.context.fillStyle = this.secondaryColor;
    this.context.lineWidth = this.lineWidth;
    this.mouseX = x;
    this.mouseY = y;
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
      this.clearCanvas();
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
}
export default DrawController;
