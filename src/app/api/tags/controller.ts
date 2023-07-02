import { Tag } from "@/models/Post";
import { getAllPostsMetaData } from "../posts/controller";

export async function getAllTags() {
  const allPosts = await getAllPostsMetaData();
  const tags = allPosts.flatMap((post) => post.tags);

  return tags.reduce((acc, currentTag) => {
    const doesAlreadyExistTag =
      acc.filter((accTag) => accTag.url === currentTag!.url).length >= 1;

    return doesAlreadyExistTag ? acc : acc.concat([currentTag!]);
  }, [] as Tag[]);
}
