import { PropsWithChildren } from "react";
import styles from "./styles.module.scss";

export interface SectionTitleProps extends PropsWithChildren {
  children: string;
  className?: string;
}

export default function SectionTitle(props: SectionTitleProps) {
  return (
    <h2
      className={`${styles.title} flex--none-baseline text--content text--big-bold ${props.className} `}
    >
      {props.children}
      <hr />
    </h2>
  );
}
