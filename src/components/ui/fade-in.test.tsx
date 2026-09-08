import { cleanup, render } from "@testing-library/react"
import { renderToStaticMarkup } from "react-dom/server"
import { afterEach, describe, expect, it, vi } from "vitest"
import { FadeIn } from "./fade-in"

afterEach(() => {
  cleanup()
  vi.unstubAllGlobals()
})

describe("FadeIn progressive enhancement", () => {
  it("renders readable content before JavaScript runs", () => {
    const html = renderToStaticMarkup(<FadeIn>Portfolio evidence</FadeIn>)
    expect(html).toContain("Portfolio evidence")
    expect(html).not.toMatch(/opacity-0|animate-fade-up|visibility:\s*hidden/)
  })

  it("leaves content visible when observers are unavailable", () => {
    vi.stubGlobal("matchMedia", () => ({ matches: false }))
    vi.stubGlobal("IntersectionObserver", undefined)
    const { getByText } = render(<FadeIn>Portfolio evidence</FadeIn>)
    expect(getByText("Portfolio evidence").className).not.toMatch(
      /opacity-0|animate-fade-up/,
    )
  })

  it("does not animate when reduced motion is requested", () => {
    vi.stubGlobal("matchMedia", () => ({ matches: true }))
    const observer = vi.fn()
    vi.stubGlobal("IntersectionObserver", observer)
    const { getByText } = render(<FadeIn>Portfolio evidence</FadeIn>)
    expect(getByText("Portfolio evidence").className).not.toContain(
      "animate-fade-up",
    )
    expect(observer).not.toHaveBeenCalled()
  })
})
