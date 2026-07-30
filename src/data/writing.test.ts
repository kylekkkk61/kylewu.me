import { describe, expect, it } from "vitest"
import {
  getWritingAlternates,
  getWritingEntry,
  getWritingIndexEntries,
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
    expect(getWritingIndexEntries("en")[0].slug).toBe(
      "participant-needs-service-design",
    )
    expect(getWritingAlternates(slug)).toEqual({
      en: `/writing/${slug}`,
      "zh-TW": `/zh-TW/writing/${slug}`,
    })
  })
})
