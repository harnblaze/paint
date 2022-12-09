import React, { FC } from "react";
import styles from "./Button.module.css";

interface IButtonProps {
  children?: any;
  bgColor?: string;
  active?: boolean;
  onClick?: () => void;
  onContextMenu?: () => void;
}

const Button: FC<IButtonProps> = ({
  children,
  bgColor,
  active,
  onClick,
  onContextMenu,
}) => {
  const handleContextMenu = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    onContextMenu && onContextMenu();
  };
  const buttonClasses = (): string =>
    [styles.button, active ? styles.active : ""].join(" ");

  return (
    <button
      className={buttonClasses()}
      style={{ backgroundColor: bgColor }}
      onClick={() => onClick && onClick()}
      onContextMenu={(event) => handleContextMenu(event)}
    >
      {children}
    </button>
  );
};

export default Button;
