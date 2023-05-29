import Image from "next/image";
import styles from "./styles.module.scss";

export interface PostItemProps {
  date: string;
  title: string;
  excerpt: string;
  author: string;
  avatar: string;
  thumbnail: string;
}

export default function PostItem(props: PostItemProps) {


  return (
    <article
      className={`${styles.postItem} px--2 py--1 round shadow--xy flex--sb-center`}
    >
      <div className={`${styles.postItem_content}`}>
        <time className="text--content text--small">{props.date}</time>
        <h2 className={`text--content header--5 ${styles.postItem__title}`}>
          {props.title}
        </h2>
        <p className={`${styles.postItem_excerpt} text--content`}>
          {props.excerpt}
        </p>
        <div className={styles.postItem_footer}>
          <Image
            src={props.avatar}
            alt="Post image"
            width={20}
            height={20}
            className="circle"
          />
          <span className="text--xsmall-bold text--muted">{props.author}</span>
        </div>
      </div>

      <Image
        src={props.thumbnail}
        alt="Post image"
        width={110}
        height={90}
        className="round--sm"
      />
    </article>
  );
}
