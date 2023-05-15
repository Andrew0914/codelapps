import Link from "next/link";
import { PropsWithChildren } from "react";
import styles from "./styles.module.scss";
export interface TagProps extends PropsWithChildren {
  children: string;
  href: string;
}

export default function Tag(props: TagProps) {
  return (
    <Link
      className={`${styles.tag} text--highlight text--small round`}
      href={props.href}
    >
      {props.children}
    </Link>
  );
}
