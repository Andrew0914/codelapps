import dynamic from "next/dynamic";
import components from "@/utils/PostsUIArranger";
import Image from "next/image";
import TagsBox from "@/app/components/ui/TagsBox";
import Link from "next/link";

export default async function PostPage(params) {
  const Post = dynamic(() => import(`@/app/posts/${params.params.slug}.mdx`));
  // TODO: Type this meta data and try to exctend thir or PostItemProps.
  const { meta } = (await import(
    `@/app/posts/${params.params.slug}.mdx`
  )) as any;

  return (
    <section className="content">
      <div className="py--4 text--center flex--center-column">
        <h1 className="header--0 py--1">{meta.title}</h1>
        <h5 className="header--5 text--muted py--1">{meta.subtitle}</h5>
        <div className="w--half my--2">
          <TagsBox tags={meta.tags} />
        </div>
        <span>
          🤖 {meta.author} -{/* FIXME: parse to human readability */}
          <time className="text--muted text--small">{meta.date}</time>
        </span>
        <Image
          alt="post thumbnail"
          src={meta?.thumbnail || ""}
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
        {meta.recommendations.map((recommendation) => {
          return (
            <Link
              key={recommendation.url}
              href={recommendation.url}
              className="p--1 shadow--y border--highlight round--sm"
            >
              {recommendation.name}
            </Link>
          );
        })}
      </div>
    </section>
  );
}
