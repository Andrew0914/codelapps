import classNames from "classnames";
import { PropsWithChildren } from "react";
import styles from "./styles.module.scss";

interface BitProps extends PropsWithChildren {
  variant?:
    | "muted"
    | "primary"
    | "secondary"
    | "highlight"
    | "accent"
    | "danger";
}

export default function Bit(props: BitProps) {
  const classes = classNames(
    "text--content",
    "text--xsmall",
    "round",
    styles[props.variant ?? "primary"],
    styles.bit
  );

  return <span className={classes}>{props.children}</span>;
}
