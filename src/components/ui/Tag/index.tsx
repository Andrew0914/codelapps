"use client";
import { Tag as TagModel } from "@/models/Post";
import Link from "next/link";
import { PropsWithChildren, useContext } from "react";
import styles from "./styles.module.scss";
import LocaleContext from "@/shared/LocaleContext";
export interface TagProps extends PropsWithChildren, TagModel {
  children: string;
}

export default function Tag(props: TagProps) {
  const { lang } = useContext(LocaleContext);

  const formedURL = `/${lang}/blog?tag=${encodeURIComponent(props.url)}`;

  return (
    <Link
      className={`${styles.tag} text--highlight text--small round`}
      href={formedURL}
    >
      {props.children}
    </Link>
  );
}
