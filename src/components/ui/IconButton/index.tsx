import styles from "./styles.module.scss";
import { PropsWithChildren, ReactElement, ReactNode } from "react";

interface IconButtonProps extends PropsWithChildren {
  className?: string;
  onClick?: () => void;
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
