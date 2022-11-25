import React from "react";
import styles from "./Buttons.module.css";
import Button from "../../UI/Button/Button";

const Buttons = () => {
  return (
    <div className={styles.buttons}>
      <Button>Очистить</Button>
      <Button>Сохранить</Button>
    </div>
  );
};

export default Buttons;
