import React from "react";
import styles from "./CurrentColors.module.css";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useDispatch } from "react-redux";
import {
  setPrimaryColor,
  setSecondaryColor,
} from "../../store/actionCreators/colorActionCreators";

const CurrentColors = () => {
  const { primary, secondary } = useTypedSelector((state) => state.color);
  const dispatch = useDispatch();

  const changePrimary = (e: React.ChangeEvent<HTMLInputElement>) => {
    const color = e.target.value;
    dispatch(setPrimaryColor(color));
  };

  const changeSecondary = (e: React.ChangeEvent<HTMLInputElement>) => {
    const color = e.target.value;
    dispatch(setSecondaryColor(color));
  };

  return (
    <div className={styles.currentColor}>
      <div className={styles.typeColor}>
        <h4>Основной цвет</h4>
        <div className={styles.colors}>
          <label className={styles.label} style={{ backgroundColor: primary }}>
            <input
                className={styles.input}
                type="color"
                value={primary}
                onChange={changePrimary}
            />
          </label>
        </div>
      </div>
      <div className={styles.typeColor}>
      <h4>Второй цвет</h4>
        <div className={styles.colors}>
          <label className={styles.label} style={{ backgroundColor: secondary }}>
            <input
                className={styles.input}
                type="color"
                value={secondary}
                onChange={changeSecondary}
            />
          </label>
        </div>
      </div>
    </div>
  );
};

export default CurrentColors;
