import React, { useEffect, useRef } from "react";
import { CANVAS_HEIGHT, CANVAS_WIDTH } from "../../utils/constants";
import styles from "./Canvas.module.css";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import DrawController from "./DrawController";

const Canvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { primary, secondary } = useTypedSelector((state) => state.color);
  const { lineWidth } = useTypedSelector((state) => state.lineWidth);
  const { tool } = useTypedSelector((state) => state.tool);

  useEffect(() => {
    const canvas = canvasRef.current as HTMLCanvasElement;
    const canvasController = new DrawController(
      canvas,
      tool,
      primary,
      secondary,
      lineWidth
    );
    canvasController.draw();
  });

  return (
    <div className={styles.wrapper}>
      <canvas
        ref={canvasRef}
        className={styles.canvas}
        width={CANVAS_WIDTH}
        height={CANVAS_HEIGHT}
      ></canvas>
    </div>
  );
};

export default Canvas;
