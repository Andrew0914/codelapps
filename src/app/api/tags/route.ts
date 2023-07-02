import { NextRequest, NextResponse } from "next/server";
import { getAllTags } from "./controller";

export async function GET(request: NextRequest) {
  const tags = await getAllTags();
  return NextResponse.json({ tags });
}
