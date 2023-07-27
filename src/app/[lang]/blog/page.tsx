import { getPosts } from "@/app/api/posts/controller";
import { getAllTags } from "@/app/api/tags/controller";
import PostsList from "@/components/PostsList";
import SectionTitle from "@/components/ui/SectionTitle";
import TagsBox from "@/components/ui/TagsBox";
import { RouteBlogParams } from "@/models/RouteParams";
import { getDictionary } from "get-dictionary";

export default async function BlogPage({
  searchParams,
  params,
}: RouteBlogParams) {
  const dictionary = await getDictionary(params.lang);
  const posts = await getPosts({ tag: searchParams.tag });
  const tags = await getAllTags();

  return (
    <div className="flex--center-column">
      <header className="w--full bg--lead">
        <div className="content flex--center-column pt--5 pb--3">
          <h1 className="header--0 text--center">
            {searchParams.tag ? searchParams.tag : dictionary.blog.title}
          </h1>

          <p className="text--content text--md container--xs text--center mt--2">
            {dictionary.blog.description}
          </p>
        </div>
      </header>

      <section className="content py--4">
        <PostsList posts={posts} shouldShowOderFilters={true} />
        <div className="my--2">
          <SectionTitle className="mb--2">{dictionary.tags.title}</SectionTitle>
          <TagsBox tags={tags} />
        </div>
      </section>
    </div>
  );
}
