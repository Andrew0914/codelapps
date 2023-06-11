import dynamic from "next/dynamic";
import components from "@/utils/PostsUIArranger";
import Image from "next/image";
import TagsBox from "@/app/components/ui/TagsBox";
import Link from "next/link";
import { Post, PostParams } from "@/app/models/Post";
import { parseToHumanDate } from "@/utils/Date";
import { Component as MDXPost } from "mdx/types";

export default async function PostPage({ params }: PostParams) {
  const Post = dynamic(
    () => import(`@/app/posts/${params.slug}.mdx`)
  ) as MDXPost<any>;

  const { meta } = (await import(`@/app/posts/${params.slug}.mdx`)) as {
    meta: Post;
  };

  const tags = meta?.tags && <TagsBox tags={meta!.tags} className="my--1" />;

  const recommendations =
    meta?.recommendations &&
    meta?.recommendations.map((recommendation) => {
      return (
        <Link
          key={recommendation}
          href={recommendation}
          className="p--1 shadow--y border--highlight round--sm"
        >
          {recommendation}
        </Link>
      );
    });

  return (
    <section className="content">
      <div className="py--4 text--center flex--center-column">
        <h1 className="header--0 py--1">{meta.title}</h1>
        <h5 className="header--5 text--muted py--1">{meta.subtitle}</h5>
        {tags}
        <span className="my--1">
          {/* TODO: Create component for author */}
          <span className="text--small">🤖 {meta.author.name}</span>|
          <time className="text--muted text--small">
            {parseToHumanDate(meta.date)}
          </time>
        </span>
        <Image
          alt="post thumbnail"
          src={meta.thumbnail}
          width={400}
          height={260}
          className="my--2 round"
        />
      </div>

      <Post components={components} />

      <div className="my--3">
        <h5 className="header--5">Recommended posts:</h5>
        <hr className="my--3" />
        {/* TODO: Improve this UI, maybe recommendations could be post items*/}
        {recommendations}
      </div>
    </section>
  );
}
