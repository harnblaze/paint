import React from "react";
import styles from "./CurrentColors.module.css";
import Button from "../../UI/Button/Button";
import { useTypedSelector } from "../../hooks/useTypedSelector";

const CurrentColors = () => {
  const { primary, secondary } = useTypedSelector((state) => state.color);
  return (
    <div className={styles.currentColor}>
      <h4>Текущий цвет</h4>
      <div className={styles.colors}>
        <Button variant="noClickable" bgColor={primary} />
        <Button variant="noClickable" bgColor={secondary} />
      </div>
    </div>
  );
};

export default CurrentColors;
