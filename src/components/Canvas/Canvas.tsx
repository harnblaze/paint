import React, { useEffect, useRef } from "react";
import { CANVAS_HEIGHT, CANVAS_WIDTH } from "../../utils/constants";
import styles from "./Canvas.module.css";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import DrawController from "./DrawController";
import { useDispatch } from "react-redux";
import { changeController } from "../../store/actionCreators/drawControllerActionCreators";
import {
  clearRedo,
  popToRedo,
  popToUndo,
  pushToRedo,
  pushToUndo,
} from "../../store/actionCreators/undoRedoActionCreators";

const Canvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { primary, secondary } = useTypedSelector((state) => state.color);
  const { lineWidth } = useTypedSelector((state) => state.lineWidth);
  const { tool } = useTypedSelector((state) => state.tool);
  const { undoList, redoList } = useTypedSelector((state) => state.undoRedo);
  const dispatch = useDispatch();

  const pushToUndoList = (data: string) => {
    dispatch(pushToUndo(data));
  };
  const popToUndoList = () => {
    dispatch(popToUndo());
  };
  const pushToRedoList = (data: string) => {
    dispatch(pushToRedo(data));
  };
  const popToRedoList = () => {
    dispatch(popToRedo());
  };
  const clearRedoList = () => {
    dispatch(clearRedo());
  };

  useEffect(() => {
    const canvas = canvasRef.current as HTMLCanvasElement;
    const canvasController = new DrawController(
      canvas,
      tool,
      primary,
      secondary,
      lineWidth,
      pushToUndoList,
      popToUndoList,
      undoList,
      pushToRedoList,
      popToRedoList,
      redoList,
      clearRedoList
    );
    dispatch(changeController(canvasController));
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
