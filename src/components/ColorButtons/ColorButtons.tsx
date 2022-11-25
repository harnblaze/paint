import React from "react";
import styles from "./ColorButtons.module.css";
import { COLORS } from "../../utils/constants";
import Button from "../../UI/Button/Button";

const ColorButtons = () => {
  return (
    <div className={styles.buttons}>
      {COLORS.map((color) => (
        <Button bgColor={color}></Button>
      ))}
    </div>
  );
};

export default ColorButtons;
