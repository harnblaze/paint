import React from "react";
import styles from "./Buttons.module.css";
import Button from "../../UI/Button/Button";
import { useTypedSelector } from "../../hooks/useTypedSelector";

const Buttons = () => {
  const { controller } = useTypedSelector((state) => state.controller);
  return (
    <div className={styles.buttons}>
      <Button onClick={() => controller?.clearCanvas()}>Очистить</Button>
      <Button onClick={() => controller?.downloadImage()}>Сохранить</Button>
    </div>
  );
};

export default Buttons;
