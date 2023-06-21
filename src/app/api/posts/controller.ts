
import { resolve } from "path";
import { readdir } from "node:fs/promises";
import { Post } from "@/models/Post";


async function getPostsFileNames() {
  const postsDir = resolve("src/posts");
  return await readdir(postsDir);
}

export async function getPostsMetaData() {
  const postsFileNames = await getPostsFileNames();

  const postsMetaData = postsFileNames.map(async (postFileName) => {
    const { meta } = (await import(`@/posts/${postFileName}`)) as {
      meta: Post;
    };
    return meta;
  });

  return Promise.all(postsMetaData);
}