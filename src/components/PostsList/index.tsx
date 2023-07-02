"use client";
import SectionTitle from "../ui/SectionTitle";
import PostsViewSelector from "../PostsViewSelector";
import PostItem, { PostItemProps } from "../ui/PostItem";
import styles from "./styles.module.scss";
import { useCallback, useState } from "react";
import classNames from "classnames";
import { Post } from "@/models/Post";
import { DateOrder, sortByDate } from "@/utils/Date";

export interface PostsListProps {
  posts: PostItemProps[];
  shouldShowOderFilters?: boolean;
}

type modes = "grid" | "rows";

export default function PostsList({
  posts,
  shouldShowOderFilters,
}: PostsListProps) {
  const [mode, setMode] = useState<modes>("rows");
  const [order, setOrder] = useState<DateOrder>("newest");
  const postsListClasses = classNames("pt--3", styles.postsList, styles[mode]);

  const onViewModeChangeHandler = useCallback((mode: modes) => {
    setMode(mode);
  }, []);

  const onOrderPostChange = useCallback((order: DateOrder) => {
    setOrder(order);
  }, []);

  const orderPosts = useCallback(
    (postA: Post, postB: Post) => {
      return sortByDate(new Date(postA.date), new Date(postB.date), order);
    },
    [order]
  );

  const buildPostItem = useCallback(
    (post: PostItemProps, index: number) => (
      <PostItem key={post.title + index} {...post} mode={mode as modes} />
    ),
    [mode]
  );

  return (
    <>
      <div className="flex--sb-center w--full">
        <SectionTitle>Featured Posts</SectionTitle>
        <PostsViewSelector
          className={styles.viewSelector}
          onPostsViewMode={onViewModeChangeHandler}
          onOrderChange={onOrderPostChange}
          shouldShowFilters={shouldShowOderFilters ?? false}
        />
      </div>
      <section className={postsListClasses}>
        {posts.sort(orderPosts).map(buildPostItem)}
      </section>
    </>
  );
}
