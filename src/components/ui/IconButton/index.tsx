import { ButtonHTMLAttributes } from "react";
import styles from "./styles.module.scss";

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  onClick?: () => void;
}

export default function IconButton(props: IconButtonProps) {
  return (
    <button
      className={`flex--center round--sm ${styles.iconButton} ${props.className}`}
      onClick={props.onClick}
      aria-label={props["aria-label"]}
    >
      {props.children}
    </button>
  );
}
