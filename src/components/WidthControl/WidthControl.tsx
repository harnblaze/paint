import React from "react";
import styles from "./WidthControl.module.css";
import {
  MAX_BRUSH_WIDTH,
  MIN_BRUSH_WIDTH,
  STEP_BRUSH_WIDTH,
} from "../../utils/constants";

const WidthControl = () => {
  return (
    <div className={styles.widthControl}>
      <div className={styles.title}>
        <h4>Толщина линии</h4>
        <label htmlFor="lineWidth"> 5px</label>
      </div>
      <input
        type="range"
        name="lineWidth"
        id="lineWidth"
        min={MIN_BRUSH_WIDTH}
        max={MAX_BRUSH_WIDTH}
        step={STEP_BRUSH_WIDTH}
      />
    </div>
  );
};

export default WidthControl;
