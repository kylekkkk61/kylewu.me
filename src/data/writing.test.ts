import { describe, expect, it } from "vitest"
import {
  getWritingAlternates,
  getWritingEntry,
  getWritingIndexEntries,
  loadWritingArticle,
  writingEntries,
} from "./writing"

describe("writing data", () => {
  it("keeps locale variants unique and exposes translated alternates", () => {
    const keys = writingEntries.map((entry) => `${entry.locale}:${entry.slug}`)
    const slugs = [...new Set(writingEntries.map((entry) => entry.slug))]
    const slug = slugs[0]

    expect(new Set(keys).size).toBe(keys.length)
    expect(
      slugs.every(
        (item) => getWritingEntry(item, "en") && getWritingEntry(item, "zh-TW"),
      ),
    ).toBe(true)
    expect(getWritingEntry(slug, "zh-TW")?.locale).toBe("zh-TW")
    expect(getWritingIndexEntries("zh-TW")[0].locale).toBe("zh-TW")
    expect(getWritingIndexEntries("missing")).toEqual([])
    expect(getWritingAlternates(slug)).toEqual({
      en: `/writing/${slug}`,
      "zh-TW": `/zh-TW/writing/${slug}`,
    })
  })

  it("loads the registered content and rejects unknown articles", async () => {
    const article = await loadWritingArticle(
      "confirmation-first-telegram-trading-workflow",
      "en",
    )

    expect(article).toBeTypeOf("function")
    await expect(loadWritingArticle("missing", "en")).resolves.toBeUndefined()
  })

  it("uses valid dates and sorts each locale newest first", () => {
    for (const locale of ["en", "zh-TW"]) {
      const entries = getWritingIndexEntries(locale)
      const publishedDates = entries.map((entry) => entry.publishedAt)

      expect(entries.every((entry) => entry.locale === locale)).toBe(true)
      expect(publishedDates).toEqual([...publishedDates].sort().reverse())

      for (const entry of entries) {
        expect(entry.publishedAt).toMatch(/^\d{4}-\d{2}-\d{2}$/)
        expect(entry.updatedAt).toMatch(/^\d{4}-\d{2}-\d{2}$/)
        expect(entry.updatedAt >= entry.publishedAt).toBe(true)
      }
    }
  })
})
