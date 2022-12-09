import React from "react";
import styles from "./ColorButtons.module.css";
import { COLORS } from "../../utils/constants";
import Button from "../../UI/Button/Button";
import { useDispatch } from "react-redux";
import {
  setPrimaryColor,
  setSecondaryColor,
} from "../../store/actionCreators/colorActionCreators";

const ColorButtons = () => {
  const dispatch = useDispatch();

  const handleClickColor = (color: string): void => {
    dispatch(setPrimaryColor(color));
  };

  const handleContextMenu = (color: string): void => {
    dispatch(setSecondaryColor(color));
  };

  return (
    <div className={styles.buttons}>
      {COLORS.map((color) => (
        <Button
          bgColor={color}
          onClick={() => handleClickColor(color)}
          onContextMenu={() => handleContextMenu(color)}
          key={color}
        ></Button>
      ))}
    </div>
  );
};

export default ColorButtons;
