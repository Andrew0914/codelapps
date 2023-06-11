import dynamic from "next/dynamic";
import components from "@/utils/PostsUIArranger";
import Image from "next/image";
import TagsBox from "@/app/components/ui/TagsBox";
import Link from "next/link";
import { Post, PostParams } from "@/app/models/Post";
import { parseToHumanDate } from "@/utils/Date";
import { Component as MDXPost } from "mdx/types";
import AuthorBadge from "@/app/components/ui/AuthorBadge";
import RecommendationBadge from "@/app/components/ui/RecommendationBadge";

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
    meta?.recommendations.map((recommendation, index) => {
      return (
        <RecommendationBadge
          key={recommendation.slug}
          {...recommendation}
          index={index + 1}
        />
      );
    });

  return (
    <section className="content">
      <div className="py--4 text--center flex--center-column">
        <h1 className="header--0 py--1">{meta.title}</h1>
        <h5 className="header--5 text--muted py--1">{meta.subtitle}</h5>
        {tags}
        <div className="my--1 flex--sb-center">
          <AuthorBadge {...meta.author} className="mr--2" />
          <time className="text--muted text--small">
            {parseToHumanDate(meta.date)}
          </time>
        </div>
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
        <div className="mb--3 grid--auto">{recommendations}</div>
      </div>
    </section>
  );
}
