"use client";
import Image from "next/image";
import styles from "./styles.module.scss";
import { useEffect, useState } from "react";
import classNames from "classnames";
import Link from "next/link";
import { Post } from "@/models/Post";
import { parseToHumanDate } from "@/utils/Date";

export interface PostItemProps extends Post {
  mode?: "grid" | "rows";
}

export default function PostItem(props: PostItemProps) {
  const [mode, setMode] = useState<"grid" | "rows">(props.mode ?? "rows");
  const [thumbnailLoaded, setThumbnailLoaded] = useState(true);

  const handleThumbnailLoad = () => {
    setThumbnailLoaded(true);
  };

  useEffect(() => {
    setThumbnailLoaded(false);
    setMode(props.mode ?? "rows");
  }, [props.mode]);

  const thumbnailClassNames = classNames("round", styles.postItem_thumbnail, {
    [styles.postItem_thumbnail_loaded]: thumbnailLoaded,
    [styles.postItem_thumbnail_grid]: mode === "grid",
  });

  const postItemClassNames = classNames(
    styles.postItem,
    "px--2",
    "py--2",
    "round",
    "shadow--xy",
    {
      "flex--sb-center-column": mode === "grid",
      "flex--sb-center": mode === "rows",
    }
  );

  const time = (
    <time className="text--content text--small">
      {parseToHumanDate(new Date(props.date))}
    </time>
  );
  const thumbnail = (
    <Image
      src={props.thumbnail}
      alt="Post image"
      width={mode === "grid" ? 275 : 150}
      height={mode === "grid" ? 170 : 120}
      className={thumbnailClassNames}
      onLoad={handleThumbnailLoad}
    />
  );

  return (
    <Link className={postItemClassNames} href={`blog/${props.slug}`}>
      <div className={`${styles.postItem_content} w--full`}>
        {mode === "rows" && time}
        {mode === "grid" && thumbnail}
        <h3 className={`text--content header--5 ${styles.postItem__title}`}>
          {props.title}
        </h3>
        <p className={`${styles.postItem_excerpt} text--content`}>
          {props.excerpt}
        </p>
        <div className={styles.postItem_footer}>
          <Image
            src={props.author.avatarUrl}
            alt="Post image"
            width={20}
            height={20}
            className="circle"
          />
          <span className="text--xsmall-bold text--muted">
            {props.author.name}
          </span>
        </div>
        {mode === "grid" && time}
      </div>
      {mode === "rows" && thumbnail}
    </Link>
  );
}
