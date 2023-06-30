import { NextRequest, NextResponse } from "next/server";
import { getAllPostsMetaData } from "./controller";

export async function GET(request: NextRequest) {
  const posts = await getAllPostsMetaData();
  return NextResponse.json({ posts });
}
