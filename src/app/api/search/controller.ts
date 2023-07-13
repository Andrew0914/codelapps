import { SearchResultItemProps } from "@/components/SearchBox/SearchResultItem";
import { getAllPostsMetaData } from "../posts/controller";

export async function search(searchTerm: string) {
  const posts = await getAllPostsMetaData();
  const foundPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const searchItems: SearchResultItemProps[] = foundPosts.map((post) => ({
    title: post.title,
    description: post.excerpt ?? post.title,
    variant: "post",
    url: `/blog/${post.slug}`,
  }));

  return searchItems;
}
