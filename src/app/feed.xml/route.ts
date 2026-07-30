import { createRssResponse } from "@/lib/rss"

export const dynamic = "force-static"

export function GET() {
  return createRssResponse("en")
}
