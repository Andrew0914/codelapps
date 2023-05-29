import { PropsWithChildren } from "react";
import styles from "./styles.module.scss";

export interface SectionTitleProps extends PropsWithChildren {
  children: string;
}

export default function SectionTitle(props: SectionTitleProps) {
  return (
    <h5
      className={`${styles.title} flex--none-baseline text--content text--big-bold`}
    >
      {props.children}
      <hr />
    </h5>
  );
}
