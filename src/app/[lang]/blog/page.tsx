import { getAllPostsMetaData } from "@/app/api/posts/controller";
import { getAllTags } from "@/app/api/tags/controller";
import PostsList from "@/components/PostsList";
import SectionTitle from "@/components/ui/SectionTitle";
import TagsBox from "@/components/ui/TagsBox";
import { RouteBlogParams } from "@/models/RouteParams";

export default async function BlogPage({ searchParams }: RouteBlogParams) {
  // TODO: get current tag posts or all posts depend on params
  const posts = await getAllPostsMetaData();
  const tags = await getAllTags();

  return (
    <div className="flex--center-column">
      <header className="w--full bg--lead">
        <div className="content flex--center-column pt--5 pb--3">
          <h1 className="header--0 text--center">
            {searchParams.tag ? searchParams.tag : "The Blog"}
          </h1>

          <p className="text--content text--md container--xs text--center mt--2">
            ¡Bienvenido a mi blog! Aquí encontrarás contenido sobre
            programación, diseño, videojuegos y creatividad.
          </p>
        </div>
      </header>

      <section className="content py--4">
        <PostsList posts={posts} />
        <div className="my--2">
          <SectionTitle className="mb--2">Tags</SectionTitle>
          <TagsBox tags={tags} />
        </div>
      </section>
    </div>
  );
}
