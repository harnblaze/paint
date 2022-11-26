import React, { FC } from "react";
import styles from "./Button.module.css";

interface IButtonProps {
  children?: any;
  bgColor?: string;
  onClick?: () => void;
  onContextMenu?: () => void;
}

const Button: FC<IButtonProps> = ({
  children,
  bgColor,
  onClick,
  onContextMenu,
}) => {
  const handleContextMenu = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    onContextMenu && onContextMenu();
  };

  return (
    <button
      className={styles.button}
      style={{ backgroundColor: bgColor }}
      onClick={() => onClick && onClick()}
      onContextMenu={(event) => handleContextMenu(event)}
    >
      {children}
    </button>
  );
};

export default Button;
