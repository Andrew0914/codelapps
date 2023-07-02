import dynamic from "next/dynamic";
import components from "@/utils/PostsUIArranger";
import { Post } from "@/models/Post";
import { Component as MDXPost } from "mdx/types";
import PostHeader from "@/components/PostHeader";
import PostFooter from "@/components/PostFooter";
import { RoutePostParams } from "@/models/RouteParams";
import { getPostsMetaDataByFileName } from "@/app/api/posts/controller";
import { notFound } from "next/navigation";

export default async function PostPage({ params }: RoutePostParams) {
  const meta = await getPostsMetaDataByFileName(`${params.slug}`);
  if (!meta) notFound();

  const PostContent = dynamic(
    () => import(`@/posts/${params.slug}.mdx`)
  ) as MDXPost<any>;

  return (
    <section className="content">
      <PostHeader meta={meta} />

      <PostContent components={components} />

      <PostFooter recommendations={meta.recommendations!} />
    </section>
  );
}
