import { describe, expect, it } from "vitest"
import { getWritingIndexEntries } from "@/data/writing"
import { createRssResponse } from "./rss"

describe("RSS feed", () => {
  it("returns a valid English feed with English entries only", async () => {
    const response = createRssResponse("en")
    const xml = await response.text()
    const document = new DOMParser().parseFromString(xml, "application/xml")

    expect(response.headers.get("content-type")).toBe(
      "application/rss+xml; charset=utf-8",
    )
    expect(document.querySelector("parsererror")).toBeNull()
    expect(document.documentElement.nodeName).toBe("rss")
    expect(document.querySelector("language")?.textContent).toBe("en")
    expect(document.querySelectorAll("item")).toHaveLength(
      getWritingIndexEntries("en").length,
    )
    expect(xml).toContain('href="https://kylewu.me/feed.xml"')
    expect(xml).toContain("https://kylewu.me/writing/")
    expect(xml).not.toContain("確認優先")
  })

  it("returns a valid Traditional Chinese feed with localized entries only", async () => {
    const response = createRssResponse("zh-TW")
    const xml = await response.text()
    const document = new DOMParser().parseFromString(xml, "application/xml")

    expect(document.querySelector("parsererror")).toBeNull()
    expect(document.querySelector("language")?.textContent).toBe("zh-TW")
    expect(document.querySelectorAll("item")).toHaveLength(
      getWritingIndexEntries("zh-TW").length,
    )
    expect(xml).toContain('href="https://kylewu.me/zh-TW/feed.xml"')
    expect(xml).toContain("https://kylewu.me/zh-TW/writing/")
    expect(xml).toContain("確認優先")
    expect(xml).not.toContain("How a Confirmation-First")
  })
})
