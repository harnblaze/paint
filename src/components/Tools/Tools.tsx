import React from "react";
import styles from "./Tools.module.css";
import Button from "../../UI/Button/Button";
import { FaPaintBrush, FaRegCircle } from "react-icons/fa";
import { BiRectangle } from "react-icons/bi";
import { AiOutlineLine } from "react-icons/ai";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useDispatch } from "react-redux";
import { changeTool } from "../../store/actionCreators/toolActionCreators";

const tools = [
  {
    name: "brush",
    icon: <FaPaintBrush />,
  },
  {
    name: "rect",
    icon: <BiRectangle />,
  },
  {
    name: "ellipse",
    icon: <FaRegCircle />,
  },
  {
    name: "line",
    icon: <AiOutlineLine />,
  },
];

const Tools = () => {
  const { tool } = useTypedSelector((state) => state.tool);
  const dispatch = useDispatch();

  const handleToolClick = (tool: string) => {
    dispatch(changeTool(tool));
  };

  return (
    <div className={styles.tools}>
      {tools.map((item) => (
        <Button
          key={item.name}
          active={item.name === tool}
          onClick={() => handleToolClick(item.name)}
        >
          {item.icon}
        </Button>
      ))}
    </div>
  );
};

export default Tools;
