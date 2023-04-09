import styles from "./styles.module.scss";
import { ReactElement, ReactNode } from "react";

interface IconButtonProps {
  className?: string;
  onClick?: () => void;
  children: ReactNode;
}

export default function IconButton(props: IconButtonProps) {
  return (
    <button
      className={`flex--center round--sm ${styles.iconButton} ${props.className}`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}
