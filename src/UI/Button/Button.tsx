import React, { FC } from "react";
import styles from "./Button.module.css";

interface IButtonProps {
  children?: any;
  variant?: string;
  bgColor?: string;
}

const Button: FC<IButtonProps> = ({
  children,
  variant = "clickable",
  bgColor,
}) => {
  return (
    <button
      className={[styles.button, styles[variant]].join(" ")}
      style={{ backgroundColor: bgColor }}
    >
      {children}
    </button>
  );
};

export default Button;
