import { describe, expect, it, vi } from "vitest"

vi.mock("@/i18n/routing", () => ({ routing: { locales: ["en", "zh-TW"] } }))

vi.mock("@/data/projects", () => ({
  projects: [{ slug: "example", updatedAt: "2026-09-10" }],
}))
vi.mock("@/data/writing", () => ({
  writingEntries: [
    { locale: "en", slug: "example", updatedAt: "2026-09-01" },
    { locale: "zh-TW", slug: "example", updatedAt: "2026-09-01" },
  ],
}))

import sitemap from "./sitemap"

describe("sitemap content dates", () => {
  it("updates home and writing listings when their content changes", () => {
    const entries = sitemap()
    for (const prefix of ["", "/zh-TW"]) {
      expect(
        entries.find((entry) => entry.url === `https://kylewu.me${prefix}`)
          ?.lastModified,
      ).toEqual(new Date("2026-09-10"))
      expect(
        entries.find(
          (entry) => entry.url === `https://kylewu.me${prefix}/writing`,
        )?.lastModified,
      ).toEqual(new Date("2026-09-01"))
      expect(
        entries.find(
          (entry) => entry.url === `https://kylewu.me${prefix}/resume`,
        )?.lastModified,
      ).toEqual(new Date("2026-09-08"))
    }
  })
})
