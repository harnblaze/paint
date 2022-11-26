import React, { useState } from "react";
import styles from "./CurrentColors.module.css";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useDispatch } from "react-redux";
import {
  setPrimaryColor,
  setSecondaryColor,
} from "../../store/actionCreators/colorActionCreators";

const CurrentColors = () => {
  const { primary, secondary } = useTypedSelector((state) => state.color);
  const [primaryValue, setPrimaryValue] = useState<string>(primary);
  const [secondaryValue, setSecondaryValue] = useState<string>(secondary);
  const dispatch = useDispatch();

  const changePrimary = (e: React.ChangeEvent<HTMLInputElement>) => {
    const color = e.target.value;
    dispatch(setPrimaryColor(color));
    setPrimaryValue(color);
  };
  const changeSecondary = (e: React.ChangeEvent<HTMLInputElement>) => {
    const color = e.target.value;
    dispatch(setSecondaryColor(color));
    setSecondaryValue(color);
  };

  return (
    <div className={styles.currentColor}>
      <h4>Текущий цвет</h4>
      <div className={styles.colors}>
        <label className={styles.label} style={{ backgroundColor: primary }}>
          <input
            className={styles.input}
            type="color"
            value={primaryValue}
            onChange={changePrimary}
          />
        </label>

        <label className={styles.label} style={{ backgroundColor: secondary }}>
          <input
            className={styles.input}
            type="color"
            value={secondaryValue}
            onChange={changeSecondary}
          />
        </label>
      </div>
    </div>
  );
};

export default CurrentColors;
