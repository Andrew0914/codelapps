"use client";
import SectionTitle from "../SectionTitle";
import PostsViewSelector from "../PostsViewSelector";
import PostItem, { PostItemProps } from "../PostItem";
import styles from "./styles.module.scss";
import { useState } from "react";
import classNames from "classnames";

export interface PostsListProps {
  posts: PostItemProps[];
}

type modes = "grid" | "rows";

export default function PostsList({ posts }: PostsListProps) {
  const [mode, setMode] = useState<modes>("rows");
  const onViewModeChangeHandler = (mode: modes) => {
    setMode(mode);
  };

  const postsListClasses = classNames("pt--4", styles.postsList, styles[mode]);

  return (
    <>
      <div className="flex--sb-center w--full">
        <SectionTitle>Featured Posts</SectionTitle>
        <PostsViewSelector
          className={styles.viewSelector}
          onPostsViewMode={onViewModeChangeHandler}
        />
      </div>
      <section className={postsListClasses}>
        {posts.map((post, index) => (
          <PostItem key={post.title + index} {...post} mode={mode as modes} />
        ))}
      </section>
    </>
  );
}
