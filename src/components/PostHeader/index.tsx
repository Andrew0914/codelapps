import { Post } from "@/models/Post";
import { parseToHumanDate } from "@/utils/Date";
import Image from "next/image";
import AuthorBadge from "../ui/AuthorBadge";
import TagsBox from "../ui/TagsBox";

interface PostHeaderProps {
  meta: Post;
}
// TODO: Create story
export default function PostHeader({ meta }: PostHeaderProps) {
  const tags = meta?.tags && <TagsBox tags={meta!.tags} className="my--1" />;

  return (
    <header className="py--4 text--center flex--center-column">
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
    </header>
  );
}
