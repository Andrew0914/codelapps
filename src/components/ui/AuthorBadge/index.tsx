import { Author } from "@/models/Post";
import classNames from "classnames";
import Image from "next/image";
import styles from "./styles.module.scss";

export interface AuthorBadgeProps extends Author {
  className?: string;
}

export default function AuthorBadge({
  avatarUrl,
  name,
  className,
}: AuthorBadgeProps) {
  const classes = classNames(styles.author, "round--xl", "pr--1", className);
  return (
    <span className={classes}>
      <Image
        className="circle"
        src={avatarUrl}
        alt={name}
        width={22}
        height={22}
      />
      <span className="text--xsmall text--highlight">{name}</span>
    </span>
  );
}
