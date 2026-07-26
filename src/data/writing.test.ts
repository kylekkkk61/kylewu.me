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
    const slug = writingEntries[0].slug

    expect(new Set(keys).size).toBe(keys.length)
    expect(getWritingEntry(slug, "zh-TW")?.locale).toBe("zh-TW")
    expect(getWritingIndexEntries("zh-TW")[0].locale).toBe("zh-TW")
    expect(getWritingAlternates(slug)).toEqual({
      en: `/writing/${slug}`,
      "zh-TW": `/zh-TW/writing/${slug}`,
    })
  })
})
