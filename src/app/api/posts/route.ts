import { NextRequest, NextResponse } from "next/server";
import { getPostsMetaData } from "./controller";

export async function GET(request: NextRequest) {
  const posts = await getPostsMetaData();
  return NextResponse.json({ posts });
}
