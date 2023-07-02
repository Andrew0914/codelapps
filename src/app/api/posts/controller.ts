import { resolve } from "path";
import { readdir } from "node:fs/promises";
import { Post } from "@/models/Post";

async function getPostsFileNames() {
  const postsDir = resolve("src/posts");
  return await readdir(postsDir);
}

export async function getAllPostsMetaData() {
  const postsFileNames = await getPostsFileNames();

  const postsMetaData = postsFileNames.map(async (postFileName) => {
    const { meta } = (await import(`@/posts/${postFileName}`)) as {
      meta: Post;
    };
    return meta;
  });

  return Promise.all(postsMetaData);
}

export async function getPosts({ tag }: { tag?: string }) {
  const posts = await getAllPostsMetaData();
  if (!tag) return posts;

  return posts.filter(
    (post) => post.tags!.filter((postTag) => postTag.url === tag).length >= 1
  );
}

export async function getPostsMetaDataByFileName(fileName: string) {
  try {
    const { meta: postMetadata } = (await import(
      `@/posts/${fileName}.mdx`
    )) as {
      meta: Post;
    };
    return postMetadata;
  } catch (error) {
    console.log(error);
    return undefined;
  }
}
