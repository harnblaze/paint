import React from "react";
import styles from "./CurrentColors.module.css";
import Button from "../../UI/Button/Button";

const CurrentColors = () => {
  return (
    <div className={styles.currentColor}>
      <h4>Текущий цвет</h4>
      <div className={styles.colors}>
        <Button variant="noClickable" bgColor={"black"} />
        <Button variant="noClickable" bgColor={"white"} />
      </div>
    </div>
  );
};

export default CurrentColors;
