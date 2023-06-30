import { Tag as TagModel } from "@/models/Post";
import Link from "next/link";
import { PropsWithChildren } from "react";
import styles from "./styles.module.scss";
export interface TagProps extends PropsWithChildren, TagModel {
  children: string;
}

// TODO: Implement tagging functionallity
export default function Tag(props: TagProps) {
  const formedURL = `blog?tag=${encodeURIComponent(props.url)}`;
  return (
    <Link
      className={`${styles.tag} text--h|ighlight text--small round`}
      href={formedURL}
    >
      {props.children}
    </Link>
  );
}
