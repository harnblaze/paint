import React from "react";
import Tools from "../Tools/Tools";
import styles from "./ControlPanel.module.css";
import CurrentColors from "../CurrentColors/CurrentColors";
import ColorButtons from "../ColorButtons/ColorButtons";
import WidthControl from "../WidthControl/WidthControl";
import Buttons from "../Buttons/Buttons";

const ControlPanel = () => {
  return (
    <div className={styles.controlPanel}>
      <Tools />
      <CurrentColors />
      <ColorButtons />
      <WidthControl />
      <Buttons />
    </div>
  );
};

export default ControlPanel;
