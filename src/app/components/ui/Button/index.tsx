import classNames from "classnames";
import React, { ButtonHTMLAttributes } from "react";
import styles from "./styles.module.scss";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "accent" | "danger" | "highlight";
}

export default function Button({ variant, children, ...rest }: ButtonProps) {
  const btnClasses = classNames(
    styles.button,
    styles[variant ?? "primary"],
    "shadow--xy"
  );

  return (
    <button className={btnClasses} {...rest}>
      {children}
    </button>
  );
}
