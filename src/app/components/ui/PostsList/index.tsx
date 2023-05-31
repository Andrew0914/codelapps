"use client";
import SectionTitle from "../SectionTitle";
import PostsViewSelector from "../PostsViewSelector";
import PostItem, { PostItemProps } from "../PostItem";

export interface PostsListProps {
  posts: PostItemProps[];
}

export default function PostsList({ posts }: PostsListProps) {
  return (
    <>
      <div className="flex--sb-center w--full">
        <SectionTitle>Featured Posts</SectionTitle>
        <PostsViewSelector />
      </div>
      <ul className="pt--4">
        {posts.map((post, index) => (
          <PostItem key={post.title + index} {...post} />
        ))}
      </ul>
    </>
  );
}
