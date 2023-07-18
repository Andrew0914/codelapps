import { NextRequest, NextResponse } from "next/server";
import { search } from "./controller";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  if (searchParams.get("term")) {
    const searcResults = await search(searchParams.get("term")!);
    return NextResponse.json(searcResults);
  }
  return NextResponse.json([]);
}
