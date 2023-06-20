import { PostBase } from "@/models/Post";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.scss";

export interface RecommendationProps extends PostBase {
  index: number;
}

export default function RecommendationBadge(props: RecommendationProps) {
  const classes = classNames(
    styles.recommendation,
    "shadow--xy",
    "round",
    "bg--lead",
    "pl--1"
  );

  return (
    <Link className={classes} href={props.slug}>
      <span className={`${styles.index} text--highlight`}>0{props.index}</span>
      <span className={`${styles.title} text--content`}>{props.title}</span>
      <Image
        width={75}
        height={75}
        alt={props.title}
        src={props.thumbnail}
        className="round--sm"
      />
    </Link>
  );
}
