import React from "react";
import styles from "./Tools.module.css";
import Button from "../../UI/Button/Button";
import { FaPaintBrush, FaRegCircle } from "react-icons/fa";
import { BiRectangle } from "react-icons/bi";
import { AiOutlineLine } from "react-icons/ai";

const tools = [
  <FaPaintBrush />,
  <BiRectangle />,
  <FaRegCircle />,
  <AiOutlineLine />,
];

const Tools = () => {
  return (
    <div className={styles.tools}>
      {tools.map((tool, id) => (
        <Button key={id}>{tool}</Button>
      ))}
    </div>
  );
};

export default Tools;
