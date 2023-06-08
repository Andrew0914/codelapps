import dynamic from "next/dynamic";
import components from "@/app/utils/PostsUIArranger";

export default async function PostPage(params) {
  const Post = dynamic(() => import(`@/app/posts/${params.params.slug}.mdx`));

  return (
    <section className="content flex--center-column">
      <Post components={components} />
    </section>
  );
}
