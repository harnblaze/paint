import React from "react";
import styles from "./Buttons.module.css";
import Button from "../../UI/Button/Button";
import { MdClear, MdDownload, MdRedo, MdUndo } from "react-icons/md";
import { useTypedSelector } from "../../hooks/useTypedSelector";

const Buttons = () => {
  const { controller } = useTypedSelector((state) => state.controller);
  return (
    <div className={styles.buttons}>
      <Button onClick={() => controller?.undo()}>
        <MdUndo />
      </Button>
      <Button onClick={() => controller?.downloadImage()}>
        <MdDownload />
      </Button>
      <Button onClick={() => controller?.redo()}>
        <MdRedo />
      </Button>
      <Button onClick={() => controller?.clearCanvas()}>
        <MdClear />
      </Button>
    </div>
  );
};

export default Buttons;
