import dynamic from "next/dynamic";
import components from "@/utils/PostsUIArranger";
import { Post, PostParams } from "@/models/Post";
import { Component as MDXPost } from "mdx/types";
import PostHeader from "@/components/PostHeader";
import PostFooter from "@/components/PostFooter";

export default async function PostPage({ params }: PostParams) {
  // TODO: 404 validation if slug does not exits
  const PostContent = dynamic(
    () => import(`@/posts/${params.slug}.mdx`)
  ) as MDXPost<any>;

  const { meta } = (await import(`@/posts/${params.slug}.mdx`)) as {
    meta: Post;
  };

  return (
    <section className="content">
      <PostHeader meta={meta} />

      <PostContent components={components} />

      <PostFooter recommendations={meta.recommendations!} />
    </section>
  );
}
