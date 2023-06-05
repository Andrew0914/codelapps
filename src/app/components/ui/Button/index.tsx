import classNames from "classnames";
import React, { ButtonHTMLAttributes } from "react";
import styles from "./styles.module.scss";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "accent" | "danger" | "highlight";
  className?: string;
}

export default function Button({ variant, children, className }: ButtonProps) {
  const btnClasses = classNames(
    className,
    styles.button,
    styles[variant ?? "primary"],
    "shadow--xy"
  );

  return <button className={btnClasses}>{children}</button>;
}
