import React from "react";
import { CANVAS_HEIGHT, CANVAS_WIDTH } from "../../utils/constants";
import styles from "./Canvas.module.css";

const Canvas = () => {
  return (
    <div className={styles.wrapper}>
      <canvas
        className={styles.canvas}
        width={CANVAS_WIDTH}
        height={CANVAS_HEIGHT}
      ></canvas>
    </div>
  );
};

export default Canvas;
