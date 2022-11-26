import React, { useState } from "react";
import styles from "./WidthControl.module.css";
import {
  MAX_BRUSH_WIDTH,
  MIN_BRUSH_WIDTH,
  STEP_BRUSH_WIDTH,
} from "../../utils/constants";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useDispatch } from "react-redux";
import { setLineWidth } from "../../store/actionCreators/lineWidthActionCreators";

const WidthControl = () => {
  const { lineWidth } = useTypedSelector((state) => state.lineWidth);
  const dispatch = useDispatch();

  const [width, setWidth] = useState(lineWidth);

  const handleChangeWidth = (event: React.ChangeEvent<HTMLInputElement>) => {
    const width = Number(event.target.value);
    setWidth(width);
    dispatch(setLineWidth(width));
  };

  return (
    <div className={styles.widthControl}>
      <div className={styles.title}>
        <h4>Толщина линии</h4>
        <label htmlFor="lineWidth"> {lineWidth}px</label>
      </div>
      <input
        type="range"
        name="lineWidth"
        id="lineWidth"
        min={MIN_BRUSH_WIDTH}
        max={MAX_BRUSH_WIDTH}
        step={STEP_BRUSH_WIDTH}
        value={width}
        onChange={handleChangeWidth}
      />
    </div>
  );
};

export default WidthControl;
